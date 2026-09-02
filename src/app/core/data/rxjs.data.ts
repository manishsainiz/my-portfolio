import { RxjsOperator } from '../models/content.models';

export const RXJS_OPERATORS: RxjsOperator[] = [
  {
    id: 'switchMap',
    label: 'switchMap',
    description: 'Switches to a new inner observable and cancels the previous one whenever a new value arrives.',
    useCase: 'Type-ahead search, where only the latest query result matters.',
    code: `search$.pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap(query => this.searchApi(query))
);`,
    behavior: 'switchMap cancels the previous inner observable when a new value arrives — only the most recent request survives.',
    lanes: [
      { label: 'Request A', outcome: 'cancelled', startPct: 0, endPct: 35 },
      { label: 'Request B', outcome: 'cancelled', startPct: 20, endPct: 55 },
      { label: 'Request C', outcome: 'complete', startPct: 45, endPct: 100 }
    ]
  },
  {
    id: 'mergeMap',
    label: 'mergeMap',
    description: 'Runs every inner observable concurrently and merges their results as they resolve.',
    useCase: 'Firing off several independent uploads or requests that should all run in parallel.',
    code: `fileUploads$.pipe(
  mergeMap(file => this.uploadApi(file))
);`,
    behavior: 'mergeMap lets every inner observable run to completion, merging results in whatever order they resolve.',
    lanes: [
      { label: 'Request A', outcome: 'complete', startPct: 0, endPct: 70 },
      { label: 'Request B', outcome: 'complete', startPct: 10, endPct: 45 },
      { label: 'Request C', outcome: 'complete', startPct: 25, endPct: 100 }
    ]
  },
  {
    id: 'concatMap',
    label: 'concatMap',
    description: 'Queues inner observables and runs them strictly one after another, in order.',
    useCase: 'Sequential writes that must happen in a guaranteed order, like ordered form submissions.',
    code: `saveSteps$.pipe(
  concatMap(step => this.saveApi(step))
);`,
    behavior: 'concatMap waits for each inner observable to complete before starting the next — order is always preserved.',
    lanes: [
      { label: 'Request A', outcome: 'complete', startPct: 0, endPct: 33 },
      { label: 'Request B', outcome: 'complete', startPct: 34, endPct: 66 },
      { label: 'Request C', outcome: 'complete', startPct: 67, endPct: 100 }
    ]
  },
  {
    id: 'exhaustMap',
    label: 'exhaustMap',
    description: 'Ignores every new value while an inner observable is still active.',
    useCase: 'A submit button that must not fire a second request while the first is still in flight.',
    code: `submit$.pipe(
  exhaustMap(() => this.submitApi())
);`,
    behavior: 'exhaustMap ignores new emissions entirely until the current inner observable finishes — no queueing, no cancelling.',
    lanes: [
      { label: 'Request A', outcome: 'complete', startPct: 0, endPct: 75 },
      { label: 'Request B', outcome: 'ignored', startPct: 20, endPct: 20 },
      { label: 'Request C', outcome: 'ignored', startPct: 45, endPct: 45 }
    ]
  }
];
