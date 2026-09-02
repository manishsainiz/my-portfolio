import { Component } from '@angular/core';
import { PERFORMANCE_TOPICS } from '../../../core/data/performance.data';
import { RevealDirective } from '../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-performance-lab',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './performance-lab.component.html',
  styleUrl: './performance-lab.component.scss'
})
export class PerformanceLabComponent {
  readonly topics = PERFORMANCE_TOPICS;
}
