import { Inject, Injectable, OnDestroy, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Tracks which top-level `.section[id]` is currently most visible in the
 * viewport, so the nav bar can highlight the active link while scrolling.
 * No-ops on the server.
 */
@Injectable({ providedIn: 'root' })
export class ScrollSpyService implements OnDestroy {
  readonly activeSection = signal<string>('home');

  private observer?: IntersectionObserver;
  private readonly isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  observe(sectionIds: string[]): void {
    if (!this.isBrowser || typeof IntersectionObserver === 'undefined') {
      return;
    }

    this.observer?.disconnect();

    const visibleRatios = new Map<string, number>();

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibleRatios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }

        let topId = this.activeSection();
        let topRatio = 0;
        for (const [id, ratio] of visibleRatios) {
          if (ratio > topRatio) {
            topRatio = ratio;
            topId = id;
          }
        }
        if (topRatio > 0) {
          this.activeSection.set(topId);
        }
      },
      { threshold: [0.2, 0.4, 0.6, 0.8], rootMargin: '-15% 0px -35% 0px' }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) {
        this.observer.observe(el);
      }
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
