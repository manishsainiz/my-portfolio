import { Project } from '../models/content.models';

export const PROJECTS: Project[] = [
  {
    id: 'ecommerce-platform',
    title: 'Production E-Commerce Platform',
    tagline: 'Authentication, cart, and payment flows built for a live storefront.',
    technology: ['Angular', 'TypeScript', 'RxJS', 'SCSS', 'SSR', 'Payment Integration'],
    problem:
      'Customers needed a fast, reliable checkout experience that preserved cart and login state across page reloads, slow networks, and interrupted payment attempts.',
    solution:
      'Built a production e-commerce application with authentication, shopping cart flows, payment processing, and saved payment methods, backed by a service layer that keeps UI state predictable under real network conditions.',
    impact: 'A checkout flow customers can trust: cards can be saved, removed with confirmation, and payment failures do not lose the cart.',
    flow: ['Browse', 'Cart', 'Checkout', 'Payment', 'Confirmation'],
    detail: {
      problem:
        'A retail storefront needed authentication, a persistent cart, and card management that survives page refreshes, redirects to a payment provider, and returns to the app in an unpredictable state.',
      approach:
        'State that must survive navigation (auth session, cart contents) was lifted into dedicated Angular services backed by RxJS BehaviorSubjects, rehydrated from storage on app init, rather than living inside individual components.',
      implementation:
        'Card management supports multiple saved cards with delete confirmation dialogs, guarded by authentication state. The payment return flow reconciles the app state with the payment provider redirect using route query parameters and a dedicated resolver, so a user landing back on the site after paying externally sees the correct order status instead of a stale cart.',
      challenges:
        'The hardest part was the payment return flow: the user leaves the Angular app entirely, and the app has to safely reconstruct what happened without trusting client state alone, while still keeping the UI responsive during the round trip.',
      decisions:
        'Cart and auth state live in singleton services rather than component state, so any route can read or react to them via signals/observables without prop drilling. Interceptors attach auth tokens automatically so components stay unaware of the auth mechanism.',
      lessons:
        'Anything that needs to survive a full page redirect (like a payment gateway handoff) should never live purely in memory — it needs a durable source of truth and an explicit reconciliation step on return.',
      codeSnippet: `readonly cart$ = this.cartState.items$.pipe(
  map(items => items.filter(i => i.quantity > 0)),
  shareReplay(1)
);`
    }
  },
  {
    id: 'auth-protected-flow',
    title: 'Authentication & Protected Application Flow',
    tagline: 'Guards, interceptors, and session handling for gated routes.',
    technology: ['Angular', 'RxJS', 'Guards', 'Interceptors', 'Authentication'],
    problem:
      'Certain areas of the application should only be reachable by authenticated users, and every outgoing request needs a valid session token without repeating that logic across the codebase.',
    solution:
      'A layered authentication flow: login produces a session, an AuthGuard protects sensitive routes, and an HTTP interceptor attaches credentials to every outgoing API call automatically.',
    impact: 'One consistent place to reason about "is this user allowed to be here" instead of scattered checks across components.',
    flow: ['Login', 'Authentication', 'Session', 'AuthGuard', 'Protected Route', 'HTTP Interceptor', 'API'],
    detail: {
      problem:
        'Without a centralized approach, auth checks tend to get copy-pasted into individual components and pages, which drifts out of sync over time.',
      approach:
        'Authentication state is modeled as a single observable/signal source of truth in a AuthService. Route access is decided declaratively via a functional CanActivate guard rather than imperative checks inside component constructors.',
      implementation:
        'The AuthGuard reads the current session state and redirects unauthenticated users to login, preserving the originally requested URL so they land back where they intended after signing in. A HttpInterceptor attaches the bearer token to outgoing requests and listens for 401 responses to trigger a session refresh or logout.',
      challenges:
        'Getting the timing right on app bootstrap was tricky: if the app tries to render a protected route before the session has finished restoring from storage, it can incorrectly redirect a logged-in user to the login page.',
      decisions:
        'Session restoration is awaited before the router resolves guards on the initial navigation, which avoids a flash of the login page for already-authenticated users.',
      lessons:
        'Centralizing "who is logged in" into one service made every other feature (cart, checkout, saved data) simpler, because they could trust a single source instead of re-deriving auth state themselves.',
      codeSnippet: `export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  return auth.isAuthenticated() ? true : router.parseUrl('/login');
};`
    }
  },
  {
    id: 'ionic-app',
    title: 'Ionic Application',
    tagline: 'Shared Angular codebase, shipped as a native-feeling mobile app.',
    technology: ['Angular', 'Ionic', 'TypeScript', 'SCSS', 'API Integration'],
    problem:
      'The same product experience needed to work as a mobile app, with layouts and interactions that feel native rather than like a resized website.',
    solution:
      'An Ionic + Angular application built around reusable components and responsive layouts, driven entirely by the same API-first architecture as the web product.',
    impact: 'One shared component and service layer powering both the web experience and the mobile app shell.',
    detail: {
      problem:
        'Mobile users expect touch-first interactions, safe-area awareness, and native navigation patterns — a straight port of desktop layouts falls flat.',
      approach:
        'Components were built to be reusable across contexts: presentation logic separated from data-fetching logic, so the same building blocks could be composed differently on mobile screens.',
      implementation:
        'Ionic components handle native-feeling navigation, gestures, and platform styling, while Angular services own the API integration layer so business logic is not duplicated between web and mobile targets.',
      challenges:
        'Balancing Ionic-specific UI conventions with the existing Angular architecture required care so the app did not end up with two divergent mental models for the same data.',
      decisions:
        'API integration and state management stayed framework-agnostic at the service layer, with Ionic only owning the presentation shell — this kept the mobile app from becoming a separate codebase to maintain.',
      lessons:
        'Designing components mobile-first, even for a project that started on the web, made the eventual Ionic build far less painful than retrofitting touch support after the fact.'
    }
  },
  {
    id: 'ssr-performance',
    title: 'SSR & Performance Engineering',
    tagline: 'Server-rendered Angular with hydration and lazy-loaded routes.',
    technology: ['Angular SSR', 'Hydration', 'Lazy Loading', 'RxJS'],
    problem:
      'Client-side-only rendering meant slower first paint and weaker SEO for content that should be indexable and fast on first load.',
    solution:
      'Server-side rendering with client hydration, combined with route-level lazy loading, so pages arrive pre-rendered and the client takes over without a full re-render.',
    impact: 'Meaningfully faster perceived load, with the client picking up an already-rendered page instead of building it from scratch.',
    flow: ['Request', 'Angular SSR', 'Rendered HTML', 'Hydration', 'Interactive App'],
    detail: {
      problem:
        'Pure client-side rendering ships a blank shell first, then fetches data and renders — which is slow on first load and unfriendly to crawlers.',
      approach:
        'Angular Universal-style SSR renders the initial view on the server; non-destructive hydration on the client reuses that DOM instead of tearing it down and re-rendering.',
      implementation:
        'Feature areas below the fold are lazy-loaded by route, and `@defer` blocks are used for non-critical UI so the initial bundle stays lean. RxJS requests made during SSR are designed to resolve before the server serializes the page, avoiding empty-state flashes on the client.',
      challenges:
        'The main challenge with SSR is anything that assumes a browser API (window, localStorage, IntersectionObserver) — these all need platform checks so the server render does not crash.',
      decisions:
        '`isPlatformBrowser` checks gate any browser-only API access, and browser-dependent features (like scroll-based reveal animations) are initialized only after the app is confirmed to be running client-side.',
      lessons:
        'SSR pays off most when combined with real lazy loading — rendering everything on the server up front just moves the slowness from the client to the server if the bundle itself is not also split intelligently.',
      codeSnippet: `if (isPlatformBrowser(this.platformId)) {
  this.observer = new IntersectionObserver(cb);
}`
    }
  }
];
