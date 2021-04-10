import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Pete Izzo | Developer', 
  lang: 'en', 
  description: 'Welcome to my portfolio', 
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is',
  name: 'Pete',
  subtitle: 'I\'m a Programmer and Web Developer',
  cta: 'Learn more about me',
};

// ABOUT DATA
export const aboutData = {
  img: 'me_b&w1.jpg',
  paragraphOne: 'Hello! My name is Pete. I like to talk to computers and make them do cool things. I am a kind, creative, and candid web developer and programmer with personal and professional experience creating web apps and programs.',
  paragraphTwo: 'I have experience working with Python, Java, Javascript, MySQL, and various other technologies.',
  paragraphThree: 'I am passionate about creating new things and working with other people - the best projects are rarely built alone! Besides programming, I enjoy spending time with my family, mountain biking, snowboarding, and playing video games.',
  resume: 'https://www.dropbox.com/s/u5jrdzn4k5zjwn6/Peter_Izzo_Resume.pdf?dl=0', 
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'readme_gen.jpg',
    title: 'README Gen',
    info: 'This application is a README generator. Sometimes the hardest part of creating a new application or project is coming up with a good looking README. This little app solves that problem.',
    info2: 'README Gen was created using Javascript',
    repo: 'https://github.com/peter-izzo/README-GEN', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'no_waste_kitchen.png',
    title: 'No Waste Kitchen',
    info: 'Sometimes we have ingredients in our home that we don\'t know what to do with. We also feel guilty having it go to waste. Am I right? Well this app helps you find recipes that you can use with what you already have at home. carrots, rice, onion? No problem!',
    info2: 'No Waste Kitchen was a group project created by myself and two other students during the UCONN full stack bootcamp. It was created with Javascript, JQuery, the Skeleton CSS framework, and TheMealDB & EDAMAM APIs',
    url: 'https://peter-izzo.github.io/No-Waste-Kitchen/',
    repo: 'https://github.com/peter-izzo/No-Waste-Kitchen', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'employee-dr.png',
    title: 'Employee Directory',
    info: 'This Application was created using ReactJS, Tachyons, and https://randomuser.me',
    info2: '',
    url: 'https://peter-izzo.github.io/Employee-Directory/',
    repo: 'https://github.com/peter-izzo/Employee-Directory', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'app.png',
    title: 'Eat-Da-Burger!',
    info: 'Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they\'d like to eat and choose to devour, undevour, or delete the burger.',
    info2: 'This app was created using JS, Handlebars, MYSQL and deployed on Heroku.',
    url: 'https://rocky-spire-26792.herokuapp.com/',
    repo: 'https://github.com/peter-izzo/BurgerMeister', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'budget.png',
    title: 'Budget Dr.',
    info: 'This is a budget tracker that users can use on the go, whether with internet access or not. All additions to the tracker while offline will populate when users come back online',
    info2: 'This app was Created with JS, MongoDB/Mongoose, IndexedDB, and deployed on Heroku',
    url: 'https://peaceful-gorge-03319.herokuapp.com/',
    repo: 'https://github.com/peter-izzo/Budget-Dr', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'firness.png',
    title: 'Reps for Woz',
    info: 'As a user, I want to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day. I should also be able to track the name, type, weight, sets, reps, and duration of exercise. If the exercise is a cardio exercise, I should be able to track my distance traveled.',
    info2: 'This app was Created with JS, MongoDB/Mongoose, and deployed on Heroku',
    url: 'https://pacific-fjord-46851.herokuapp.com/',
    repo: 'https://github.com/peter-izzo/Reps-for-Woz', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Say Hello!',
  btn: 'Hi There!',
  email: 'peter.izzo528@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/pizzo528',
    },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/peter-izzo/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/peter-izzo',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
