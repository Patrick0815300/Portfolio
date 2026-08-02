import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollService } from '../../shared/services/scroll.service';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective, TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  skills = [
    { src: '../../../assets/img/skills/scrum.webp', alt: 'scrum', name: 'Scrum' },
    { src: '../../../assets/img/skills/git.webp', alt: 'git', name: 'Git' },
    { src: '../../../assets/img/skills/api.webp', alt: 'api', name: 'Rest-Api' },
    { src: '../../../assets/img/skills/angular.webp', alt: 'angular', name: 'Angular' },
    { src: '../../../assets/img/skills/typescript.webp', alt: 'typescript', name: 'TypeScript' },
    { src: '../../../assets/img/skills/javascript.webp', alt: 'javascript', name: 'JavaScript' },
    { src: '../../../assets/img/skills/html.webp', alt: 'html', name: 'HTML' },
    { src: '../../../assets/img/skills/css.webp', alt: 'css', name: 'CSS' },
    { src: '../../../assets/img/skills/firebase.webp', alt: 'firebase', name: 'Firebase' },
    { src: '../../../assets/img/skills/material_design.webp', alt: 'material_design', name: 'Material Design' },
    { src: '../../../assets/img/skills/supabase-logo-icon.webp', alt: 'supabase', name: 'Supabase' },
    { src: '../../../assets/img/skills/learning_white.svg', alt: 'learning', name: 'Continually Learning', isSvg: true }
  ];

  @Input() visibility: string = 'hidden';

  constructor(private scrollService: ScrollService) { }
  onSectionClick(sectionId: string) {
    this.scrollService.scrollToSection(sectionId);
  }
}
