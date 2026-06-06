export type SectionId = 'home' | 'story' | 'investing' | 'building' | 'advisory';

export interface SectionMeta {
  id: SectionId;
  label: string;
  navLabel?: string;
  designator: string;
  headline: string;
}

export const SECTION_ORDER: SectionId[] = [
  'home',
  'story',
  'investing',
  'building',
  'advisory',
];

export const NAV_SECTION_IDS: Exclude<SectionId, 'home'>[] = [
  'story',
  'investing',
  'building',
  'advisory',
];

export const SECTIONS: Record<SectionId, SectionMeta> = {
  home: {
    id: 'home',
    label: 'Home',
    designator: '00 / ORIGIN',
    headline: 'Shaping tomorrow with vision and action.',
  },
  story: {
    id: 'story',
    label: 'Story',
    navLabel: 'Story',
    designator: '01 / CORE MISSION',
    headline: 'We exist to convert conviction into enduring enterprise.',
  },
  investing: {
    id: 'investing',
    label: 'Investing',
    navLabel: 'Investing',
    designator: '02 / CAPITAL ALLOCATION',
    headline: 'Disciplined capital deployed at the frontier of scale.',
  },
  building: {
    id: 'building',
    label: 'Building',
    navLabel: 'Building',
    designator: '03 / VENTURE STUDIO',
    headline: 'Industrial-grade product streams engineered for market dominance.',
  },
  advisory: {
    id: 'advisory',
    label: 'Advisory',
    navLabel: 'Advisory',
    designator: '04 / ADVISORY FRAMEWORK',
    headline: 'Strategic architecture for institutions navigating complexity.',
  },
};

export interface TimelineMetric {
  id: string;
  label: string;
  value: string;
  detail: string;
}

export interface InvestingNode {
  id: string;
  title: string;
  metric: string;
  description: string;
}

export type VentureShowcaseVariant = 'compute' | 'logistics' | 'analytics';

export interface VentureStream {
  id: string;
  title: string;
  status: 'LIVE' | 'BETA' | 'BUILD';
  phase: string;
  phaseLabel: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  showcaseVariant: VentureShowcaseVariant;
}

export interface AdvisoryPractice {
  id: string;
  title: string;
  description: string;
}

export const STORY_METRICS: TimelineMetric[] = [
  {
    id: 'founded',
    label: 'Founded',
    value: '2018',
    detail: 'Institutional mandate established across three continents.',
  },
  {
    id: 'deployed',
    label: 'Capital Deployed',
    value: '$2.4B',
    detail: 'Cumulative allocation across seed through growth stages.',
  },
  {
    id: 'ventures',
    label: 'Active Ventures',
    value: '47',
    detail: 'Portfolio companies operating in critical infrastructure sectors.',
  },
];

export const INVESTING_NODES: InvestingNode[] = [
  {
    id: 'seed',
    title: 'Seed Architecture',
    metric: '$50M–$150M',
    description:
      'Early conviction bets on founders redefining category boundaries with defensible technical moats.',
  },
  {
    id: 'growth',
    title: 'Growth Expansion',
    metric: '$200M–$500M',
    description:
      'Scale-stage capital for market leaders demonstrating repeatable unit economics and expansion velocity.',
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure Core',
    metric: '$500M+',
    description:
      'Long-horizon allocation into foundational systems — energy, logistics, compute, and financial rails.',
  },
];

export const VENTURE_STREAMS: VentureStream[] = [
  {
    id: 'atlas',
    title: 'Atlas Compute Layer',
    status: 'LIVE',
    phase: 'PHASE III — DISTRIBUTION',
    phaseLabel: 'Phase III — Distribution',
    description:
      'Distributed inference infrastructure reducing latency across enterprise AI workloads by 340ms median.',
    imageUrl:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200',
    imageAlt: 'Atlas Compute Layer distributed inference infrastructure',
    showcaseVariant: 'compute',
  },
  {
    id: 'meridian',
    title: 'Meridian Logistics OS',
    status: 'BETA',
    phase: 'PHASE II — INTEGRATION',
    phaseLabel: 'Phase II — Integration',
    description:
      'Unified supply chain orchestration platform processing 12M shipment events daily across 38 corridors.',
    imageUrl:
      'https://images.unsplash.com/photo-1486406146922-c627a92ad1ab?q=80&w=1200',
    imageAlt: 'Meridian Logistics OS supply chain orchestration platform',
    showcaseVariant: 'logistics',
  },
  {
    id: 'vault',
    title: 'Vault Treasury Engine',
    status: 'BUILD',
    phase: 'PHASE I — FOUNDATION',
    phaseLabel: 'Phase I — Foundation',
    description:
      'Cryptographic ledger architecture processing low-latency transactions with real-time risk mitigation.',
    imageUrl:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200',
    imageAlt: 'Vault Treasury Engine cryptographic ledger architecture',
    showcaseVariant: 'analytics',
  },
];

export const ADVISORY_PRACTICES: AdvisoryPractice[] = [
  {
    id: 'liquidity',
    title: 'Macro Liquidity Architecture',
    description:
      'Capital structure optimization and treasury design for institutions managing multi-jurisdictional exposure.',
  },
  {
    id: 'entry',
    title: 'Cross-Border Market Entry',
    description:
      'Regulatory navigation, local partnership frameworks, and go-to-market sequencing for global expansion.',
  },
  {
    id: 'operations',
    title: 'Operational Engineering',
    description:
      'Process redesign, supply chain resilience, and organizational scaling for high-growth enterprises.',
  },
  {
    id: 'governance',
    title: 'Governance & Board Advisory',
    description:
      'Board composition, fiduciary frameworks, and stakeholder alignment for public and pre-IPO entities.',
  },
];
