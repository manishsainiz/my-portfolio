export interface NavLink {
  label: string;
  fragment: string;
}

export interface SkillItem {
  name: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  items: SkillItem[];
}

export interface ProjectDetail {
  problem: string;
  approach: string;
  implementation: string;
  challenges: string;
  decisions: string;
  lessons: string;
  codeSnippet?: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  technology: string[];
  problem: string;
  solution: string;
  impact: string;
  flow?: string[];
  detail: ProjectDetail;
}

export interface TimelineItem {
  id: string;
  title: string;
  summary: string;
  detail: string;
}

export type RxjsOperatorId = 'switchMap' | 'mergeMap' | 'concatMap' | 'exhaustMap';

export interface RxjsOperator {
  id: RxjsOperatorId;
  label: string;
  description: string;
  useCase: string;
  code: string;
  behavior: string;
  lanes: { label: string; outcome: 'complete' | 'cancelled' | 'ignored'; startPct: number; endPct: number }[];
}

export interface ArchitectureNode {
  id: string;
  label: string;
  x: number;
  y: number;
  connectsTo: string[];
  what: string;
  why: string;
  example: string;
  mistake: string;
  bestPractice: string;
}

export interface PerformanceTopic {
  id: string;
  title: string;
  summary: string;
  code?: string;
}

export interface PipelineStep {
  label: string;
  description: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  period: string;
  isPlaceholder: boolean;
  responsibilities: string[];
}

export interface AiRoadmapStep {
  label: string;
  status: 'foundation' | 'current' | 'exploring';
}
