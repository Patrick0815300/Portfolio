import { RouterModule, Routes } from '@angular/router';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MainContentComponent } from './main-content/main-content.component';
import { AboveTheFoldComponent } from './main-content/above-the-fold/above-the-fold.component';
import { AboutMeComponent } from './main-content/about-me/about-me.component';
import { MySkillsComponent } from './main-content/my-skills/my-skills.component';
import { PortfolioComponent } from './main-content/portfolio/portfolio.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'privacy', component: PrivacyPolicyComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled',
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
