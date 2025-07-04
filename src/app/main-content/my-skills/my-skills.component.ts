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
    { src: '../../../assets/img/skills/html.png', alt: 'html', name: 'HTML' },
    { src: '../../../assets/img/skills/css.png', alt: 'css', name: 'CSS' },
    { src: '../../../assets/img/skills/javascript.png', alt: 'javascript', name: 'JavaScript' },
    { src: '../../../assets/img/skills/typescript.png', alt: 'typescript', name: 'TypeScript' },
    { src: '../../../assets/img/skills/angular.png', alt: 'angular', name: 'Angular' },
    { src: '../../../assets/img/skills/firebase.png', alt: 'firebase', name: 'Firebase' },
    { src: '../../../assets/img/skills/git.png', alt: 'git', name: 'Git' },
    { src: '../../../assets/img/skills/api.png', alt: 'api', name: 'Rest-Api' },
    { src: '../../../assets/img/skills/scrum.png', alt: 'scrum', name: 'Scrum' },
    { src: '../../../assets/img/skills/material_design.png', alt: 'material_design', name: 'Material Design' },
    { src: '../../../assets/img/skills/supabase-logo-icon.png', alt: 'supabase', name: 'Supabase' },
    { src: '../../../assets/img/skills/learning_white.svg', alt: 'learning', name: 'Continually Learning', isSvg: true }
  ];

  @Input() visibility: string = 'hidden';

  constructor(private scrollService: ScrollService) { }
  onSectionClick(sectionId: string) {
    this.scrollService.scrollToSection(sectionId);
  }
}
