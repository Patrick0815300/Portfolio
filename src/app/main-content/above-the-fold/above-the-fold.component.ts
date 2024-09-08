import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { ScrollService } from '../../shared/services/scroll.service';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [ScrollAnimationDirective, TranslateModule, HeaderComponent],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {
  constructor(private scrollService: ScrollService) { }
  onSectionClick(sectionId: string) {
    this.scrollService.scrollToSection(sectionId);
  }
}
