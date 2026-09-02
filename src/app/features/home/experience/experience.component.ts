import { Component } from '@angular/core';
import { EXPERIENCE_ENTRIES } from '../../../core/data/misc.data';
import { RevealDirective } from '../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  readonly entries = EXPERIENCE_ENTRIES;
}
