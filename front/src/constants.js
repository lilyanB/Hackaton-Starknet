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
    name: 'Game 1',
    description:
      'Puzzles : information research',
    question: "The bitcoinCore program modifies its difficulty according to the power of the network to tend to a time X to create a transaction block. What is this X time?",
    stack: ['Cryptography', 'Internet'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    contract: "",
  },
  {
    name: 'Game 2',
    description:
      'Use of Voyager',
    question: "The administrator has set a value. The goal is for you to find this value. Use ArgentX polur to activate the 'submit_answer' function, argentX will give you an error, observe the error 😉",
    stack: ['Voyager', 'Transactions', 'Blocks'],
    sourceCode: 'https://github.com',
    livePreview: 'https://voyager.online/',
    contract: "",
  },
  {
    name: 'Game 3',
    description:
      'Code review, Functions to activate',
    stack: ['Observe', 'Audit'],
    question: "Use Voyager to interact with the contract. Here is the 'submit_answer' function: It's up to you to find the answer",
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    contract: "",
  },
  {
    name: 'Game 4',
    description:
      'Deployment of a contract',
    stack: ['Linux', 'Starknet', 'node.js'],
    question: "You must activate the 'submit_answer' function when your variable is equal to 10. use voyager to observe and modify your variable.",
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    contract: "",
  }
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'hackaton-team@mail.com',
}

const baseUrl = "http://localhost:3000/"

export { header, about, exercices, contact, baseUrl }
