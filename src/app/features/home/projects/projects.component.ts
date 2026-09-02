import { Component, computed, signal } from '@angular/core';
import { PROJECTS } from '../../../core/data/projects.data';
import { Project } from '../../../core/models/content.models';
import { RevealDirective } from '../../../shared/directives/reveal.directive';
import { ProjectDetailModalComponent } from './project-detail-modal.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealDirective, ProjectDetailModalComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  readonly projects = PROJECTS;
  readonly activeFilter = signal<string>('All');
  readonly selectedProject = signal<Project | null>(null);

  readonly filters = computed(() => {
    const all = new Set<string>();
    for (const p of this.projects) {
      for (const t of p.technology) {
        all.add(t);
      }
    }
    return ['All', ...Array.from(all)];
  });

  readonly filteredProjects = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'All') {
      return this.projects;
    }
    return this.projects.filter((p) => p.technology.includes(filter));
  });

  setFilter(filter: string): void {
    this.activeFilter.set(filter);
  }

  open(project: Project): void {
    this.selectedProject.set(project);
  }

  close(): void {
    this.selectedProject.set(null);
  }
}
