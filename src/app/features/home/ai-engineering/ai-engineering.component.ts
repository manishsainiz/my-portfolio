import { Component } from '@angular/core';
import { AGENT_OUTPUT, AGENT_PIPELINE, AGENT_TOOLS, AI_ROADMAP } from '../../../core/data/misc.data';
import { RevealDirective } from '../../../shared/directives/reveal.directive';

@Component({
  selector: 'app-ai-engineering',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './ai-engineering.component.html',
  styleUrl: './ai-engineering.component.scss'
})
export class AiEngineeringComponent {
  readonly roadmap = AI_ROADMAP;
  readonly agentPipeline = AGENT_PIPELINE;
  readonly agentTools = AGENT_TOOLS;
  readonly agentOutput = AGENT_OUTPUT;
}
