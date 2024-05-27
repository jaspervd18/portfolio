import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  sql,
  csharp,
  java,
  git,
  figma,
  stardew,
  klauwaerts,
  infosupport,
  hogent,
  github,
  linkedin,
  facebook,
  instagram,
  delaware,
  nationaleloterij,
} from "../assets";

import { Laptop2 } from "lucide-react";
import { Cog } from "lucide-react";
import { ServerCog } from "lucide-react";
import { TabletSmartphone } from "lucide-react";

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
    title: "Web Developer",
    icon: Laptop2,
  },
  {
    title: "Enterprise Developer",
    icon: Cog,
  },
  {
    title: "Backend Developer",
    icon: ServerCog,
  },
  {
    title: "Mobile Developer",
    icon: TabletSmartphone,
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
    name: "sql",
    icon: sql,
  },
  {
    name: "csharp",
    icon: csharp,
  },
  {
    name: "java",
    icon: java,
  },
];

const experiences = [
  {
    title: "Applied Computer Sciences",
    company_name: "HOGENT",
    icon: hogent,
    iconBg: "#FFF",
    date: "Feb 2020 - Present",
    points: [
      "Very solid and broad knowledge of various IT subjects.",
      "Building practical exercises since day one.",
      "Major in Mobile & Enterprise Development.",
    ],
  },
  {
    title: "Full-Stack Developer (student job)",
    company_name: "Info Support",
    icon: infosupport,
    iconBg: "#FFF",
    date: "Aug 2023",
    points: [
      "Developing full-stack web application with Next.js (frontend) and .NET Core (backend).",
      "Developed an application for efficient discovery of care providers through a relevance matching system.",
      "Implementing responsive design for an optimal user experience.",
      "Active participation in code reviews and process improvement.",
    ],
  },
  {
    title: "Internship",
    company_name: "delaware",
    icon: delaware,
    iconBg: "#FFF",
    date: "Feb 2024 - May 2024",
    points: [
      "Developing a full-stack web application with Blazor (frontend) and .NET Core (backend).",
      "Implementing gamification strategies for an extended user experience.",
      "Working as a team to deliver a high-quality product to the customer.",
    ],
  },
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
    name: "Nationale Loterij",
    description:
      "Platform that allows users to motivate the young adience of buying lottery tickets, while at the same time supporting a good cause of their choice.",
    tags: [
      {
        name: "vite.js",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nationaleloterij,
    live_demo_link: "https://nationale-loterij.vercel.app/",
    source_code_link: "https://github.com/jaspervd18/nationale_loterij",
  },
  {
    name: "Stardew Hub",
    description:
      "A twitter-like social media platform for Stardew Valley players, allowing them to share their progress, tips, and tricks with other players.",
    tags: [
      {
        name: "t3stack",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: stardew,
    live_demo_link: "https://social-media-app-eta-tawny.vercel.app/",
    source_code_link: "https://github.com/jaspervd18/social_media_app",
  },
  {
    name: "Sports club Manage Tool",
    description:
      "A tool that allows sports clubs to manage their member and lessons. It provides a calendar for the members to see when their lessons are.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "prisma",
        color: "pink-text-gradient",
      },
    ],
    image: klauwaerts,
    live_demo_link: "https://wiki-klauwaerts.vercel.app/",
  },
];

const contacts = [
  {
    name: "GitHub",
    icon: github,
    social_media_link: "https://github.com/jaspervd18",
  },
  {
    name: "LinkedIn",
    icon: linkedin,
    social_media_link: "https://www.linkedin.com/in/jaspervandyck/",
  },
  {
    name: "Facebook",
    icon: facebook,
    social_media_link: "https://www.facebook.com/jaspervd18/",
  },
  {
    name: "Instagram",
    icon: instagram,
    social_media_link: "https://www.instagram.com/jaspervd18/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  contacts,
};
