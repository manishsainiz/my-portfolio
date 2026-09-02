import { AiRoadmapStep, ExperienceEntry, NavLink, PipelineStep } from '../models/content.models';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', fragment: 'home' },
  { label: 'About', fragment: 'about' },
  { label: 'Skills', fragment: 'skills' },
  { label: 'Projects', fragment: 'projects' },
  { label: 'Angular', fragment: 'angular-evolution' },
  { label: 'RxJS', fragment: 'rxjs' },
  { label: 'Architecture', fragment: 'architecture' },
  { label: 'AI', fragment: 'ai' },
  { label: 'Contact', fragment: 'contact' }
];

export const PRODUCTION_PIPELINE: PipelineStep[] = [
  { label: 'Code', description: 'Feature work happens in a branch, scoped to a single change.' },
  { label: 'Git', description: 'Commits are structured so history stays readable and revertable.' },
  { label: 'Review', description: 'Changes are reviewed before merging into the main branch.' },
  { label: 'CI', description: 'Automated checks run on every push — build, lint, type-check.' },
  { label: 'Build', description: 'A production build compiles, tree-shakes, and bundles the application.' },
  { label: 'SSR', description: 'The server bundle renders initial HTML for each request.' },
  { label: 'Nginx', description: 'Nginx serves the built app and proxies API traffic in production.' },
  { label: 'Production', description: 'The application is live, monitored, and ready for real traffic.' }
];

// NOTE for Manish: replace this placeholder entry with your real employment
// history — company name, dates, and any responsibilities that differ from
// what's listed below. Nothing here should be treated as a real employer.
export const EXPERIENCE_ENTRIES: ExperienceEntry[] = [
  {
    role: 'Angular Developer / Frontend Engineer',
    company: '[Company Name]',
    period: '[Start Date] — Present',
    isPlaceholder: true,
    responsibilities: [
      'Angular application development',
      'RxJS architecture',
      'API integration',
      'SSR',
      'Authentication',
      'Payment workflows',
      'UI development',
      'Production debugging'
    ]
  }
];

export const AI_ROADMAP: AiRoadmapStep[] = [
  { label: 'Frontend Engineering', status: 'foundation' },
  { label: 'Angular Architecture', status: 'foundation' },
  { label: 'Full-Stack Systems', status: 'current' },
  { label: 'LLM Applications', status: 'exploring' },
  { label: 'RAG', status: 'exploring' },
  { label: 'Tool Calling', status: 'exploring' },
  { label: 'AI Agents', status: 'exploring' },
  { label: 'Coding Agents', status: 'exploring' }
];

export const AGENT_PIPELINE = ['User', 'AI Agent', 'Planner', 'Codebase Context'];
export const AGENT_TOOLS = ['File System', 'Terminal', 'Git', 'Search', 'Tests'];
export const AGENT_OUTPUT = ['Code Changes', 'Validation', 'Final Response'];

export const CONTACT = {
  email: 'sainimaan221@gmail.com',
  phone: '+91 87559 91829',
  // NOTE for Manish: add your real LinkedIn and GitHub URLs here.
  linkedinUrl: '',
  githubUrl: ''
};
