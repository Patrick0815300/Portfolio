import { Component, Input } from '@angular/core';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [ScrollAnimationDirective, TranslateModule, CommonModule],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  @Input() visibility: string = 'hidden';
  images = [
    {
      example2: '../../../assets/img/general/example2.png',
      shadow: '../../../assets/img/background/30. purple_shadow_about_me.png',
    }
  ]

  isImageLoaded: boolean[] = Array(this.images.length).fill(false);

  onImageLoad(index: number) {
    this.isImageLoaded[index] = true;
  }

  onImageError(index: number) {
    this.isImageLoaded[index] = false;
  }

}
