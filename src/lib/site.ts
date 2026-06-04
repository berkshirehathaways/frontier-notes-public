export const SITE = {
  title: '노이즈',
  englishName: 'Noise',
  subtitle: 'AI 네이티브 창업가와 빌더를 인터뷰합니다.',
  description:
    '노이즈는 AI를 기본 작업 방식으로 삼는 창업가와 빌더를 인터뷰하는 매거진입니다. 그들이 붙잡은 문제, 직접 만든 도구와 런타임, 반복해서 다듬는 작업 방식을 기록합니다.',
  coreLines: [
    'AI 네이티브 창업가와 빌더를 인터뷰합니다.',
    '문제의식, 도구, 런타임, 작업 방식을 기록합니다.',
  ],
  cta: {
    readLatest: '/interviews',
    interviewProposal: '/interview-proposal',
  },
  contactEmail: 'frontier.notes.magazine@gmail.com',
};

export const MAIN_NAV = [
  { href: '/interviews', label: '인터뷰' },
  { href: '/field-notes', label: '현장 노트' },
  { href: '/about', label: '소개' },
  { href: '/interview-proposal', label: '제안하기' },
] as const;

export const HUB_NAV = [
  { href: '/notes', label: 'Notes Explorer' },
  { href: '/newsletter', label: 'Newsletter Archive' },
] as const;

export const SIGNAL_OPTIONS = [
  'speed',
  'tool-adoption',
  'distribution',
  'product-sense',
  'community-pull',
  'workflow-change',
  'demo-pressure',
  'founder-market-fit',
  'taste',
  'execution-density',
] as const;

export const STAGE_OPTIONS = [
  'project',
  'startup',
  'operator',
  'investor',
  'community',
] as const;
