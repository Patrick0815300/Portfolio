import { RouterModule, Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AboveTheFoldComponent } from './main-content/above-the-fold/above-the-fold.component';
import { AboutMeComponent } from './main-content/about-me/about-me.component';
import { MySkillsComponent } from './main-content/my-skills/my-skills.component';
import { PortfolioComponent } from './main-content/portfolio/portfolio.component';
import { NgModule } from '@angular/core';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';


export const routes: Routes = [
    {
        path: '',
        component: MainContentComponent,
        data: {
            title: 'Patrick Nigrin IT-Projektleitung',
            description: 'IT-Projektleitung und Projektmanagement für Softwareprojekte, Websites und Webanwendungen – mit technischem Hintergrund als Frontend-Entwickler. Anforderungsanalyse, agile Projektsteuerung und technische Beratung aus Jena.',
            canonical: 'https://patrick-nigrin.dev/'
        }
    },
    {
        path: 'privacy',
        component: PrivacyPolicyComponent,
        data: {
            title: 'Datenschutzerklärung | Patrick Nigrin',
            description: 'Datenschutzerklärung von Patrick Nigrin: Informationen zur Verarbeitung personenbezogener Daten beim Besuch dieser Website.',
            canonical: 'https://patrick-nigrin.dev/privacy'
        }
    },
    {
        path: 'legal',
        component: LegalNoticeComponent,
        data: {
            title: 'Impressum | Patrick Nigrin',
            description: 'Impressum und Anbieterkennzeichnung von Patrick Nigrin gemäß § 5 TMG.',
            canonical: 'https://patrick-nigrin.dev/legal'
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled',
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
