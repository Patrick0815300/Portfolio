import { Component } from '@angular/core';
import { PortfolioProjectComponent } from './portfolio-project/portfolio-project.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [PortfolioProjectComponent, CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  projects = [
    {
      imageSrc: '../../../assets/img/portfolio/join.png',
      altText: 'Join',
      projectName: 'Join',
      languages: 'Angular | TypeScript | HTML | CSS | Firebase',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      liveTestLink: '#',
      githubLink: '#'
    },
    {
      imageSrc: '../../../assets/img/portfolio/el_pollo_loco.png',
      altText: 'el_pollo_loco',
      projectName: 'El Pollo Loco',
      languages: 'JavaScript | HTML | CSS',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Help Pollo to find coins and bottles to fight against the killer Chicken.',
      liveTestLink: '#',
      githubLink: '#'
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
