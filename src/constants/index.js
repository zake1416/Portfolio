// import {
//   mobile,
//   backend,
//   creator,
//   web,
//   javascript,
//   typescript,
//   html,
//   css,
//   reactjs,
//   redux,
//   tailwind,
//   nodejs,
//   mongodb,
//   git,
//   figma,
//   docker,
//   meta,
//   accenture,
//   tesla,
//   shopify,
//   carrent,
//   jobit,
//   tripguide,
//   threejs,
// } from "../assets";

// export const navLinks = [
//   {
//     id: "about",
//     title: "About",
//   },
//   {
//     id: "work",
//     title: "Work",
//   },
//   {
//     id: "contact",
//     title: "Contact",
//   },

// ];

// const services = [
//   {
//     title: "Software Developer",
//     icon: web,
//   },
//   {
//     title: "Machine Learning",
//     icon: mobile,
//   },
//   {
//     title: "Visionary",
//     icon: creator,
//   },
//   {
//     title: "Leader",
//     icon: backend,
//   },
  
// ];

// const technologies = [
//   {
//     name: "HTML 5",
//     icon: html,
//   },
//   {
//     name: "CSS 3",
//     icon: css,
//   },
//   {
//     name: "JavaScript",
//     icon: javascript,
//   },
//   {
//     name: "TypeScript",
//     icon: typescript,
//   },
//   {
//     name: "React JS",
//     icon: reactjs,
//   },
//   {
//     name: "Redux Toolkit",
//     icon: redux,
//   },
//   {
//     name: "Tailwind CSS",
//     icon: tailwind,
//   },
//   {
//     name: "Node JS",
//     icon: nodejs,
//   },
//   {
//     name: "MongoDB",
//     icon: mongodb,
//   },
//   {
//     name: "Three JS",
//     icon: threejs,
//   },
//   {
//     name: "git",
//     icon: git,
//   },
//   {
//     name: "figma",
//     icon: figma,
//   },
//   {
//     name: "docker",
//     icon: docker,
//   },
// ];

// src/constants/index.js
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
  accenture,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  nifi,
  numpy,
  python,
  grafana,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
    path: "/",
  },
  {
    id: "about",
    title: "About",
    path: "/about",
  },
  {
    id: "experience",
    title: "Experience",
    path: "/experience",
  },
  {
    id: "projects",
    title: "Projects",
    path: "/projects",
  },
  {
    id: "blog",
    title: "Blog",
    path: "/blog",
  },
  {
    id: "contact",
    title: "Contact",
    path: "/contact",
  },
];

const services = [
  {
    title: "LLM Engineer",
    icon: web,
  },
  {
    title: "Agentic AI Systems",
    icon: mobile,
  },
  {
    title: "RAG + Data Pipelines",
    icon: creator,
  },
  {
    title: "MLOps + Reliability",
    icon: backend,
  },
];

// Re-ordered to highlight AI/LLM stack
const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "NumPy",
    icon: numpy,
  },
  {
    name: "PyTorch",
    icon: threejs, // if you prefer, keep tensorflow icon here instead
  },
  {
    name: "JavaScript",
    icon: javascript,
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
    name: "Vector DBs",
    icon: mongodb,
  },
  {
    name: "Airflow",
    icon: nifi,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Observability",
    icon: grafana,
  },
  {
    name: "Docker",
    icon: docker,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Figma",
    icon: figma,
  },
];


const experiences = [
  {
    title: "Software Engineer, AI Delivery",
    company_name: "Accenture (Credit Suisse)",
    icon: accenture,
    iconBg: "#ffffff",
    date: "Aug 2021 - Aug 2023",
    points: [
      "Built CI/CD pipelines with automated regression tests and UAT gates to ship releases with zero critical defects.",
      "Developed a document generation service that reduced manual reporting time from days to minutes.",
      "Implemented Grafana-based monitoring to cut incident response time and improve system observability.",
      "Delivered data migrations and backend upgrades with strict compliance and audit readiness.",
    ],
  },
  {
    title: "GenAI Intern",
    company_name: "RoundTechSquare",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2024 - Aug 2024",
    points: [
      "Built an LLM-powered career recommender with prompt iteration and evaluation loops.",
      "Shipped a voice-enabled task assistant using speech APIs and FastAPI services.",
      "Ran user tests and refined prompts to improve clarity and response quality.",
    ],
  },
  {
    title: "Founder, Agentic AI Platform",
    company_name: "Stealth Startup",
    icon: shopify,
    iconBg: "#ffffff",
    date: "2024 - Present",
    points: [
      "Designed multi-agent workflows with LangGraph/CrewAI and tool calling.",
      "Built RAG pipelines with vector search and long-term memory for grounded responses.",
      "Deployed containerized services with monitoring, trace IDs, and fallback logic.",
    ],
  },
  {
    title: "Applied AI Research Intern",
    company_name: "Bhabha Atomic Research Centre (BARC)",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Nov 2019 - Jan 2020",
    points: [
      "Applied ML to safety pattern analysis and anomaly detection prototypes.",
      "Built data visualizations to improve clarity for mission-critical decisions.",
      "Collaborated with researchers on validation and evaluation routines.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Abhishek blends strong engineering discipline with practical AI insight. He delivers systems that are reliable, measurable, and ready for production.",
    name: "Dr. Nadir Charnia",
    designation: "Professor",
    company: "Mumbai University",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "He brings clarity to complex AI problems and consistently ships with quality and observability in mind.",
    name: "Amrita Prasad",
    designation: "Senior Software Analyst",
    company: "Accenture",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    testimonial:
      "Abhishek is thoughtful, fast, and impact-oriented. His agentic AI work is both ambitious and grounded.",
    name: "Aloke Tewary",
    designation: "Senior Software Engineer",
    company: "Here Technologies",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "OptiPulse",
    description:
      "Multi-agent LLM system for hospital inventory coordination with forecasting, negotiation, and audit-friendly decisions.",
    tags: [
      { name: "Agents", color: "blue-text-gradient" },
      { name: "LLMs", color: "green-text-gradient" },
      { name: "FastAPI", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Agent Orchestration Platform",
    description:
      "Hybrid LangGraph + CrewAI orchestration with RAG, tool calling, and observability for enterprise workflows.",
    tags: [
      { name: "RAG", color: "blue-text-gradient" },
      { name: "MLOps", color: "green-text-gradient" },
      { name: "Tracing", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Voice + GenAI Assistant",
    description:
      "LLM-powered career recommender and voice task assistant with structured prompts and evaluation loops.",
    tags: [
      { name: "Prompting", color: "blue-text-gradient" },
      { name: "Speech", color: "green-text-gradient" },
      { name: "NLP", color: "pink-text-gradient" },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
