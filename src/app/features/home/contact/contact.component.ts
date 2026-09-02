import { Component, Inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CONTACT } from '../../../core/data/misc.data';
import { RevealDirective } from '../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  readonly contact = CONTACT;
  readonly copiedField = signal<'email' | 'phone' | null>(null);
  private readonly isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  async copy(field: 'email' | 'phone'): Promise<void> {
    if (!this.isBrowser) {
      return;
    }
    const value = field === 'email' ? this.contact.email : this.contact.phone;
    try {
      await navigator.clipboard.writeText(value);
      this.copiedField.set(field);
      setTimeout(() => this.copiedField.set(null), 1800);
    } catch {
      // Clipboard API unavailable; silently ignore, the value is still visible on the page.
    }
  }
}
