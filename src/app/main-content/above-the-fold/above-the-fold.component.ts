import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { ScrollService } from '../../shared/services/scroll.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-above-the-fold',
  standalone: true,
  imports: [ScrollAnimationDirective, TranslateModule, HeaderComponent, CommonModule],
  templateUrl: './above-the-fold.component.html',
  styleUrl: './above-the-fold.component.scss'
})
export class AboveTheFoldComponent {
  isImageLoaded: boolean[] = [];
  images = [
    {
      expample1: '../../../assets/img/general/example1.png',
      shadow: '../../../assets/img/background/29. photo_shadows.png',
    },
  ];
  constructor(private scrollService: ScrollService) {
    this.isImageLoaded = new Array(this.images.length).fill(false);
  }

  onSectionClick(sectionId: string) {
    this.scrollService.scrollToSection(sectionId);
  }

  onImageLoad(index: number) {
    this.isImageLoaded[index] = true;
  }

  onImageError(index: number) {
    this.isImageLoaded[index] = false;
  }
}
