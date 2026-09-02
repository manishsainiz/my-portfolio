import { AfterViewInit, Directive, ElementRef, Inject, OnDestroy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Adds a `data-reveal` attribute and toggles `is-visible` once the host
 * element scrolls into the viewport. Pure CSS handles the actual
 * transition (see styles.scss) so this directive only needs to flip a
 * class — it never runs on the server.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(
    private readonly el: ElementRef<HTMLElement>,
    @Inject(PLATFORM_ID) private readonly platformId: object
  ) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.el.nativeElement.setAttribute('data-reveal', '');

    if (typeof IntersectionObserver === 'undefined') {
      this.el.nativeElement.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.el.nativeElement.classList.add('is-visible');
            this.observer?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
