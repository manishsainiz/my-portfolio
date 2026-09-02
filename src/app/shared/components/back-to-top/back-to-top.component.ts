import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  standalone: true,
  template: `
    @if (visible()) {
      <button type="button" class="back-to-top glass" (click)="scrollTop()" aria-label="Back to top">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
    }
  `,
  styleUrl: './back-to-top.component.scss'
})
export class BackToTopComponent {
  readonly visible = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.visible.set(window.scrollY > 640);
  }

  scrollTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
