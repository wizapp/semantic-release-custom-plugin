const pluginConfig: {
  branches: [ 'production' ],
  repositoryUrl: 'git@gitlab.com:igienairco/cicd-test.git',
  tagFormat: 'v${version}',
  debug: true,
  _: [],
  d: true,
  'dry-run': true,
  dryRun: true,
  '$0': 'node_modules/semantic-release/bin/semantic-release.js'
}

const context = context: {
  cwd: '/Users/sroyer/Documents/Dev/IGIENAIR/cicd-test',
  env: {
    GIT_AUTHOR_NAME: 'semantic-release-bot',
    GIT_AUTHOR_EMAIL: 'semantic-release-bot@martynus.net',
    GIT_COMMITTER_NAME: 'semantic-release-bot',
    GIT_COMMITTER_EMAIL: 'semantic-release-bot@martynus.net',
    GIT_TERMINAL_PROMPT: '0'
  },
  envCi: {
    isCi: false,
    commit: '401981ee1d18a742d7332c94cec90a4ec59f1a4a',
    branch: 'production'
  },
  options: {
    branches: [ 'production' ],
    repositoryUrl: 'git@gitlab.com:igienairco/cicd-test.git',
    tagFormat: 'v${version}',
    plugins: [ [Array], [Array] ],
    debug: true,
    _: [],
    d: true,
    'dry-run': true,
    dryRun: true,
    '$0': 'node_modules/semantic-release/bin/semantic-release.js'
  },
  branches: [
    {
      channel: undefined,
      tags: [Array],
      type: 'release',
      name: 'production',
      range: '>=1.2.8',
      accept: [Array],
      main: true
    }
  ],
  branch: {
    channel: undefined,
    tags: [
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object], [Object],
      [Object], [Object]
    ],
    type: 'release',
    name: 'production',
    range: '>=1.2.8',
    accept: [ 'patch', 'minor', 'major' ],
    main: true
  },
  releases: [],
  lastRelease: {
    version: '1.2.8',
    gitTag: 'v1.2.8',
    channels: [ null ],
    gitHead: '401981ee1d18a742d7332c94cec90a4ec59f1a4a',
    name: 'v1.2.8'
  },
  commits: [],
  stdout: {} //  WriteStream
  stderr: {} //  WriteStream
  logger: {} // Signale
}