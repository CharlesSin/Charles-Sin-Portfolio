import classNames from "classnames";
import { ProjectTypes } from "./types";

// whenever wee need to change default className value we will use this
export const cx = classNames;

// nav data
export const navData = ["About", "Experience", "Works", "Contact"];

// project data
export const projects: ProjectTypes[] = [
  {
    title: "Portfolio website",
    description:
      "Personal Website V2 Second iteration of my personal website. Designed and developed with a conscious effort to avoid Personal Website V1 Second iteration of my personal website. and Also I add Blog section",
    tech: ["Next js 13", "Tailwind CSS", "Express js", "MongoDB"],
    code: "",
    live: "",
    thumnail: "portfolio-v2.jpg",
    featured: true,
  },

  {
    title: "The F2E 4th 視差滾動活動網站",
    description: "Implement parallax scrolling interactive website through pure HTML, CSS, JavaScript, and bring a special visual experience through mouse scrolling.",
    tech: ["ScrollTrigger", "CSS Animations", "Font Awesome"],
    live: "https://2022-the-f2e.netlify.app",
    thumnail: "thef2e.jpg",
    featured: true,
  },

  {
    title: "Transportation SPA Website",
    description: "This project is a transportation spa website. ",
    tech: ["Next js", "Node js"],
    live: "https://transportation-spa-project.vercel.app/",
    thumnail: "transportation.jpg",
  },

  {
    title: "Taiwan Aboriginal Celebration Schedule and Cultural Introduction",
    description: "List out the celebration schedule of the aborigines in Taiwan and the culture of each tribe",
    tech: ["React js", "Redux"],
    code: "",
    live: "https://indigenous-people-info.vercel.app/",
    thumnail: "indigenous-people.jpg",
  },

  {
    title: "Frontend Kanban",
    description: "Using Pure HTML, CSS, Javascript implementation frontend mission kanban",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "DnD", "Google Login", "Firebase Auth", "Firebase Firestore"],
    live: "https://charles-kanban.netlify.app/",
    thumnail: "frontend-kanban.jpg",
  },
];
