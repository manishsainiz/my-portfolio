import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-scroll-progress',
  standalone: true,
  template: `<div class="progress" role="presentation"><div class="progress__bar" [style.width.%]="progress()"></div></div>`,
  styleUrl: './scroll-progress.component.scss'
})
export class ScrollProgressComponent {
  readonly progress = signal(0);

  @HostListener('window:scroll')
  onScroll(): void {
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - doc.clientHeight;
    const pct = scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0;
    this.progress.set(pct);
  }
}
