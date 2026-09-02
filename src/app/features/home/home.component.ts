import { AfterViewInit, Component, inject } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { AngularEvolutionComponent } from './angular-evolution/angular-evolution.component';
import { RxjsPlaygroundComponent } from './rxjs-playground/rxjs-playground.component';
import { ArchitectureExplorerComponent } from './architecture-explorer/architecture-explorer.component';
import { PerformanceLabComponent } from './performance-lab/performance-lab.component';
import { ProductionEngineeringComponent } from './production-engineering/production-engineering.component';
import { AiEngineeringComponent } from './ai-engineering/ai-engineering.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { ScrollSpyService } from '../../core/services/scroll-spy.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    AngularEvolutionComponent,
    RxjsPlaygroundComponent,
    ArchitectureExplorerComponent,
    PerformanceLabComponent,
    ProductionEngineeringComponent,
    AiEngineeringComponent,
    ExperienceComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements AfterViewInit {
  private readonly scrollSpy = inject(ScrollSpyService);

  private readonly sectionIds = [
    'home',
    'about',
    'skills',
    'projects',
    'angular-evolution',
    'rxjs',
    'architecture',
    'performance',
    'production',
    'ai',
    'experience',
    'contact'
  ];

  ngAfterViewInit(): void {
    this.scrollSpy.observe(this.sectionIds);
  }
}
