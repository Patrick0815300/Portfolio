import { Component, Input, SimpleChanges } from '@angular/core';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  @Input() visibility: string = 'hidden';
}
