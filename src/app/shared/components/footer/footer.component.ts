import { Component } from '@angular/core';
import { CONTACT } from '../../../core/data/misc.data';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly year = new Date().getFullYear();
  readonly contact = CONTACT;
  readonly stack = ['Angular', 'RxJS', 'SSR', 'Performance', 'AI Engineering'];
}
