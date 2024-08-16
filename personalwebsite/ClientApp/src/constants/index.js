  import platformer from "../assets/platformer.png"
  import idk from "../assets/idk.png"
  import columbia from "../assets/columbia.png"
  import ssp from "../assets/ssp.png"
  import churchill from "../assets/churchill.png"
  import comingsoon from "../assets/comingsoon.png"
  import global from "../assets/global.png"
  import uwb from "../assets/uwb.png"
  import yhacks from "../assets/yhacks.png"
  import pokemon1 from "../assets/pokemon1.png"
  
  const experiences = [
    {
      title: "Student",
      company_name: "Columbia University",
      icon: columbia,
      iconBg: "#383E56",
      date: "Sept 2023 - Present",
      points: [
        "Double Major in CS & Econ-Math",
        "Relevant coursework: Machine Learning, Artifical Intelligence, Intermediate Microeconomics, Data Structures",
        "CSI Rocketry Electronics Team, ADI Devfest Team, Table Tennis A Team",
      ],
    },
    {
      title: "Student Researcher",
      company_name: "Columbia Engineering",
      icon: columbia,
      iconBg: "#383E56",
      date: "March 2024 - Present",
      points: [
        "Developing software and hardware for Professor Sharon Di's Ditech Lab to facilitate a pedestrian safety warning system",
        "Optimized location tracking, switching the localization technology from GPS to ultra-wideband technology, increasing accuracy from ± 5 meters to 10 cm",
        "Developed an iOS application in SwiftUI to manage MQTT message transmission between servers and user devices, enhancing communication efficiency"
      ],
    },
    {
      title: "Financial Analyst Intern",
      company_name: "Global Time Investment",
      icon: global,
      iconBg: "#383E56",
      date: "March 2024 - Present",
      points: [
        "Analyzed financial statements and industry reports, summarizing key insights on business technology, financial accounting, and risk factors to draft comprehensive research papers on target companies’ financial health",
        "Collaborated with senior analysts to evaluate investment opportunities and provide portfolio recommendations"
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
        "1st provincially and 3rd nationally at the Canadian Chemistry Competition "
      ],
    },
  ];
  
  const projects = [
    {
      name: "Pedestrian Safety System",
      description:
        "A Swift app that uses UWB and three anchors to triangulate a location, sending data via MQTT to check if a pedestrian is in a danger zone, defined by Kalman filtering of live camera data.",
      tags: [
        {
          name: "swift",
          color: "orange-text-gradient",
        },
        {
          name: "hardware",
          color: "pink-text-gradient",
        },
      ],
      image: uwb,
      source_code_link: "https://gilbertworld.com/#/pedestrian",
    },
    {
      name: "Yale Hacks Project",
      description:
        "A React and Flask application that converts a user prompt into a detailed lesson plan, a video script, and a mini video lesson, providing customization options at each stage.",
      tags: [
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "flask",
          color: "purple-text-gradient",
        },
      ],
      image: yhacks,
      source_code_link: "https://gilbertworld.com/#/yhacks",
    },
    {
      name: "Platformer Game",
      description:
        "Have you had a chance to explore the 404 Not Found page yet? There you will be surprised by a simple platformer game. Try to find the Easter Eggs :)",
      tags: [
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "gamedev",
          color: "blue-text-gradient",
        },
      ],
      image: platformer,
      source_code_link: "https://gilbertworld.com/#/enemiescomingsoon",
    },
    {
      name: "The Google Effect",
      description:
        "The Google effect is when we forget information that’s easily accessible online. This is a short interactive demo I created for my Frontiers of Science (SCNC CC1000) project.",
      tags: [
        {
          name: "react",
          color: "green-text-gradient",
        },
      ],
      image: idk,
      source_code_link: "https://gilbertworld.com/#/frosci",
    }
  ];

  const blogs = [
    {
      name: "Pokemon: The Game of Life",
      description:
        "While perhaps this is not the conventional first blog post, I feel like I would be doing an injustice leaving out my collection and its journey from a recounting of my experiences. Scroll through the mini showcase of some of my favourite memories in Pokemon through the years :)",
      tags: [
        {
          name: "pokemon",
          color: "blue-text-gradient",
        },
        {
          name: "lifestyle",
          color: "green-text-gradient",
        },
      ],
      image: pokemon1,
      source_code_link: "https://gilbertworld.com/#/pokemon",
    },
  ];
  
  export { experiences, projects, blogs };