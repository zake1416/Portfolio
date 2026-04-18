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
  tailwind,
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
  { id: "home", title: "Home", path: "/" },
  { id: "about", title: "About", path: "/about" },
  { id: "experience", title: "Experience", path: "/experience" },
  { id: "projects", title: "Projects", path: "/projects" },
  { id: "blog", title: "Blog", path: "/blog" },
  { id: "contact", title: "Contact", path: "/contact" },
];

const services = [
  {
    title: "LLM Product Systems",
    icon: web,
  },
  {
    title: "Agent Orchestration",
    icon: mobile,
  },
  {
    title: "RAG Infrastructure",
    icon: creator,
  },
  {
    title: "Evaluation + Reliability",
    icon: backend,
  },
];

const technologies = [
  { name: "Python", icon: python },
  { name: "NumPy", icon: numpy },
  { name: "PyTorch", icon: threejs },
  { name: "React JS", icon: reactjs },
  { name: "TypeScript", icon: typescript },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Vector Stores", icon: mongodb },
  { name: "Workflow DAGs", icon: nifi },
  { name: "Observability", icon: grafana },
  { name: "Docker", icon: docker },
  { name: "Git", icon: git },
  { name: "JavaScript", icon: javascript },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "Figma", icon: figma },
];

const experiences = [
  {
    title: "Software Engineer, AI Delivery",
    company_name: "Accenture (Credit Suisse)",
    icon: accenture,
    iconBg: "#ffffff",
    date: "Aug 2021 - Aug 2023",
    points: [
      "Built CI/CD release flows with regression and UAT gates so AI-adjacent platform changes shipped with zero critical defects.",
      "Developed automated document-generation services that turned multi-day analyst workflows into repeatable minutes-long runs.",
      "Added Grafana dashboards and alerting paths that made failure states visible and shortened response time in production.",
      "Handled backend migrations in regulated environments with compliance controls, traceability, and rollout discipline.",
    ],
  },
  {
    title: "GenAI Intern",
    company_name: "RoundTechSquare",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2024 - Aug 2024",
    points: [
      "Built an LLM-powered career recommender with prompt iteration, output review loops, and response-quality improvements.",
      "Shipped a voice-enabled task assistant using FastAPI services, speech APIs, and structured interaction flows.",
      "Ran user tests on model behavior and refined prompts for better clarity, task completion, and trust.",
    ],
  },
  {
    title: "Founder, Agentic AI Platform",
    company_name: "Stealth Startup",
    icon: shopify,
    iconBg: "#ffffff",
    date: "2024 - Present",
    points: [
      "Designed multi-agent workflows with LangGraph and CrewAI for planning, tool use, and stateful execution.",
      "Built retrieval systems with vector search, memory layers, and grounded response paths for enterprise-style use cases.",
      "Deployed containerized services with monitoring, trace IDs, and fallback logic to make AI behavior observable in production.",
    ],
  },
  {
    title: "Applied AI Research Intern",
    company_name: "Bhabha Atomic Research Centre (BARC)",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Nov 2019 - Jan 2020",
    points: [
      "Applied ML to safety pattern analysis and anomaly detection prototypes for mission-sensitive workflows.",
      "Built visualizations that helped technical stakeholders interpret model signals and compare scenarios faster.",
      "Worked with researchers on validation routines and exploratory experiments around high-stakes data.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Abhishek brings rare balance: strong AI intuition, disciplined engineering, and a real instinct for making systems production-ready.",
    name: "Dr. Nadir Charnia",
    designation: "Professor",
    company: "Mumbai University",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "He does not treat GenAI like a demo problem. He thinks in terms of monitoring, quality, and how a system behaves after launch.",
    name: "Amrita Prasad",
    designation: "Senior Software Analyst",
    company: "Accenture",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    testimonial:
      "Abhishek moves comfortably from product idea to agent workflow to deployment detail. That full-stack AI mindset is hard to find.",
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
      "Multi-agent hospital inventory system coordinating demand forecasting, negotiation, and auditable recommendations across constrained supply flows.",
    tags: [
      { name: "Agents", color: "blue-text-gradient" },
      { name: "Forecasting", color: "green-text-gradient" },
      { name: "FastAPI", color: "pink-text-gradient" },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Agent Orchestration Platform",
    description:
      "LangGraph plus CrewAI orchestration stack with retrieval, tool calling, telemetry, and state handling for enterprise workflows.",
    tags: [
      { name: "RAG", color: "blue-text-gradient" },
      { name: "Tracing", color: "green-text-gradient" },
      { name: "Eval", color: "pink-text-gradient" },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Voice + GenAI Assistant",
    description:
      "Voice-first assistant combining LLM prompting, task routing, and speech interfaces for practical day-to-day user workflows.",
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
