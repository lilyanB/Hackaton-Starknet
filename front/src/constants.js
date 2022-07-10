const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/lilyanB/Hackaton-Starknet',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Hackaton Team',
  role: 'Team wee work on Starkware',
  description:
    'With this web site you can prove your level in cryptographie/blockchain',
  resume: 'https://starknet.io/',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const exercices = [
  // exercices can be added an removed
  // if there are no exercices, Exercices section won't show up
  {
    name: 'Exercise 1',
    description:
      'puzzles : information searches',
    stack: ['Cryptographie', 'internet'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Exercise 2',
    description:
      'use of Voyager',
    stack: ['voyager', 'Transactions', 'Blocks'],
    sourceCode: 'https://github.com',
    livePreview: 'https://voyager.online/',
  },
  {
    name: 'Exercise 3',
    description:
      'code review, functions to activate',
    stack: ['observer', 'audit'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Exercise 4',
    description:
      'deployment of a contract',
    stack: ['Linux', 'starknet', 'node.js'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  }
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'hackaton-team@mail.com',
}

const baseUrl = "http://localhost:3000/"

export { header, about, exercices, contact, baseUrl }
