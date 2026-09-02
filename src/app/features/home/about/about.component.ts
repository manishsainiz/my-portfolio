import { Component } from '@angular/core';
import { RevealDirective } from '../../../shared/directives/reveal.directive';

interface AboutCategory {
  index: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly categories: AboutCategory[] = [
    {
      index: '01',
      title: 'Architecture',
      description: 'Structuring Angular applications so features stay decoupled, testable, and easy to reason about as they grow.'
    },
    {
      index: '02',
      title: 'Reactive Systems',
      description: 'Composing RxJS streams for search, authentication, and API workflows instead of managing async state by hand.'
    },
    {
      index: '03',
      title: 'Performance',
      description: 'Lazy loading, signals, and SSR working together so applications feel instant, not just look it.'
    },
    {
      index: '04',
      title: 'Production',
      description: 'Payments, authentication, deployment, and the debugging that happens after code ships — not just before.'
    },
    {
      index: '05',
      title: 'Continuous Learning',
      description: 'Tracking Angular\u2019s evolution closely, and now extending that curiosity into AI-assisted engineering.'
    }
  ];
}
