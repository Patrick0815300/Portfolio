import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ScrollService {

    constructor() { }

    scrollToSection(sectionId: string): void {
        const element = document.getElementById(sectionId);
        if (element) {
            const yOffset = -101; // Höhe des festen Headers
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    }
}
