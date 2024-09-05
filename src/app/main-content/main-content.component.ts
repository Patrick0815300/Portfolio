import { Component, HostListener } from '@angular/core';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactformComponent } from './contactform/contactform.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [AboveTheFoldComponent, AboutMeComponent, MySkillsComponent, PortfolioComponent, ContactformComponent],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss',
})
export class MainContentComponent {
  elementVisibility: { [key: string]: string } = {
    element1: 'hidden',
    aboutme: 'hidden',
    skills: 'hidden',
    element4: 'hidden',
    element5: 'hidden',
  };

  @HostListener('window:scroll', ['$event'])
  checkScroll(event: Event) {
    this.toggleElementVisibility('element1', '#element1');
    this.toggleElementVisibility('aboutme', '#aboutme');
    this.toggleElementVisibility('skills', '#skills');
    this.toggleElementVisibility('element4', '#element4');
    this.toggleElementVisibility('element5', '#element5');
  }

  toggleElementVisibility(key: string, selector: string) {
    const element = document.querySelector(selector);
    const elementPosition = element?.getBoundingClientRect().top;
    const scrollPosition = window.innerHeight;

    if (elementPosition && elementPosition < scrollPosition) {
      this.elementVisibility[key] = 'visible';
    } else {
      this.elementVisibility[key] = 'hidden';
    }
  }
}
