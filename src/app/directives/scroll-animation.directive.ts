import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[appScrollAnimation]',
    standalone: true
})
export class ScrollAnimationDirective {
    @Input() delay: number = 0;
    private isVisible: boolean = false;

    constructor(private el: ElementRef) { }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const elementPosition = this.el.nativeElement.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementPosition < windowHeight && !this.isVisible) {
            this.isVisible = true;
            setTimeout(() => {
                this.el.nativeElement.style.opacity = '1';
                this.el.nativeElement.style.transform = 'translateY(0)';
                this.el.nativeElement.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
            }, this.delay);
        }
    }

    ngOnInit() {
        this.el.nativeElement.style.opacity = '0';
        this.el.nativeElement.style.transform = 'translateY(50px)';
    }
}
