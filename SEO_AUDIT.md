# SEO-Audit & Maßnahmenplan – patrick-nigrin.dev

Stand: 01.08.2026 · Basis: Code-Review (Angular 17 SPA) + Live-Check der Seite + Google-Index-Check

## Ist-Zustand in einem Satz

Technisch solide gebaute Angular-SPA, die für Suchmaschinen aktuell praktisch unsichtbar ist: kein SSR/Prerendering, keine robots.txt/sitemap, keine dynamischen Meta-Tags, mehrfache H1s, keine Social-Preview-Tags – und laut `site:patrick-nigrin.dev`-Suche derzeit nicht im Google-Index auffindbar.

---

## Kritische Findings

### 1. Reines Client-Side Rendering (kein SSR/Prerendering)
`package.json` enthält kein `@angular/ssr`. Googlebot rendert JS zwar meist, aber verzögert und nicht garantiert; LinkedIn-, Twitter/X-, WhatsApp- und die meisten anderen Social-Crawler führen **kein** JavaScript aus und sehen nur die leere `<app-root>`-Hülle aus `src/index.html`. Das erklärt vermutlich auch, warum Link-Previews beim Teilen kaputt sein dürften.

### 2. Live-Seite ≠ Code im Repo
Der lokale `src/index.html` hat Title *„Patrick Nigrin IT-Projektleitung"* und eine Projektleitungs-Description. Die **live** ausgelieferte Seite zeigt Title *„Patrick Nigrin Webentwicklung"* mit einer generischen Agentur-Description (SEO, Online-Shops, Hosting-Beratung). Grund: der aktuelle Repo-Stand wurde bewusst noch nicht deployed – das Deployment soll gebündelt zusammen mit den SEO-Änderungen erfolgen. Bis dahin arbeiten alle folgenden Punkte auf Basis des Repo-Stands (Title „IT-Projektleitung"), der dann final festgelegt werden sollte, bevor gemeinsam live gegangen wird.

### 3. robots.txt und sitemap.xml fehlen komplett
Weder im Repo (`src/assets`) noch live unter `/robots.txt` bzw. `/sitemap.xml` vorhanden (beide liefern leere Antworten). Ohne Sitemap dauert die Erstindexierung neuer Seiten deutlich länger.

### 4. Mehrere H1-Tags auf einer einzigen Seite
Die Startseite ist eine Single-Page mit Anker-Sections. Aktuell haben **sechs Komponenten eigene `<h1>`**:
- `above-the-fold` → „Patrick Nigrin"
- `about-me` → „ABOUT_ME_TITLE"
- `my-skills` → „MY_SKILLS_TITLE" (sogar **doppelt**, Zeile 4 und 37 in `my-skills.component.html`)
- `portfolio` → „Portfolio"
- `review` → „Reviews"
- `contactform` → „CONTACT_TITLE"

Für Google sollte es **eine** H1 pro Seite geben (z. B. „Patrick Nigrin – Frontend-Entwickler & IT-Projektleiter aus Jena"), alle anderen auf H2 herabstufen.

### 5. Keine dynamischen Meta-Tags pro Route
`Meta`/`Title` Services von Angular werden nirgends importiert (`app.routes.ts` hat 3 Routen: `/`, `/privacy`, `/legal` – alle drei liefern denselben Title/Description aus `index.html`). Dadurch: identische, doppelte Title-Tags über alle Seiten hinweg.

### 6. `lang="en"` im HTML-Tag, Inhalt aber standardmäßig Deutsch
`src/index.html`: `<html lang="en">`, während `AppComponent` `translate.setDefaultLang('de')` setzt. Falsches Sprach-Signal an Suchmaschinen und Screenreader.

### 7. Keine Open Graph / Twitter-Card-Tags
Kein `og:title`, `og:description`, `og:image`, `twitter:card` etc. in `index.html`. Verschärft durch Punkt 1 (CSR) – Vorschaubilder beim Teilen auf LinkedIn/WhatsApp fehlen wahrscheinlich komplett.

### 8. Keine strukturierten Daten (JSON-LD)
Kein Schema.org-Markup (`Person`, `ProfessionalService`, `CreativeWork` für Projekte). Verschenkt Potenzial für Rich Snippets und Knowledge-Panel-Signale zum eigenen Namen.

### 9. Zweisprachigkeit (DE/EN) rein clientseitig über ngx-translate
`languages.service.ts` wechselt Sprache nur im Browser, es gibt keine eigenen URLs (`/en/...`) und kein `hreflang`. Suchmaschinen indexieren faktisch nur eine Sprachversion – die andere ist unsichtbar für SEO.

### 10. Bilder: 5,1 MB, ausschließlich PNG, kein Lazy-Loading
44 PNGs, größte Einzeldatei 728 KB (`33. purple_shadow_footer.png`), keine `loading="lazy"`-Attribute im gesamten Code, keine WebP/AVIF, keine `srcset`. Wirkt sich direkt auf Core Web Vitals (LCP) aus, die ein Rankingfaktor sind.

### 11. Kein Canonical-Tag
Fehlt in `index.html`, sinnvoll spätestens sobald SSR/Prerendering aktiv ist (Duplicate-Content-Schutz).

### 12. Kleinere Punkte
- Externe Links (`target="_blank"`, z. B. Github/LinkedIn-Buttons, Portfolio „Live test"-Links) ohne `rel="noopener noreferrer"`.
- `alt`-Texte teils nicht beschreibend genug für Bedeutung der Grafik (z. B. `alt="green-shadow"` bei reinen Deko-Bildern wäre besser leer/`role="presentation"`, ist bei einigen schon korrekt gelöst – nur inkonsistent).

---

## Bereits umgesetzt

- [x] **Google Fonts lokal hosten** (01.08.2026): Beide Google-Fonts-`<link>`-Tags aus `src/index.html` entfernt. Material Icons (für `mat-icon`) wird jetzt lokal aus `src/assets/fonts/material-icons-regular.woff2` per `@font-face` in `src/styles.scss` geladen – keine Verbindung mehr zu `fonts.googleapis.com`/`fonts.gstatic.com`. Roboto war durch `* { font-family: 'Poppins' !important; }` ohnehin nie sichtbar und wurde ersatzlos gestrichen (ein externer Request weniger, kleiner Performance-Gewinn). Datenschutzerklärung (`privacy-policy.component.html`) entsprechend angepasst: „Google Fonts"-Abschnitt beschreibt jetzt lokales Hosting statt Drittanbieter-Verbindung, analog zum bestehenden Font-Awesome-Abschnitt; der zugehörige EU-US-Data-Privacy-Framework-Absatz wurde entfernt, da keine Datenübertragung an Google mehr stattfindet. Kein Cookie-Banner nötig, war aber ohnehin unabhängig davon schon nicht der Fall (siehe Analyse im Chat-Verlauf).

---

## Maßnahmenplan (gemeinsam abzuarbeiten)

### Phase 1 – Quick Wins (wenige Stunden, hoher Hebel)
- [x] Deployment: Repo-Stand mit allen Phase-1-Änderungen am 01.08.2026 auf Hetzner (`public_html`) ausgerollt
- [x] Google Search Console: Domain-Property `patrick-nigrin.dev` per DNS-TXT-Record verifiziert, Sitemap eingereicht (Status „Konnte nicht abgerufen werden" direkt nach Einreichung ist normal/Verarbeitungsverzögerung, sollte sich innerhalb weniger Tage von selbst auf „Erfolgreich" ändern – Datei ist nachweislich erreichbar)
- [ ] Bing Webmaster Tools: Property per „Import from Google Search Console" anlegen (1-Klick, sobald GSC bestätigt ist)
- [ ] Indexierung der Startseite über URL-Prüfung in GSC beantragen
- [x] `robots.txt` + `sitemap.xml` angelegt (`src/robots.txt`, `src/sitemap.xml`) und in `angular.json` unter `assets` eingebunden
- [x] Eine H1 pro Seite: `above-the-fold` behält die H1 „Patrick Nigrin", alle anderen (`about-me`, `my-skills` inkl. Duplikat, `portfolio`, `review`, `contactform`) auf H2 herabgestuft, `contactform`-Subtitle entsprechend auf H3; zugehörige SCSS-Selektoren mitgezogen
- [x] `lang="en"` → `lang="de"` in `index.html` korrigiert, zusätzlich dynamisches Update von `document.documentElement.lang` bei Sprachwechsel in `app.component.ts`
- [x] Open-Graph- und Twitter-Card-Tags in `index.html` ergänzt (Title, Description, `og:image` = `example2.png`)
- [x] Canonical-Tag ergänzt (`https://patrick-nigrin.dev/`)

### Phase 2 – Technisch (1–3 Tage)
- [x] **SSR/Prerendering mit `@angular/ssr`** (01.08.2026): `ng add @angular/ssr` zunächst in isolierter Testkopie ausgeführt und mit `ng build` verifiziert, dann die geprüften Dateiänderungen ins Repo übernommen. Neu: `src/main.server.ts`, `src/app/app.config.server.ts`, `server.ts` (Express-Server, wird für reines Prerendering nicht zwingend gebraucht, ist aber Teil des Standard-Setups). `angular.json` nutzt jetzt `"prerender": true` – bei jedem `ng build` werden alle 3 statischen Routen (`/`, `/privacy`, `/legal`) zu fertigem HTML vorgerendert. Dadurch bekommen Googlebot & Social-Crawler (LinkedIn, WhatsApp etc.) direkt vollständigen Inhalt statt der leeren `<app-root>`-Hülle – und Direktaufrufe von `/privacy` bzw. `/legal` funktionieren jetzt auch ohne SPA-Fallback-Rewrite, weil echte `privacy/index.html`- und `legal/index.html`-Dateien existieren.
  - **Wichtiger Bugfix dabei gefunden:** Beim ersten Testbuild lieferte das vorgerenderte HTML komplett leere Texte an allen `| translate`-Stellen (Nav, Überschriften, Buttons – überall nur `<!--ngetn-->`). Ursache: `ngx-translate` lädt die Übersetzungsdateien per HTTP mit einer relativen URL (`./assets/i18n/de.json`), die sich serverseitig (kein Browser-Kontext) nicht auflösen lässt. Gefixt in `src/assets/i18n/app.translate-loader.ts`: Auf dem Server werden `de.json`/`en.json` jetzt direkt als Modul importiert und aus dem Bundle gelesen statt per HTTP nachgeladen (`isPlatformServer`-Check). Ohne diesen Fix wäre eine Seite ohne jeglichen Text live gegangen.
  - `provideClientHydration()` in `app.config.ts` ergänzt, damit der Browser das vorgerenderte HTML beim Laden übernimmt statt es komplett neu zu rendern.
  - **Deployment bleibt unverändert einfach:** Da alle 3 Routen zu statischem HTML vorgerendert werden, reicht weiterhin ein reiner Datei-Upload von `dist/portfolio/browser/*` nach `public_html` – kein Node-Server/`server.mjs` auf Hetzner nötig, kein Hosting-Wechsel.
  - Lokal testen vor dem nächsten Deploy: `npm install` (holt `@angular/ssr`, `@angular/platform-server`, `express` etc. gemäß aktualisierter `package.json`), dann `ng build` und den Inhalt von `dist/portfolio/browser/index.html`, `.../privacy/index.html`, `.../legal/index.html` im Editor aufmachen – dort sollten alle Übersetzungen als echter Text vorhanden sein (kein `<!--ngetn-->` mehr).
- [x] **Dynamische Title/Meta-Tags pro Route** (01.08.2026): Neuer `src/app/shared/seo.service.ts` liest `title`/`description`/`canonical` aus `route.data` (definiert in `app.routes.ts`) und setzt bei jeder Navigation Title, Meta-Description, `og:title`/`og:description`/`og:url`, Twitter-Tags und den Canonical-Link neu – funktioniert dank SSR sowohl im Browser als auch beim Prerendern, landet also direkt im statischen HTML jeder Route. `/privacy` hat jetzt eigene Description/Canonical statt der Homepage-Werte, `/legal` ebenso. In `app.component.ts` wird `seo.init()` im Constructor gestartet.
  - **Nebenfund gefixt:** `/privacy` hatte zwei H1 – ein dupliziertes Mini-Impressum oben drüber, das inhaltlich schon komplett und identisch auf `/legal` steht (beide offenbar mit demselben Online-Generator erstellt). Dopplung in `privacy-policy.component.html` entfernt, jetzt genau eine H1 („Datenschutzerklärung") pro Route.
  - Verifiziert: alle 3 vorgerenderten Routen haben im Build unterschiedliche `<title>`, `description`, `canonical`, `og:title`, `og:url` – keine Duplicate-Content-Signale mehr zwischen den Seiten.
- [ ] `hreflang`-Strategie für DE/EN festlegen (z. B. eigene URLs `/en` statt rein clientseitigem Sprachwechsel)
- [ ] JSON-LD strukturierte Daten ergänzen (`Person`, ggf. `ProfessionalService`, `CreativeWork`/`ItemList` für Portfolio-Projekte)
- [x] **Bilder auf WebP umgestellt + lazy loading** (02.08.2026): Alle 45 PNG/JPG-Bilder in `src/assets/img` per Pillow zu WebP konvertiert (Qualität 82) – Gesamtgröße 4,96 MB → 0,99 MB (−80 %), größte Einzeldatei vorher 728 KB, jetzt 192 KB. Alle Referenzen in `.ts`/`.html` auf `.webp` umgestellt (inkl. `og:image`/`twitter:image` in `index.html`). `loading="lazy"` an allen Below-the-fold-Bildern ergänzt (About-Me-Icons & Foto, Skill-Icons, Portfolio-Projektbilder, Footer-Icons, Kontakt-Hintergrundgrafik) – Hero-Bereich (`above-the-fold`) bewusst ausgenommen, damit das LCP-Bild nicht verzögert lädt. Im Testbuild verifiziert: 0 Fehler, Übersetzungen weiterhin vollständig, 1 H1 pro Seite.
  - **Alte PNG/JPG-Originale nicht gelöscht** (siehe Datenverarbeitungs-Policy), sondern nach `_aussortiert_originale_vor_webp/` innerhalb des Repos kopiert. Die Originale liegen technisch weiterhin zusätzlich in `src/assets/img/*.png`/`*.jpg` und werden von `ng build` (Assets-Ordner wird komplett kopiert) noch mit ins Deployment gepackt, obwohl sie nirgends mehr referenziert werden – reiner toter Ballast (kein Performance-Problem, aber unnötig). Bitte selbst prüfen und bei Bedarf `src/assets/img/*.png`/`*.jpg` sowie den `_aussortiert_originale_vor_webp/`-Ordner löschen, sobald die WebP-Version bestätigt gut aussieht.
- [x] **`rel="noopener noreferrer"`** an den 6 externen `target="_blank"`-Links ergänzt, die es noch nicht hatten (Footer- und Hero-Social-Icons, Portfolio-Projekt-Buttons „Live test"/„Github"). Die bereits vorhandenen Links in der Datenschutzerklärung hatten es schon.

### Phase 3 – Content & Off-Page (laufend)
- [ ] Projekt-Cases im Portfolio um mehr Fließtext erweitern (Problem/Lösung/Ergebnis statt nur Bild + Tech-Stack) – mehr indexierbarer Content
- [ ] Core Web Vitals nach Bildoptimierung mit PageSpeed Insights / Lighthouse messen
- [ ] Backlinks aufbauen: LinkedIn-Profil, Malt-Profil, GitHub-Profil konsequent auf die Domain verlinken
- [ ] Ggf. Google Business Profile für lokales SEO (Jena, Thüringen) anlegen, falls lokale Auftraggeber relevant sind

---

## Offene Fragen
1. Welche Version ist die „echte" – die Live-Seite („Webentwicklung") oder der Repo-Stand („IT-Projektleitung")? Das bestimmt den Fokus-Keyword-Ansatz.
2. Zielkunden eher lokal (Jena/Thüringen) oder deutschlandweit/remote?
3. Soll Englisch als vollwertige, eigenständig indexierbare Sprachversion behandelt werden, oder reicht clientseitiger Toggle?
