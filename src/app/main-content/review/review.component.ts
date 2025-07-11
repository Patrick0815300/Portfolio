import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

interface Review {
  author: string;
  text: string;
  project: string;
}

interface DisplayedReview extends Review {
  position: string;
  animate?: string;
}

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss',

})
export class ReviewComponent {
  reviews = [
    {
      author: 'Diana Grillmeier',
      text: 'Herr Nigrin überzeugte durch seine exzellenten Fachkenntnisse, seine strukturierte Arbeitsweise und sein außergewöhnliches Engagement. Besonders hervorzuheben sind seine Beiträge in der Frontend-Entwicklung und bei der Einführung innovativer Prozesse, die unsere Projekte maßgeblich vorangebracht haben. Seine Teamfähigkeit, Kommunikationsstärke und Professionalität machten die Zusammenarbeit jederzeit sehr angenehm.',
      project: 'ProComp GmbH - Implementierung eines Ticketsystems als Projektleiter'
    },
    {
      author: 'Tobias Reize',
      text: '"Die Zusammenarbeit und Kommunikation mit Patrick verlief stets reibungslos. Er arbeitet gewissenhaft und achtet dabei auch auf Details. Durch sein Engagement hat er einen wesentlichen Beitrag zu unserem Teamerfolg beigetragen. Ich kann die Zusammenarbeit mit Patrick weiterempfehlen."',
      project: 'JOIN - Business Kanban Board',
    },
    {
      author: 'Julien Quabeck',
      text: 'Die Zusammenarbeit mit Patrick war stets angenehm und unkompliziert. Besonders schätzte ich die klare Kommunikation und Zuverlässigkeit bei Fristen. Er unterstützte das Team jederzeit tatkräftig. Solche Kollegen wünscht man sich!',
      project: 'DABubble - Messaging App in der Art von Slack oder Discord',
    },
  ]

  currentIndex = 0;
  animationState = 'inactive';
  isTextVisible = false;
  isAuthorVisible: boolean = true;
  displayedReviews: DisplayedReview[] = [];

  constructor() {
    this.updateDisplayedReviews();
  }



  updateDisplayedReviews() {
    const total = this.reviews.length;
    const leftIndex = (this.currentIndex - 1 + total) % total;
    const centerIndex = this.currentIndex;
    const rightIndex = (this.currentIndex + 1) % total;
    this.displayedReviews = [
      { ...this.reviews[leftIndex], position: 'left' },
      { ...this.reviews[centerIndex], position: 'center', animate: this.animationState },
      { ...this.reviews[rightIndex], position: 'right' },
    ];
  }

  next() {
    if (!this.isAuthorVisible) {
      this.isAuthorVisible = true;
    }
    this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
    this.updateDisplayedReviews();
  }

  prev() {
    if (!this.isAuthorVisible) {
      this.isAuthorVisible = true;
    }
    this.currentIndex = (this.currentIndex - 1 + this.reviews.length) % this.reviews.length;
    this.updateDisplayedReviews();
  }

  goToIndex(index: number) {
    if (!this.isAuthorVisible) {
      this.isAuthorVisible = true;
    }
    this.currentIndex = index;
    this.updateDisplayedReviews();
  }

  toggleCard() {
    if (window.innerWidth < 600) {
      this.isAuthorVisible = !this.isAuthorVisible
    }
  }

}
