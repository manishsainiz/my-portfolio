import { Component } from '@angular/core';
import { PRODUCTION_PIPELINE } from '../../../core/data/misc.data';
import { RevealDirective } from '../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-production-engineering',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './production-engineering.component.html',
  styleUrl: './production-engineering.component.scss'
})
export class ProductionEngineeringComponent {
  readonly pipeline = PRODUCTION_PIPELINE;

  readonly extras = [
    'Git workflows for branching and review',
    'Build process and environment configuration',
    'SSR deployment considerations',
    'Nginx as a reverse proxy and static host',
    'Production debugging with browser DevTools',
    'API debugging under real network conditions'
  ];
}
