interface Tools {
  name: string
  versionAdded: string
  description: string
}

export const webTools: Tools[] = [
  {
    name: 'tech-stack',
    versionAdded: '(npm) 1.0.4',
    description: 'analyze website tech stack except HTML, CSS & javascript plain'
  },
  {
    name: 'pagespeed',
    versionAdded: '(npm) 1.0.7',
    description: 'using google api services the way simple'
  },
  {
    name: 'whois info',
    versionAdded: 'exclusive (pwa) 1.0.0',
    description: 'search domain info'
  },
  {
    name: 'web scraping',
    versionAdded: '(npm) 1.1.9',
    description: 'this tool only scraping html pages not SPA webs'
  },
]

export const infoTools: Tools[] = [
  {
    name: 'github info',
    versionAdded: '(npm) 1.0.9',
    description: 'seach & view github profile'
  },
  {
    name: 'crypto market',
    versionAdded: '(npm) 1.1.3',
    description: 'show top 100 crypto coins using coingecko api'
  },
  {
    name: 'bitly info',
    versionAdded: '(npm) 1.1.4',
    description: 'using bitly api for reveal link'
  },
  {
    name: 'bundlephobia info',
    versionAdded: '(npm) 1.2.3',
    description: 'using the bundlephobia web for search npm package info'
  },
]

export const queryTools: Tools[] = [
  {
    name: 'anime search',
    versionAdded: '(npm) 1.0.9',
    description: 'search animes, ova & movies using jikan api'
  },
  {
    name: 'movie info',
    versionAdded: '(npm) 1.1.5',
    description: 'search movies using the movieDB service'
  },
  {
    name: 'twitch info',
    versionAdded: '(npm) 1.1.7',
    description: 'using the twitch api helix'
  },
]

export const utilityTools: Tools[] = [
  {
    name: 'hardware infomation',
    versionAdded: '(npm) 1.1.0 & (stack-delta) 1.1.0',
    description: 'get hardware info and/or browser version'
  },
  {
    name: 'password generator',
    versionAdded: '(npm) 1.2.0 & (stack-delta) 2.0.0',
    description: 'generate a random password'
  },
]
