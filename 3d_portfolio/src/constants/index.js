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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  mnetlogo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Wordpress Developer",
    icon: mobile,
  },

  {
    title: "Web 3 Enthusiast",
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
    title: "UI Developer L1",
    company_name: "Media.net",
    icon: mnetlogo,
    iconBg: "#383E56",
    date: "January 2023 - November 2023",
    points: [
      "Collaborated with clients to define website requirements, boosting project alignment by 15% and revenue by 10%.",
      "Engineered website architecture, achieving a 20% performance increase and a subsequent 12% rise in user engagement.",
      "Organized information and designed the website for a 25% boost in engagement, translating to a 15% increase in overall revenue.",
      "Modified website code, contributing to a 25% improvement in functionality and user experience",
      "Conducted tests, reducing post-launch issues by 15% and improving customer satisfaction, resulting in a 10% increase in revenue.",
      "Contributed to the Front End Search Engine Optimization(SEO)",
    ],
  },
  {
    title: "Associate UI Developer",
    company_name: "Media.net(Forbes)",
    icon: mnetlogo,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Worked on various applications under FORBES, primarily on Advisor multiple web applications. ",
      "Collaborated with back-end developers and web designers to improve web page usability.",
      "Enhanced web app performance by 25% through speed optimization and mobile responsiveness, leading to improved visibility and user experience.",
      "Tested, debugged and shipped 10s of 100s of lines of code to production.",
      "Applied Agile planning principles to deliver tailored solutions meeting customer requirements",
      "Utilized HTML, CSS and Javascript to create 50+ responsive landing pages for both company and client.",
      "Worked in an agile environment with daily stand-ups, weekly deployment, kept track of user stories/bugs in GitLab projects and contributed to sprint planning and sprint retrospectives per week",
    ],
  },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Responsive Dashboard",
    description:
      "A responsive dashboard using React and Tailwind, meticulously following the design specifications provided by the client in Figma. A mobile first approach was used for better user experience ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link:
      "https://github.com/janak1998/GitHub/tree/master/Upwork%20projects/demo-page",
  },
  {
    name: "Social Media",
    description:
      "Web application facilitates users to view existing posts and add new ones. The primary focus of this project was to implement CRUD operations in React, utilizing an API for data management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "fetchapi",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://github.com/janak1998/React-Projects/tree/main/social-media",
  },
  {
    name: "Portfolio",
    description:
      "Web application features a portfolio displaying stunning 3D animations. Leveraging Swiper, it incorporates touch animations with hardware-accelerated transitions for a seamless user experience.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://github.com/janak1998/Portfolia-2024/tree/main/portfolio-2024",
  },
];

export { services, technologies, experiences, testimonials, projects };
