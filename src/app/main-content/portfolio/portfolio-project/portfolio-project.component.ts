import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ScrollAnimationDirective } from '../../../directives/scroll-animation.directive';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-portfolio-project',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective, TranslateModule],
  templateUrl: './portfolio-project.component.html',
  styleUrl: './portfolio-project.component.scss'
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
