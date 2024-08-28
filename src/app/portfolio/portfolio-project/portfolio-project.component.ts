import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-project.component.html',
  styleUrls: ['./portfolio-project.component.scss']
})
export class PortfolioProjectComponent {
  @Input() imageSrc: string = '';
  @Input() altText: string = '';
  @Input() projectName: string = '';
  @Input() languages: string = '';
  @Input() description: string = '';
  @Input() liveTestLink: string = '';
  @Input() githubLink: string = '';
  @Input() reverse: boolean = false;
}
