import { Component, signal } from '@angular/core';
import { ANGULAR_TIMELINE } from '../../../core/data/timeline.data';
import { RevealDirective } from '../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-angular-evolution',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './angular-evolution.component.html',
  styleUrl: './angular-evolution.component.scss'
})
export class AngularEvolutionComponent {
  readonly timeline = ANGULAR_TIMELINE;
  readonly expandedId = signal<string | null>(null);

  toggle(id: string): void {
    this.expandedId.update((current) => (current === id ? null : id));
  }
}
