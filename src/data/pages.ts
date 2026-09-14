// Chaque entrée relie une page anglaise à sa traduction française.
// Les titres servent à la navigation, au Hero et au titre de l'onglet.
export const pages = {
  legalNotice: {
    en: { title: 'Legal Notice', path: '/en/legal-notice' },
    fr: { title: 'Mentions légales', path: '/fr/mentions-legales' },
  },
  home: {
    en: { title: 'Home', path: '/en/' },
    fr: { title: 'Accueil', path: '/fr/' },
  },
  group: {
    en: { title: 'Group', path: '/en/group' },
    fr: { title: 'Groupe', path: '/fr/groupe' },
  },
  businesses: {
    en: { title: 'Businesses', path: '/en/businesses' },
    fr: { title: 'Activités', path: '/fr/activites' },
  },
  sustainability: {
    en: { title: 'Sustainability', path: '/en/sustainability' },
    fr: { title: 'Développement durable', path: '/fr/developpement-durable' },
  },
  historyFuture: {
    en: { title: 'History & Future', path: '/en/history-future' },
    fr: { title: 'Histoire et avenir', path: '/fr/histoire-avenir' },
  },
  investors: {
    en: { title: 'Investors', path: '/en/investors' },
    fr: { title: 'Investisseurs', path: '/fr/investisseurs' },
  },
  careers: {
    en: { title: 'Careers', path: '/en/careers' },
    fr: { title: 'Carrières', path: '/fr/carrieres' },
  },
  newsroom: {
    en: { title: 'Newsroom', path: '/en/newsroom' },
    fr: { title: 'Actualités', path: '/fr/actualites' },
  },
} as const;

export type Language = 'en' | 'fr';
export type PageKey = keyof typeof pages;

// Les textes communs, y compris les libellés d'accessibilité, sont bilingues.
export const translations = {
  en: {
    navigation: 'Main navigation',
    language: 'Language',
    headquarters: 'The Bolos Universal Company headquarters',
  },
  fr: {
    navigation: 'Navigation principale',
    language: 'Langue',
    headquarters: 'Siège de The Bolos Universal Company',
  },
};
