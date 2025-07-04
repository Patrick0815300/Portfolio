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
      imageSrc: '../../../assets/img/portfolio/hrm.png',
      altText: 'HRM',
      projectName: 'HRM-System',
      status: 'in-progress',
      languages: 'Angular | TypeScript | Supabase',
      description: 'DABUBBLE_DESCRIPTION',
      liveTestLink: 'https://hrm.patrick-nigrin.dev',
      githubLink: 'https://github.com/Patrick0815300/HRM'
    },
    {
      imageSrc: '../../../assets/img/portfolio/dabubble.png',
      altText: 'DABubble',
      projectName: 'DA Bubble',
      status: 'online',
      languages: 'Angular | TypeScript | Firebase',
      description: 'DABUBBLE_DESCRIPTION',
      liveTestLink: 'https://dab.patrick-nigrin.dev',
      githubLink: 'https://github.com/Patrick0815300/DABubble'
    },
    {
      imageSrc: '../../../assets/img/portfolio/join.png',
      altText: 'Join',
      projectName: 'Join',
      status: 'online',
      languages: 'JavaScript | HTML | CSS | Firebase',
      description: 'JOIN_DESCRIPTION',
      liveTestLink: 'https://join.patrick-nigrin.dev',
      githubLink: 'https://github.com/Patrick0815300/JOIN'
    },
    {
      imageSrc: '../../../assets/img/portfolio/el_pollo_loco.png',
      altText: 'el_pollo_loco',
      projectName: 'El Pollo Loco',
      status: 'online',
      languages: 'JavaScript | HTML | CSS',
      description: 'EL_POLLO_DESCRIPTION',
      liveTestLink: 'https://epl.patrick-nigrin.dev',
      githubLink: 'https://github.com/Patrick0815300/El-Pollo-Loco'
    },
  ];
}
