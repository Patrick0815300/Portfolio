import { Component, HostListener, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainContentComponent } from './main-content/main-content.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    HttpClientModule,
    TranslateModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'portfolio';
  currentLang = 'en';
  currentSection: string = '';

  constructor(public translate: TranslateService) {
    this.translate.setDefaultLang('en');

    this.translate.use('en');
    this.translate.setDefaultLang('en');
  }

  switchLanguage(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkSectionInView();
  }

  checkSectionInView() {
    const sections = ['aboveTheFold', 'aboutme', 'skills', 'portfolio', 'contact'];
    const offset = 350; // Pufferzone von 150px

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const bounding = element.getBoundingClientRect();
        const isVisible = bounding.top < window.innerHeight - offset && bounding.bottom > offset;

        if (isVisible) {
          this.currentSection = section;
          break;  // Stop loop once the current section is found
        }
      }
    }
  }


}
