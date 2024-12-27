import {
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  java,
  spring,
  angular,
  postgresql,
  company,
  developerbank,
  citronix,
  waitinglist,
  youcode,
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
    title: "Java Developer",
    icon: backend,
  },
  {
    title: "Spring Boot Developer",
    icon: creator,
  },
  {
    title: "Angular Developer",
    icon: web,
  },
  {
    title: "DevOps Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Git",
    icon: git,
  },
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
  }
];

const experiences = [
  {
    title: "Php Laravel Full Stack Developer Intern",
    company_name: "AjiCode à agadir",
    icon: company,
    iconBg: "#383E56",
    date: "May 2024 - July 2024",
    points: [
      "Development of an online product delivery management system",
      "Created a system to manage delivery requests, assign tasks to agents and track delivery status",
      "Implementing responsive design and ensuring cross-browser compatibility",
      "Technologies used: React.js, Laravel, PHP Filament, PostgreSQL, Docker",
    ],
  },
  {
    title: "Full Stack Java Developer",
    company_name: "YouCode Safi (UM6P Simplon)",
    icon: youcode,
    iconBg: "#E6DEDD",
    date: "2023 - 2025 (In progress)",
    points: [
      "Web and mobile development training with focus on Java and Angular",
      "Developing and maintaining web applications using Java, Spring Boot, and Angular",
      "Working with databases including PostgreSQL, MySQL, and MongoDB",
      "Participating in code reviews and providing constructive feedback to other developers",
      "Learning and implementing DevOps practices with tools like Docker and Kubernetes",
    ],
  }
];

const projects = [
  {
    name: "DeveloperBank_Credit",
    description: "A comprehensive system for managing delivery requests, assigning tasks to agents and tracking delivery status. Built with modern technologies and best practices in software development.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "spring-boot",
        color: "pink-text-gradient",
      },
    ],
    image: developerbank,
    source_code_link: "https://github.com/LoussalMohammed/DeveloperBank_Credit",
  },
  {
    name: "Citronix_Farm",
    description: "An evolving Java application for managing agricultural operations, with a significant contribution towards implementing test suites and functional modules to ensure system quality.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "spring-boot",
        color: "green-text-gradient",
      },
      {
        name: "hibernate",
        color: "pink-text-gradient",
      },
    ],
    image: citronix,
    source_code_link: "https://github.com/LoussalMohammed/CITRONIX_LOUSSALMOHAMMED",
  },
  {
    name: "Waiting_List",
    description: "A robust and flexible Java library for managing waiting lists and priority queues across various commercial contexts. Implements efficient queue management algorithms.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "spring-boot",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: waitinglist,
    source_code_link: "https://github.com/LoussalMohammed/WRM_WAITINGLIST_LOUSSALMOHAMMED",
  },
];

export { services, technologies, experiences, projects };
