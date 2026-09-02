import { Component, computed, signal } from '@angular/core';
import { ARCHITECTURE_NODES } from '../../../core/data/architecture.data';
import { RevealDirective } from '../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-architecture-explorer',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './architecture-explorer.component.html',
  styleUrl: './architecture-explorer.component.scss'
})
export class ArchitectureExplorerComponent {
  readonly nodes = ARCHITECTURE_NODES;
  readonly activeId = signal<string>('browser');

  readonly active = computed(() => this.nodes.find((n) => n.id === this.activeId())!);

  readonly edges = computed(() => {
    const byId = new Map(this.nodes.map((n) => [n.id, n]));
    const lines: { x1: number; y1: number; x2: number; y2: number; key: string }[] = [];
    for (const node of this.nodes) {
      for (const targetId of node.connectsTo) {
        const target = byId.get(targetId);
        if (target) {
          lines.push({ x1: node.x, y1: node.y, x2: target.x, y2: target.y, key: `${node.id}-${targetId}` });
        }
      }
    }
    return lines;
  });

  select(id: string): void {
    this.activeId.set(id);
  }
}
