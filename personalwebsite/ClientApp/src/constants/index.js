  import platformer from "../assets/platformer.png"
  import idk from "../assets/idk.png"
  import columbia from "../assets/columbia.png"
  import ssp from "../assets/ssp.png"
  import churchill from "../assets/churchill.png"
  import comingsoon from "../assets/comingsoon.png"
  
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
        "Have you tried to get to the 404 Not Found page yet? There you will be surprised by a simple platformer game.",
      tags: [
        {
          name: "react",
          color: "orange-text-gradient",
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
      source_code_link: "https://gilbertworld.com/#/enemiescomingsoon",
    },
    {
      name: "The Google Effect",
      description:
        "A short interactive demonstration of the \"Google Effect\" made as my project for Frontiers of Science (SCNC CC1000)",
      tags: [
        {
          name: "react",
          color: "orange-text-gradient",
        },
        {
          name: "columbia",
          color: "blue-text-gradient",
        },
      ],
      image: idk,
      source_code_link: "https://gilbertworld.com/#/frosci",
    }
  ];

  const blogs = [
    {
      name: "Coming Soon!",
      description:
        "Blogs will be coming soon! In the meantime, here is what ChatGPT has to has say about the matter: Get ready to laugh your socks off, because my 'Coming Soon' section is like a mystery box of hilarity waiting to be unleashed! I've locked myself in a room with nothing but coffee and dad jokes, and I'm cooking up a storm of comedy that'll have you rolling on the floor laughing.",
      tags: [
        {
          name: "helpme",
          color: "blue-text-gradient",
        },
        {
          name: "seriously",
          color: "green-text-gradient",
        },
        {
          name: "chatgtplockedmeup",
          color: "pink-text-gradient",
        },
      ],
      image: comingsoon,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { experiences, projects, blogs };