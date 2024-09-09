import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [TranslateModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(private scrollService: ScrollService) { }

  onSectionClick(sectionId: string) {
    setTimeout(() => {
      this.scrollService.scrollToSection(sectionId);
    }, 500);
  }
}
