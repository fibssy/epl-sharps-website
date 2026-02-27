export interface League {
  slug: string;
  name: string;
  shortName: string;
  country: string;
  flag: string;
  accentColor: string;
  active: boolean;
}

export const leagues: League[] = [
  {
    slug: 'epl',
    name: 'Premier League',
    shortName: 'EPL',
    country: 'England',
    flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
    accentColor: '#3d195b',
    active: true,
  },
  {
    slug: 'laliga',
    name: 'La Liga',
    shortName: 'LaLiga',
    country: 'Spain',
    flag: '🇪🇸',
    accentColor: '#ee8707',
    active: false,
  },
  {
    slug: 'bundesliga',
    name: 'Bundesliga',
    shortName: 'Bundesliga',
    country: 'Germany',
    flag: '🇩🇪',
    accentColor: '#d3010c',
    active: false,
  },
  {
    slug: 'ucl',
    name: 'Champions League',
    shortName: 'UCL',
    country: 'Europe',
    flag: '🏆',
    accentColor: '#001d5e',
    active: false,
  },
  {
    slug: 'seriea',
    name: 'Serie A',
    shortName: 'Serie A',
    country: 'Italy',
    flag: '🇮🇹',
    accentColor: '#024494',
    active: false,
  },
  {
    slug: 'ligue1',
    name: 'Ligue 1',
    shortName: 'Ligue 1',
    country: 'France',
    flag: '🇫🇷',
    accentColor: '#003e8e',
    active: false,
  },
];

export function getLeague(slug: string): League | undefined {
  return leagues.find((l) => l.slug === slug);
}

export function getActiveLeagues(): League[] {
  return leagues.filter((l) => l.active);
}
