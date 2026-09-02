import { SkillCategory } from '../models/content.models';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'angular',
    title: 'Angular',
    description: 'Core framework knowledge, from component architecture to rendering strategy.',
    items: [
      { name: 'Angular' },
      { name: 'Standalone Components' },
      { name: 'Signals' },
      { name: 'Dependency Injection' },
      { name: 'Routing' },
      { name: 'Guards' },
      { name: 'Interceptors' },
      { name: 'Forms' },
      { name: 'Lazy Loading' },
      { name: 'SSR' },
      { name: 'Hydration' },
      { name: 'Change Detection' },
      { name: 'Components' },
      { name: 'Directives' },
      { name: 'Pipes' }
    ]
  },
  {
    id: 'rxjs',
    title: 'RxJS',
    description: 'Reactive stream composition for real, production request flows.',
    items: [
      { name: 'Observable' },
      { name: 'Subject' },
      { name: 'BehaviorSubject' },
      { name: 'switchMap' },
      { name: 'mergeMap' },
      { name: 'concatMap' },
      { name: 'exhaustMap' },
      { name: 'combineLatest' },
      { name: 'forkJoin' },
      { name: 'catchError' },
      { name: 'retry' },
      { name: 'shareReplay' },
      { name: 'debounceTime' },
      { name: 'distinctUntilChanged' },
      { name: 'takeUntil' }
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend',
    description: 'The fundamentals underneath every framework decision.',
    items: [
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'SCSS' },
      { name: 'Responsive Design' },
      { name: 'Accessibility' }
    ]
  },
  {
    id: 'engineering',
    title: 'Engineering',
    description: 'What it takes to move an application from a laptop to the internet.',
    items: [
      { name: 'REST APIs' },
      { name: 'Authentication' },
      { name: 'Payment Integration' },
      { name: 'Git' },
      { name: 'CI/CD' },
      { name: 'Linux' },
      { name: 'Nginx' },
      { name: 'SSR' },
      { name: 'Performance Optimization' }
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile',
    description: 'Shipping the same Angular codebase to native app shells.',
    items: [{ name: 'Ionic' }, { name: 'Capacitor' }]
  },
  {
    id: 'ai',
    title: 'AI',
    description: 'The direction this practice is heading next.',
    items: [
      { name: 'LLM Applications' },
      { name: 'RAG' },
      { name: 'Embeddings' },
      { name: 'Tool Calling' },
      { name: 'AI Agents' },
      { name: 'Coding Agents' }
    ]
  }
];
