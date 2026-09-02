import { ArchitectureNode } from '../models/content.models';

export const ARCHITECTURE_NODES: ArchitectureNode[] = [
  {
    id: 'browser',
    label: 'Browser',
    x: 400,
    y: 40,
    connectsTo: ['ssr'],
    what: 'The client that requests and eventually renders the application.',
    why: 'Every architectural decision downstream exists to get pixels in front of this as fast and reliably as possible.',
    example: 'A user navigates to the site and the browser issues the first HTTP request.',
    mistake: 'Assuming browser-only APIs (window, localStorage) are always available, which breaks server rendering.',
    bestPractice: 'Guard browser API access with platform checks so the same code works during SSR.'
  },
  {
    id: 'ssr',
    label: 'Angular SSR',
    x: 400,
    y: 130,
    connectsTo: ['shell'],
    what: 'Renders the initial application state to HTML on the server before sending it to the browser.',
    why: 'Improves first paint and makes content available to crawlers without waiting on client-side JavaScript.',
    example: 'The server resolves initial route data and serializes a fully-formed HTML response.',
    mistake: 'Running expensive or browser-dependent logic during server rendering, slowing every request.',
    bestPractice: 'Keep server-rendered data fetching lean and defer non-critical work to the client after hydration.'
  },
  {
    id: 'shell',
    label: 'Application Shell',
    x: 400,
    y: 220,
    connectsTo: ['components', 'signals', 'routing'],
    what: 'The root application structure that hosts routed feature areas.',
    why: 'Gives the app a consistent frame (navigation, layout) while feature areas are lazy-loaded independently.',
    example: 'The root component renders a persistent nav bar and a router outlet for feature pages.',
    mistake: 'Putting too much shared state or logic directly in the shell, making it a bottleneck for every feature.',
    bestPractice: 'Keep the shell thin — navigation and layout only — and push logic into services and features.'
  },
  {
    id: 'components',
    label: 'Components',
    x: 190,
    y: 320,
    connectsTo: ['services'],
    what: 'Self-contained UI building blocks that combine a template, styles, and logic.',
    why: 'Composable, testable units that can be reused across features instead of duplicating markup.',
    example: 'A reusable button, card, or project-card component used across multiple sections.',
    mistake: 'Letting components fetch data directly instead of delegating to a service, which duplicates logic and makes testing harder.',
    bestPractice: 'Keep components focused on presentation; delegate data-fetching and business logic to services.'
  },
  {
    id: 'signals',
    label: 'Signals',
    x: 400,
    y: 320,
    connectsTo: ['services'],
    what: 'A reactive primitive for fine-grained local and shared state.',
    why: 'Enables targeted change detection updates without the overhead of checking the entire component tree.',
    example: 'A signal tracking which skill category filter is currently active in the UI.',
    mistake: 'Using signals for asynchronous stream composition where RxJS operators are a better fit.',
    bestPractice: 'Use signals for synchronous UI state, and RxJS for asynchronous streams like HTTP requests.'
  },
  {
    id: 'routing',
    label: 'Routing',
    x: 610,
    y: 320,
    connectsTo: ['guards'],
    what: 'Maps URLs to the components and data that should render for them.',
    why: 'Enables deep-linking, lazy loading of feature areas, and a predictable navigation model.',
    example: 'A project detail route that lazy-loads its feature module only when visited.',
    mistake: 'Loading every feature eagerly at bootstrap, bloating the initial bundle.',
    bestPractice: 'Lazy-load routed feature areas and use functional guards to protect access declaratively.'
  },
  {
    id: 'services',
    label: 'Services',
    x: 190,
    y: 410,
    connectsTo: ['interceptors'],
    what: 'Injectable classes that own business logic, state, and data access.',
    why: 'A single, testable place for logic that would otherwise be duplicated across components.',
    example: 'An AuthService that exposes the current session as a signal or observable.',
    mistake: 'Creating a new service for every trivial piece of shared logic, fragmenting state across too many sources.',
    bestPractice: 'Group related state and logic into cohesive services scoped to the feature or app root as appropriate.'
  },
  {
    id: 'rxjs',
    label: 'RxJS',
    x: 400,
    y: 410,
    connectsTo: ['services'],
    what: 'A library for composing asynchronous and event-based logic using observable streams.',
    why: 'Handles cancellation, retries, and combining multiple async sources declaratively.',
    example: 'switchMap cancelling a stale search request when the user types a new query.',
    mistake: 'Subscribing manually everywhere without unsubscribing, leaking memory over the app lifetime.',
    bestPractice: 'Prefer the async pipe or takeUntilDestroyed to manage subscription lifecycles automatically.'
  },
  {
    id: 'guards',
    label: 'Guards',
    x: 610,
    y: 410,
    connectsTo: ['services'],
    what: 'Functions that decide whether a route can be activated, deactivated, or loaded.',
    why: 'Centralizes access-control decisions instead of scattering auth checks across components.',
    example: 'An AuthGuard redirecting unauthenticated users away from a protected checkout route.',
    mistake: 'Duplicating the same access check inside multiple component constructors instead of a guard.',
    bestPractice: 'Use functional guards backed by a shared state service as the single source of truth for access.'
  },
  {
    id: 'interceptors',
    label: 'HTTP Interceptors',
    x: 190,
    y: 500,
    connectsTo: ['apis'],
    what: 'Middleware that can inspect or modify every outgoing HTTP request and incoming response.',
    why: 'Attaches cross-cutting concerns like auth tokens and error handling in one place.',
    example: 'An interceptor that attaches a bearer token to every request automatically.',
    mistake: 'Handling auth headers manually inside every individual API call.',
    bestPractice: 'Centralize cross-cutting request/response logic in interceptors so features stay unaware of it.'
  },
  {
    id: 'apis',
    label: 'REST APIs',
    x: 190,
    y: 590,
    connectsTo: [],
    what: 'The backend endpoints the application communicates with.',
    why: 'The actual source of truth for data — everything above exists to consume this safely and efficiently.',
    example: 'An endpoint returning product data, order history, or authentication tokens.',
    mistake: 'Letting API response shapes leak directly into UI components without a mapping layer.',
    bestPractice: 'Map raw API responses to well-typed models at the service boundary before they reach components.'
  }
];
