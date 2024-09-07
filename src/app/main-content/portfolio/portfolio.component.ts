import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PortfolioProjectComponent } from './portfolio-project/portfolio-project.component';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, PortfolioProjectComponent, ScrollAnimationDirective, TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  projects = [
    {
      imageSrc: '../../../assets/img/portfolio/join.png',
      altText: 'Join',
      projectName: 'Join',
      languages: 'JavaScript | HTML | CSS | Firebase',
      description: 'JOIN_DESCRIPTION',
      liveTestLink: 'https://join.patrick-nigrin.de',
      githubLink: 'https://github.com/Patrick0815300/JOIN'
    },
    {
      imageSrc: '../../../assets/img/portfolio/el_pollo_loco.png',
      altText: 'el_pollo_loco',
      projectName: 'El Pollo Loco',
      languages: 'JavaScript | HTML | CSS',
      description: 'EL_POLLO_DESCRIPTION',
      liveTestLink: 'https://epl.patrick-nigrin.de',
      githubLink: 'https://github.com/Patrick0815300/El-Pollo-Loco'
    },
    /* {
      imageSrc: '../../../assets/img/portfolio/dabubble.png',
      altText: 'DABubble',
      projectName: 'DA Bubble',
      languages: 'Angular | TypeScript | Firebase',
      description: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      liveTestLink: '#',
      githubLink: '#'
    } */
  ];
}
