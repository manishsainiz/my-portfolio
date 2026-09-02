import { Component, computed, signal } from '@angular/core';
import { SKILL_CATEGORIES } from '../../../core/data/skills.data';
import { RevealDirective } from '../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  readonly categories = SKILL_CATEGORIES;
  readonly activeId = signal<string>(this.categories[0].id);

  readonly activeCategory = computed(
    () => this.categories.find((c) => c.id === this.activeId()) ?? this.categories[0]
  );

  select(id: string): void {
    this.activeId.set(id);
  }
}
