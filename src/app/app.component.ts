import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './shared/components/nav/nav.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ScrollProgressComponent } from './shared/components/scroll-progress/scroll-progress.component';
import { BackToTopComponent } from './shared/components/back-to-top/back-to-top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, FooterComponent, ScrollProgressComponent, BackToTopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-portfolio';
}
