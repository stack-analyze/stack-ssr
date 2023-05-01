import {Link, Tools} from './interfaces/linkInterface'

const mainPages: Link[] = [
  {
    app: 'web',
    path: '/web'
  },
  {
    app: 'info',
    path: '/info'
  },
  {
    app: 'query',
    path: '/query'
  },
  {
    app: 'utility',
    path: '/utility'
  },
  {
    app: 'about',
    path: '/about'
  }
]
const webPages: Tools[] = [
  {
    app: 'web home',
    path: '/web',
    icon: ['fas', 'home'],
  },
  {
    app: 'tech-stack',
    path: '/web/stack',
    icon: ['fas', 'fa-code']
  },
  {
    app: 'pagespeed',
    path: '/web/pagespeed',
    icon: ['fas', 'fa-gauge']
  },
  {
    app: 'whois',
    path: '/web/whois',
    icon: ['fas', 'fa-info']
  },
  {
    app: 'web scraping',
    path: '/web/scraping',
    icon: ['fas', 'fa-spider']
  },
]

const infoPages: Tools[] = [
  {
    app: 'info home',
    path: '/info',
    icon: ['fas', 'home'],
  },
  {
    app: 'github info',
    path: '/info/github',
    icon: ['fab', 'github'],
  },
  {
    app: 'bitly info',
    path: '/info/bitly',
    icon: ['fas', 'search'],
  },
  {
    app: 'crypto market',
    path: '/info/crypto',
    icon: ['fas', 'wallet'],
  },
  {
    app: 'bundlephobia info',
    path: '/info/bundlephobia',
    icon: ['fas', 'file-code']
  }
]

const queryPages: Tools[] = [
  {
    app: 'query home',
    path: '/query',
    icon: ['fas', 'home'],
  },
  {
    app: 'anime search',
    path: '/query/anime',
    icon: ['fas', 'hand-spock'],
  },
  {
    app: 'movie search',
    path: '/query/movie',
    icon: ['fas', 'film'],
  },
  {
    app: 'twitch search',
    path: '/query/twitch',
    icon: ['fab', 'twitch'],
  },
]

const utilityPages: Tools[] = [
  {
    app: 'utility home',
    path: '/utility',
    icon: ['fas', 'home'],
  },
  {
    app: 'password generator',
    path: '/utility/password',
    icon: ['fas', 'lock'],
  },
  {
    app: 'hardware information',
    path: '/utility/hardware',
    icon: ['fas', 'terminal'],
  },
]

export {
  mainPages,
  webPages,
  infoPages,
  queryPages,
  utilityPages
};
