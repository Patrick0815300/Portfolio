import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

export interface SeoRouteData {
  title?: string;
  description?: string;
  canonical?: string;
}

/**
 * Setzt Title, Meta-Description, Open-Graph/Twitter-Tags und den Canonical-Link
 * pro Route (aus route.data) neu. Laeuft sowohl im Browser als auch waehrend
 * SSR/Prerendering, dadurch landen die korrekten Werte direkt im statischen HTML
 * jeder vorgerenderten Route (/, /privacy, /legal) statt ueberall nur die
 * Homepage-Werte aus index.html zu zeigen.
 */
@Injectable({ providedIn: 'root' })
export class SeoService {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private title: Title,
    private meta: Meta,
    @Inject(DOCUMENT) private document: Document
  ) { }

  init(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => {
          let route = this.activatedRoute;
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        mergeMap((route) => route.data)
      )
      .subscribe((data: SeoRouteData) => this.applySeoData(data));
  }

  private applySeoData(data: SeoRouteData): void {
    if (data.title) {
      this.title.setTitle(data.title);
      this.meta.updateTag({ property: 'og:title', content: data.title });
      this.meta.updateTag({ name: 'twitter:title', content: data.title });
    }

    if (data.description) {
      this.meta.updateTag({ name: 'description', content: data.description });
      this.meta.updateTag({ property: 'og:description', content: data.description });
      this.meta.updateTag({ name: 'twitter:description', content: data.description });
    }

    if (data.canonical) {
      this.setCanonicalUrl(data.canonical);
      this.meta.updateTag({ property: 'og:url', content: data.canonical });
    }
  }

  private setCanonicalUrl(url: string): void {
    let link: HTMLLinkElement | null = this.document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
