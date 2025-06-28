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
  import finovax from "../assets/finovax.png"
  import bio from "../assets/8396911.png"
  import business from "../assets/bus.png"
  import aws from "../assets/aws.png"
  
  const experiences = [
    {
      title: "Student",
      company_name: "Columbia University",
      icon: columbia,
      iconBg: "#383E56",
      date: "Sept 2023 - Present",
      category: "education",
      points: [
        "GPA: 4.01",
        "B.A. in CS & Econ-Math (Double Major)",
        "Relevant coursework: Unsupervised Learning, Natural Language Processing, Machine Learning, Artifical Intelligence, Intermediate Macro/Microeconomics, Data Structures",
        "TA for Discrete Mathematics for Spring 2025 Semester"
      ],
    },
    {
      title: "SDE Intern",
      company_name: "Amazon Web Services",
      icon: aws,
      iconBg: "#383E56",
      date: "May 2025 - Present",
      category: "professional",
      points: [
        "Working as part of the AWS Marketplace Procurement Team on an internal ticket automation agent",
      ],
    },
    {
      title: "Student Researcher",
      company_name: "Columbia Business School",
      icon: business,
      iconBg: "#383E56",
      date: "Janurary 2025 - Present",
      category: "research",
      points: [
        "Working on an interactive benchmark to assess the abilities of agents in strategic exploration under Professor Hongseok Namkoong",
      ],
    },
    {
      title: "Student Researcher",
      company_name: "AlQuraishi Lab @ CUIMC",
      icon: bio,
      iconBg: "#383E56",
      date: "November 2024 - Present",
      category: "research",
      points: [
        "Working on implementing and training sparse autoencoders (SAEs) to address superposition in genomic language models",
        "Creating genomic visualizations using the UCSC Genome Browser to showcase activated neurons"
        ],
    },
    {
      title: "Student Researcher",
      company_name: "DiTech Lab @ Columbia Engineering",
      icon: columbia,
      iconBg: "#383E56",
      date: "March 2024 - December 2024",
      category: "research",
      points: [
        "Reduced 64% round-trip time (RTT) by developing an iOS application in SwiftUI to facilitate MQTT message transmission and reception between a server and user devices",
        "Enhanced location tracking accuracy from ±5 meters to 20 cm, significantly outperforming traditional GPS solutions, by implementing a custom algorithm combining triangulation methods with ultra-wideband (UWB) technology ",
        "Predicted pedestrian velocity using Kalman filters to determine entry and exit from designated danger zones",
        ],
    },
    {
      title: "Financial Analyst Intern",
      company_name: "Global Time Investment",
      icon: global,
      iconBg: "#383E56",
      date: "June 2024 - August 2024",
      category: "professional",
      points: [
        "Drove $1M+ investment decision making with company stakeholders by analyzing financial statements of 10+ target firms using Excel and Bloomberg ",
        "Delivered strategic portfolio recommendations by developing financial models and employing DCF and CCA methodologies"
      ],
    },
    {
      title: "Quant Intern",
      company_name: "Finovax",
      icon: finovax,
      iconBg: "#383E56",
      date: "March 2024 - May 2024",
      category: "professional",
      points: [
        "Built an interactive market trend visualization platform enabling traders to identify opportunities from real-time market trends using Backtrader, Plotly, and D3.js",
        "Identified key patterns and correlations to inform potential trading strategies by conducting exploratory data analysis (EDA) on select datasets to using NumPy and Pandas"
      ],
    },
    {
      title: "Student",
      company_name: "Sir Winston Churchill High School",
      icon: churchill,
      iconBg: "#383E56",
      date: "Sept 2020 - June 2023",
      category: "education",
      points: [
        "Honors with Distinction & Full IB Diploma (41/45)",
        "1st provincially and 3rd nationally at the Canadian Chemistry Competition "
      ],
    },
    {
      title: "Student Researcher",
      company_name: "Summer Science Program",
      icon: ssp,
      iconBg: "#383E56",
      date: "June 2022 - July 2022",
      category: "research",
      points: [
        "MIT/Caltech sponsored program employing vector calculus, Python programming, and astrophysics to detect and track asteroids",
        "Completed an extra project involving the transit method to detect exoplanet Qatar-1b",
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
        "The Google effect is when we forget information that's easily accessible online. This is a short interactive demo I created for my Frontiers of Science (SCNC CC1000) project.",
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