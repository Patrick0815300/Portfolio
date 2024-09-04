import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleMenuWithDelay(linkId: string) {
    setTimeout(() => {
      this.menuOpen = false;
      document.getElementById(linkId)?.scrollIntoView({ behavior: 'smooth' });
    }, 500);
  }
}
