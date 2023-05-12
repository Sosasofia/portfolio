export const projects = [
  {
    title: "Giffy",
    description: "The app consumes data from the Giphy API.",
    image: "/images/Giffy.png",
    github: "https://github.com/Sosasofia/giffy",
    demo: "https://giffy-virid.vercel.app/",
    technologies: "React | React Router",
  },
  {
    title: "NotesApp",
    description: "Fullstack app that consumes data from a REST API.",
    image: "/images/Notes-App.png",
    github: "https://github.com/Sosasofia/notes-front",
    demo: "https://notes-front-phi.vercel.app/home",
    technologies: "React | Redux | Tailwind",
  },
  {
    title: "Pokedex",
    description: "Pokedex using React, consuming pokeapi.co API.",
    image: "/images/pokedex.png",
    github: "https://github.com/Sosasofia/pokedex",
    demo: "https://pokedex-sosasofia.vercel.app/",
    technologies: "React | Styled Components",
  },
  {
    title: "Landing page",
    description:
      "Solution to Frontend Mentor challenge.",
    image: "/images/landing-page.png",
    github: "https://github.com/Sosasofia/loopstudios-landing-page",
    demo: "https://loopstudios-landing-page-sosasofia.vercel.app/",
    technologies: "HTML | CSS/SCSS | Javascript",
  },
  // {
  //   title: "Signup form",
  //   description:
  //     "Mobile-first solution to the Intro component with sign up form challenge on Frontend Mentor.",
  //   image: "/images/SignUp.png",
  //   github:
  //     "https://github.com/Sosasofia/Responsive-signup-form-with-HTML5-CSSS3-JS-SCSS",
  //   demo: "https://sosasofia.github.io/Responsive-signup-form-with-HTML5-CSSS3-JS-SCSS",
  //   technologies: "React",
  // },
  // {
  //   title: "Time tracking dashboard",
  //   description: "Solution to Frontend Mentor challenge with REACT.",
  //   image: "/images/Time-tracking-dashboard.png",
  //   github: "https://github.com/Sosasofia/react-time-tracking",
  //   demo: "https://react-time-tracking.vercel.app/",
  //   technologies: "React",
  // },
  // {
  //   title: "Currency converter",
  //   description:
  //     "Simple currency exchange rate converter usign HTML, CSS and Javascript.",
  //   image: "/images/currency-converter.png",
  //   github: "https://github.com/Sosasofia/currency-converter",
  //   demo: "https://sosasofia.github.io/currency-converter/",
  //   technologies: "HTML | CSS | Javascript",
  // },
  // {
  //   title: "CRUD API",
  //   description: "Simple REST API using Node.js/Express/Moongose.",
  //   github: "https://github.com/Sosasofia/CRUD-API-NODE",
  //   demo: "https://sosasofia.github.io/countdown-timer/",
  //   technologies: "Node.js | Express | Moongose",
  // }
];

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export const color = {
  project: "#D7CDC0",
  contact: "#867D71",
  navigation: "#D7CDC0",
  color2: "#544C41",
  color3: "#625A4F",
};

export const emailJsVariables = {
  service_id: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  template_id: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  user_id: process.env.REACT_APP_EMAILJS_USER_ID,
};

export const registerOptions = {
  name: {
    required: "Name is required",
    minLength: {
      value: 10,
      message: "Message must have at least 10 characters",
    },
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: "Entered value does not match email format",
    },
  },
  message: {
    required: "Message is required",
    minLength: {
      value: 30,
      message: "Message must have at least 30 characters",
    },
  },
};
