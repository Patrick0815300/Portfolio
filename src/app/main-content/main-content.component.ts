import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactformComponent } from './contactform/contactform.component';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/header/header.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    AboveTheFoldComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    ContactformComponent,
    TranslateModule,
    CommonModule,
    HeaderComponent
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {

  @Output() sectionChange = new EventEmitter<string>();

  elementVisibility: { [key: string]: string } = {
    element1: 'hidden',
    aboutme: 'hidden',
    skills: 'hidden',
    portfolio: 'hidden',
    contact: 'hidden',
  };

  currentSection: string = '';

  @HostListener('window:scroll', ['$event'])
  checkScroll(event: Event) {
    this.toggleElementVisibility('element1', '#element1');
    this.toggleElementVisibility('aboutme', '#aboutme');
    this.toggleElementVisibility('skills', '#skills');
    this.toggleElementVisibility('portfolio', '#portfolio');
    this.toggleElementVisibility('contact', '#contact');
  }

  toggleElementVisibility(key: string, selector: string) {
    const element = document.querySelector(selector);
    const elementPosition = element?.getBoundingClientRect().top;
    const scrollPosition = window.innerHeight;

    if (elementPosition && elementPosition < scrollPosition) {
      this.elementVisibility[key] = 'visible';
      this.currentSection = key;
    } else {
      this.elementVisibility[key] = 'hidden';
    }
  }


}
