export const projects = [
  {
    title: "Pokedex",
    description: "Simple Pokedex using React, consuming pokeapi.co API",
    image: "/images/pokedex.png",
    github: "https://github.com/Sosasofia/pokedex",
    demo: "https://pokedex-sosasofia.vercel.app/",
    stack: ["React", "Mobile first"],
  },
  {
    title: "Signup form",
    description:
      "Mobile-first solution to the Intro component with sign up form challenge on Frontend Mentor.",
    image: "/images/signup.png",
    github:
      "https://github.com/Sosasofia/Responsive-signup-form-with-HTML5-CSSS3-JS-SCSS",
    demo: "https://sosasofia.github.io/Responsive-signup-form-with-HTML5-CSSS3-JS-SCSS",
    stack: [],
  },
  {
    title: "Time tracking dashboard",
    description: "Solution to Frontend Mentor challenge with REACT.",
    image: "/images/time-tracking.png",
    github: "https://github.com/Sosasofia/react-time-tracking",
    demo: "https://react-time-tracking.vercel.app/",
    stack: [],
  },
  {
    title: "Landing page",
    description:
      "Solution to Frontend Mentor challenge. Using HTML, CSS/SCSS and Javascript.",
    image: "/images/landing-page.png",
    github: "https://github.com/Sosasofia/loopstudios-landing-page",
    demo: "https://loopstudios-landing-page-sosasofia.vercel.app/",
    stack: [],
  },
  {
    title: "Currency converter",
    description:
      "Simple currency exchange rate converter usign HTML, CSS and Javascript.",
    image: "/images/currency-converter.png",
    github: "https://github.com/Sosasofia/currency-converter",
    demo: "https://sosasofia.github.io/currency-converter/",
    stack: [],
  },
  {
    title: "Countdown",
    description: "Countdown timer using HTML, CSS and Javascript.",
    image: "/images/countdown.png",
    github: "https://github.com/Sosasofia/countdown-timer",
    demo: "https://sosasofia.github.io/countdown-timer/",
    stack: [],
  },
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
