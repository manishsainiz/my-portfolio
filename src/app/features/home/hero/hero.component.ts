import { Component } from '@angular/core';
import { RevealDirective } from '../../../shared/directives/reveal.directive';

interface TechNode {
  label: string;
  top: number;
  left: number;
  delay: number;
}

interface FlowStep {
  label: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  private readonly labels = ['Angular', 'TypeScript', 'RxJS', 'Signals', 'SSR', 'SCSS', 'Ionic', 'CI/CD', 'AI'];

  readonly nodes: TechNode[] = this.labels.map((label, i) => {
    const angle = (i / this.labels.length) * Math.PI * 2 - Math.PI / 2;
    const radiusX = 44;
    const radiusY = 44;
    return {
      label,
      top: 50 + Math.sin(angle) * radiusY,
      left: 50 + Math.cos(angle) * radiusX,
      delay: i * 0.35
    };
  });

  readonly flow: FlowStep[] = [
    { label: 'Angular' },
    { label: 'Signals' },
    { label: 'RxJS' },
    { label: 'Services' },
    { label: 'APIs' },
    { label: 'SSR' },
    { label: 'Production' }
  ];
}
