import { Component, computed, signal } from '@angular/core';
import { RXJS_OPERATORS } from '../../../core/data/rxjs.data';
import { RxjsOperatorId } from '../../../core/models/content.models';
import { RevealDirective } from '../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-rxjs-playground',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './rxjs-playground.component.html',
  styleUrl: './rxjs-playground.component.scss'
})
export class RxjsPlaygroundComponent {
  readonly operators = RXJS_OPERATORS;
  readonly activeId = signal<RxjsOperatorId>('switchMap');

  readonly active = computed(() => this.operators.find((op) => op.id === this.activeId())!);

  select(id: RxjsOperatorId): void {
    this.activeId.set(id);
  }
}
