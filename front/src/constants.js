const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://hackaton-starknet.vercel.app/',
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
    id: 1,
    name: 'Game 1',
    description:
      'Puzzles : information research',
    question: "The bitcoinCore program modifies its difficulty according to the power of the network to tend to a time X to create a transaction block. What is this X time?",
    stack: ['Cryptography', 'Internet'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    address: "0x00a364b95aee116889badb868b9ab52d3370fc9d15b7b3bbed14bd361e6eedd7",
  },
  {
    id: 2,
    name: 'Game 2',
    description:
      'Use of Voyager',
    question: "The administrator has set a value. The goal is for you to find this value. Use ArgentX polur to activate the 'submit_answer' function, argentX will give you an error, observe the error 😉",
    stack: ['Voyager', 'Transactions', 'Blocks'],
    sourceCode: 'https://github.com',
    livePreview: 'https://voyager.online/',
    address: "0x027d841ffcf7453e3c59c9c1a7304ac1c3a6d3112e3ce713200f73e66e5d8515",
  },
  {
    id: 3,
    name: 'Game 3',
    description:
      'Code review, Functions to activate',
    stack: ['Observe', 'Audit'],
    question: "Use Voyager to interact with the contract. Here is the 'submit_answer' function: It's up to you to find the answer",
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    address: "0x01fdfd285e23521d5a34a4433f3e09abbd9b467efc3fdd5c368aca5d3e7e45a0",
  },
  {
    id: 4,
    name: 'Game 4',
    description:
      'Deployment of a contract',
    stack: ['Linux', 'Starknet', 'node.js'],
    question: "You must activate the 'submit_answer' function when your variable is equal to 10. use voyager to observe and modify your variable.",
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    address: "0x03de7a1d787bf9a01349a18eb4bbb0f04b722acd5017fe825c1502ad8cdf0286",
  }
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'hackaton-team@mail.com',
}

const baseUrl = "http://localhost:3000/"

export { header, about, exercices, contact, baseUrl }
