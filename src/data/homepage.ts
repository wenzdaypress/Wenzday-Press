export type NewsStory = {
  id: string;
  category: string;
  headline: string;
  excerpt?: string;
  author: string;
  date: string;
  time: string;
  href: string;
};

export type LongformStory = {
  id: string;
  headline: string;
  excerpt: string;
  author: string;
  date: string;
  readingTime: string;
  href: string;
};

export const lastHoursHeadlines: NewsStory[] = [
  {
    id: 'last-hours-1',
    category: 'National',
    headline: 'Union ministries review preparedness after overnight weather alerts',
    author: 'News Desk',
    date: '24 June 2026',
    time: '8:14 PM',
    href: '/article/union-ministries-review-preparedness',
  },
  {
    id: 'last-hours-2',
    category: 'Politics',
    headline: 'Opposition leaders seek debate on federal spending priorities',
    author: 'Politics Desk',
    date: '24 June 2026',
    time: '7:58 PM',
    href: '/article/opposition-leaders-seek-debate',
  },
  {
    id: 'last-hours-3',
    category: 'Economy',
    headline: 'Markets close higher as banking and energy stocks recover',
    author: 'Markets Desk',
    date: '24 June 2026',
    time: '7:36 PM',
    href: '/article/markets-close-higher',
  },
  {
    id: 'last-hours-4',
    category: 'Law',
    headline: 'Court asks states to file updated compliance reports',
    author: 'Legal Desk',
    date: '24 June 2026',
    time: '7:05 PM',
    href: '/article/court-asks-states-compliance',
  },
  {
    id: 'last-hours-5',
    category: 'International',
    headline: 'Global negotiators extend talks after revised climate proposal',
    author: 'World Desk',
    date: '24 June 2026',
    time: '6:44 PM',
    href: '/article/global-negotiators-extend-talks',
  },
  {
    id: 'last-hours-6',
    category: 'National',
    headline: 'Election commission announces revised verification schedule',
    author: 'News Desk',
    date: '24 June 2026',
    time: '6:21 PM',
    href: '/article/election-commission-verification-schedule',
  },
  {
    id: 'last-hours-7',
    category: 'Explainer',
    headline: 'What the new data rules mean for digital platforms',
    author: 'Explainer Desk',
    date: '24 June 2026',
    time: '5:52 PM',
    href: '/article/new-data-rules-digital-platforms',
  },
  {
     id: 'last-hours-8',
    category: 'Economy',
    headline: 'Rural credit growth remains steady through the quarter',
    author: 'Economy Desk',
    date: '24 June 2026',
    time: '5:30 PM',
    href: '/article/rural-credit-growth-steady',
  },
  {
    id: 'last-hours-9',
    category: 'Politics',
    headline: 'Parliamentary panel schedules hearings on urban housing',
    author: 'Politics Desk',
    date: '24 June 2026',
    time: '5:04 PM',
    href: '/article/panel-hearings-urban-housing',
  },
  {
    id: 'last-hours-10',
    category: 'Law',
    headline: 'High court reserves order in public records petition',
    author: 'Legal Desk',
    date: '24 June 2026',
    time: '4:42 PM',
    href: '/article/high-court-public-records-petition',
  },
];

export const heroStory: NewsStory = {
  id: 'hero-story',
  category: 'National',
  headline: 'Government prepares new framework for resilient public infrastructure',
  excerpt:
    'Officials say the proposal will prioritise climate readiness, transparent procurement, and faster coordination between central and state agencies.',
  author: 'National Desk',
  date: '24 June 2026',
  time: '8:30 PM',
  href: '/article/resilient-public-infrastructure-framework',
};

export const featuredStories: NewsStory[] = [
  {
    id: 'featured-1',
    category: 'Economy',
    headline: 'Inflation outlook softens as food prices stabilise across major cities',
    excerpt: 'Economists expect a cautious policy stance as household demand remains uneven.',
    author: 'Economy Desk',
    date: '24 June 2026',
    time: '6:18 PM',
    href: '/article/inflation-outlook-softens',
  },
  {
     id: 'featured-2',
    category: 'Politics',
    headline: 'States request broader consultations before fiscal council meeting',
    excerpt: 'Chief ministers are expected to place revenue-sharing concerns on the agenda.',
    author: 'Politics Desk',
    date: '24 June 2026',
    time: '5:50 PM',
    href: '/article/states-request-consultations',
  },
  {
    id: 'featured-3',
    category: 'Law',
    headline: 'Supreme Court lists privacy challenge for final hearing next month',
    excerpt: 'The matter could clarify safeguards around personal data and state access.',
    author: 'Legal Desk',
    date: '24 June 2026',
    time: '4:55 PM',
    href: '/article/privacy-challenge-final-hearing',
  },
  {
    id: 'featured-4',
    category: 'International',
    headline: 'Regional leaders call for renewed cooperation on supply chains',
    excerpt: 'Trade officials said predictable rules remain essential for smaller exporters.',
    author: 'World Desk',
    date: '24 June 2026',
    time: '4:20 PM',
    href: '/article/regional-leaders-supply-chains',
  },
];

const categoryCopy: Record<string, string[]> = {
  National: [
    'States coordinate relief plans as seasonal rainfall intensifies',
    'Public health teams expand district-level monitoring network',
    'New transport corridors enter final round of safety review',
    'Education boards release revised assessment calendar',
    'Water authorities publish conservation advisory for cities',
    'Civic bodies prepare audit of urban flood response systems',
  ],
   Politics: [
    'Cabinet committee reviews timeline for pending reform bills',
    'Party leaders begin consultations before monsoon session',
    'Regional alliance announces coordination panel for policy agenda',
    'Speaker calls all-party meeting to discuss legislative schedule',
    'Campaign finance rules return to parliamentary spotlight',
    'State assemblies prepare for budget follow-up discussions',
  ],
  Economy: [
    'Manufacturing sentiment improves on stronger export orders',
    'Central bank flags stable liquidity conditions in weekly review',
    'Small business credit demand rises across service sectors',
    'Energy prices remain steady after revised supply estimates',
    'Startups seek clarity on compliance rules for overseas listings',
    'Analysts see cautious optimism in quarterly investment data',
  ],
  Law: [
    'Tribunal reforms draw responses from bar associations',
    'Bench seeks clarity on timelines in environmental approvals',
    'Legal aid centres expand digital filing assistance',
    'Court-appointed panel submits report on prison conditions',
    'Constitution bench to hear federal powers reference',
    'Regulators issue draft guidance on consumer redress systems',
  ],
    Explainer: [
    'Why inflation remains sticky despite easing commodity prices',
    'Explained: How the collegium system appoints judges',
    'Understanding the fiscal deficit in simple terms',
    'Why monsoon forecasts matter for India’s economy',
    'Breaking down the latest data protection regulations',
    'How electoral bonds changed political funding debates',
  ],
  International: [
    'Leaders meet to discuss maritime security in the Indo-Pacific',
    'Global markets react to central bank policy signals',
    'Ceasefire negotiations continue under international mediation',
    'Climate summit delegates debate financing commitments',
    'Major economies announce new technology cooperation framework',
    'Regional trade bloc approves expanded investment agreement',
  ],
};

export const categorySections = Object.entries(categoryCopy).map(([category, headlines]) => ({
  category,
  href: `/category/${category.toLowerCase()}`,
  stories: headlines.map((headline, index) => ({
    id: `${category.toLowerCase()}-${index + 1}`,
    category,
    headline,
    author: `${category} Desk`,
    date: '24 June 2026',
    time: `${7 - Math.floor(index / 2)}:${index % 2 === 0 ? '15' : '42'} PM`,
    href: `/article/${category.toLowerCase()}-${index + 1}`,
  })),
}));

export const editorials: LongformStory[] = [
  {
    id: 'editorial-1',
    headline: 'Public institutions need patience, transparency, and a longer memory',
    excerpt:
      'Trust is not restored through announcements alone. It is built when institutions explain decisions clearly and accept scrutiny as part of public life.',
    author: 'Editorial Board',
    date: '24 June 2026',
    readingTime: '5 min read',
    href: '/editorial/public-institutions-need-patience',
  },
  {
    id: 'editorial-2',
    headline: 'A serious economy needs better data and calmer politics',
    excerpt:
      'Growth debates become useful only when public data is timely, comparable, and protected from short-term political theatre.',
    author: 'Editorial Board',
    date: '24 June 2026',
    readingTime: '4 min read',
    href: '/editorial/economy-needs-better-data',
  },
];

export const columns: LongformStory[] = [
  {
    id: 'column-1',
    headline: 'The next decade will belong to cities that learn to adapt',
    excerpt:
      'Urban policy is no longer only about expansion. The real test is whether cities can absorb shocks without losing dignity or order.',
    author: 'Aarav Menon',
    date: '24 June 2026',
    readingTime: '6 min read',
    href: '/column/cities-that-learn-to-adapt',
  },
  {
    id: 'column-2',
    headline: 'Why political moderation still has a constituency',
    excerpt:
      'The loudest corners of public life do not always reflect the patient instincts of voters who want competence before spectacle.',
    author: 'Meera Sanyal',
    date: '24 June 2026',
    readingTime: '7 min read',
    href: '/column/political-moderation-constituency',
  },
];