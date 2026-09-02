import { PerformanceTopic } from '../models/content.models';

export const PERFORMANCE_TOPICS: PerformanceTopic[] = [
  {
    id: 'lazy-loading',
    title: 'Lazy Loading',
    summary: 'Route-level code splitting so a user only downloads the feature they navigate to, not the entire application up front.',
    code: `{
  path: 'projects',
  loadComponent: () =>
    import('./features/projects/projects.component')
      .then(m => m.ProjectsComponent)
}`
  },
  {
    id: 'defer',
    title: '@defer',
    summary: 'Template-level deferred rendering for below-the-fold or non-critical UI, with viewport, interaction, or idle triggers.',
    code: `@defer (on viewport) {
  <app-rxjs-playground />
} @placeholder {
  <div class="skeleton"></div>
}`
  },
  {
    id: 'signals',
    title: 'Signals',
    summary: 'Fine-grained reactive state that updates only the parts of the view that actually depend on it, instead of re-checking a whole subtree.',
    code: `activeCategory = signal<string>('angular');
filtered = computed(() =>
  this.categories().find(c => c.id === this.activeCategory())
);`
  },
  {
    id: 'change-detection',
    title: 'Change Detection',
    summary: 'Choosing OnPush change detection so components only re-render when their inputs or observed signals actually change.',
    code: `@Component({
  changeDetection: ChangeDetectionStrategy.OnPush
})`
  },
  {
    id: 'ssr',
    title: 'SSR',
    summary: 'Server-side rendering delivers a fully-formed page on first response, improving perceived load time and crawlability.'
  },
  {
    id: 'hydration',
    title: 'Hydration',
    summary: 'Non-destructive client takeover of server-rendered DOM, avoiding a full re-render and the layout flash that comes with it.'
  },
  {
    id: 'rxjs-optimization',
    title: 'RxJS Optimization',
    summary: 'Cancelling stale requests with switchMap, caching shared results with shareReplay, and avoiding redundant subscriptions that duplicate network calls.',
    code: `getUser(id: string) {
  return this.http.get(\`/api/users/\${id}\`).pipe(
    shareReplay({ bufferSize: 1, refCount: true })
  );
}`
  }
];
