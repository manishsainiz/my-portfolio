import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { Project } from '../../../core/models/content.models';

@Component({
  selector: 'app-project-detail-modal',
  standalone: true,
  templateUrl: './project-detail-modal.component.html',
  styleUrl: './project-detail-modal.component.scss'
})
export class ProjectDetailModalComponent {
  @Input({ required: true }) project!: Project;
  @Output() closed = new EventEmitter<void>();

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }

  close(): void {
    this.closed.emit();
  }

  onBackdropClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) {
      this.close();
    }
  }
}
