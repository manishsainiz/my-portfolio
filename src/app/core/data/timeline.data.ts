import { TimelineItem } from '../models/content.models';

export const ANGULAR_TIMELINE: TimelineItem[] = [
  {
    id: 'angularjs',
    title: 'AngularJS',
    summary: 'The original MVC framework that popularized two-way data binding.',
    detail:
      'AngularJS introduced directives, two-way binding, and dependency injection to the mainstream web. It shaped how a generation of developers thought about structuring frontend applications, even though its architecture looks very different from modern Angular.'
  },
  {
    id: 'angular-2',
    title: 'Angular 2+',
    summary: 'A full rewrite around components and TypeScript.',
    detail:
      'Angular 2 replaced controllers and $scope with a component-based architecture built on TypeScript, introducing the module system, a new template syntax, and a much stronger emphasis on typed, reusable building blocks.'
  },
  {
    id: 'modules',
    title: 'Modules',
    summary: 'NgModules organized the application into cohesive, loadable units.',
    detail:
      'NgModules grouped components, directives, and pipes together and were the primary mechanism for lazy loading feature areas — a pattern that shaped Angular application architecture for years.'
  },
  {
    id: 'ivy',
    title: 'Ivy',
    summary: 'A new rendering engine that reshaped bundle size and debugging.',
    detail:
      'The Ivy compiler and runtime replaced View Engine, enabling smaller bundles, better tree-shaking, faster rebuilds, and more understandable stack traces — while staying largely backwards compatible with existing apps.'
  },
  {
    id: 'standalone',
    title: 'Standalone Components',
    summary: 'Components, directives, and pipes without NgModules.',
    detail:
      'Standalone APIs let components declare their own dependencies directly, removing the requirement for NgModules in many applications and simplifying both mental model and boilerplate.'
  },
  {
    id: 'signals',
    title: 'Signals',
    summary: 'Fine-grained reactivity alongside RxJS.',
    detail:
      'Signals introduced a reactive primitive for local component and application state with fine-grained change detection, complementing (not replacing) RxJS for asynchronous stream composition.'
  },
  {
    id: 'control-flow',
    title: 'Modern Control Flow',
    summary: 'Built-in @if, @for, and @switch replace structural directives.',
    detail:
      'The new template control flow syntax (@if, @for, @switch) replaced *ngIf, *ngFor, and ngSwitch with syntax that is easier to read, type-check, and optimize at compile time.'
  },
  {
    id: 'defer',
    title: '@defer',
    summary: 'Declarative, template-level lazy loading for UI blocks.',
    detail:
      '@defer lets a template lazily load and render a section of UI based on triggers like viewport visibility, interaction, or idle time — without hand-rolling dynamic component loading.'
  },
  {
    id: 'ssr-hydration',
    title: 'SSR + Hydration',
    summary: 'Server rendering that the client can non-destructively take over.',
    detail:
      'Modern Angular SSR pairs with non-destructive hydration, so the client reuses server-rendered DOM instead of re-rendering it from scratch — improving both perceived performance and stability.'
  },
  {
    id: 'modern-angular',
    title: 'Modern Angular',
    summary: 'Signals, standalone APIs, and SSR as the default mental model.',
    detail:
      'Today, a new Angular application is built by default around standalone components, signals for local state, RxJS for async streams, and SSR with hydration — a meaningfully different architecture from the framework a decade ago.'
  }
];
