import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboveTheFoldComponent } from './above-the-fold/above-the-fold.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, AboveTheFoldComponent, AboutMeComponent, MySkillsComponent, PortfolioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
