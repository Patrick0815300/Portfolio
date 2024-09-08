import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LanguageService } from '../../../assets/i18n/languages.service';
import { RouterModule } from '@angular/router';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    TranslateModule,
    MatSlideToggleModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen = false;
  isChecked = true;

  constructor(public languageService: LanguageService, private scrollService: ScrollService) { }

  @Input() currentSection!: string;

  switchLanguage(lang: string) {
    this.languageService.switchLanguage(lang);
  }

  isActiveLang(lang: string): boolean {
    return this.languageService.getCurrentLanguage() === lang;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleMenuWithDelay(linkId: string) {
    setTimeout(() => {
      this.menuOpen = false;
      document.getElementById(linkId)?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  }

  onSectionClick(sectionId: string) {
    setTimeout(() => {
      this.scrollService.scrollToSection(sectionId);
    }, 500);
  }
}


