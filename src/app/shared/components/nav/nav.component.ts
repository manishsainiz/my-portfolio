import { Component, HostListener, inject, signal } from '@angular/core';
import { NAV_LINKS } from '../../../core/data/misc.data';
import { ScrollSpyService } from '../../../core/services/scroll-spy.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  private readonly scrollSpy = inject(ScrollSpyService);

  readonly links = NAV_LINKS;
  readonly isScrolled = signal(false);
  readonly isMobileOpen = signal(false);
  readonly activeSection = this.scrollSpy.activeSection;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 24);
  }

  toggleMobile(): void {
    this.isMobileOpen.update((v) => !v);
  }

  closeMobile(): void {
    this.isMobileOpen.set(false);
  }
}
