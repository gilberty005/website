import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
  } from "../assets";

  import platformer from "../assets/platformer.png"
  import website from "../assets/Website.png"
  import columbia from "../assets/columbia.png"
  import ssp from "../assets/ssp.png"
  import churchill from "../assets/churchill.png"
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Student",
      company_name: "Columbia University",
      icon: columbia,
      iconBg: "#383E56",
      date: "Sept 2023 - Present",
      points: [
        "Prospective BA in CS & Econ Double Major.",
        "Relevant coursework: Principles of Economics, Calculus III, Introduction to Computer Science in Java.",
        "CSI Rocketry Electronics Team, Formula Racing Low Voltage Team, Debate Team",
      ],
    },
    {
      title: "Student Researcher",
      company_name: "Summer Science Program",
      icon: ssp,
      iconBg: "#E6DEDD",
      date: "June 2022 - July 2022",
      points: [
        "MIT/Caltech sponsored program employing vector calculus, Python programming, and astrophysics to detect and track asteroids",
        "Completed an extra project involving the transit method to detect exoplanet Qatar-1b",
      ],
    },
    {
      title: "Student",
      company_name: "Sir Winston Churchill High School",
      icon: churchill,
      iconBg: "#E6DEDD",
      date: "Sept 2020 - June 2023",
      points: [
        "Honors with Distinction & Full IB Diploma (41/45)",
        "3rd in Canada at the Canadian Chemistry Competition "
      ],
    },
  ];
  
  const projects = [
    {
      name: "Platformer Game",
      description:
        "Have you tried to get to the 404 Not Found page yet? There you will be surprised by a simple platformer game. Currently there is no objective in the game, but there will be soon :)",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "gamedev",
          color: "pink-text-gradient",
        },
      ],
      image: platformer,
      source_code_link: "https://github.com/",
    },
    {
      name: "Personal Website",
      description:
        "This website! My biggest project to date, there is a lot of little easter eggs to go out searching for! I am still constantly adding to my project and any feedback would be greatly appreciated",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: website,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };