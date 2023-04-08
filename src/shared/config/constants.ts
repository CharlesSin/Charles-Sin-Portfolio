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
    code: "https://github.com/CharlesSin/Charles-Sin-Portfolio",
    live: "https://charles-sin.vercel.app/",
    thumnail: "portfolio-v2.jpg",
    featured: true,
  },
  {
    title: "The F2E 4th 視差滾動活動網站",
    description: "Implement parallax scrolling interactive website through pure HTML, CSS, JavaScript, and bring a special visual experience through mouse scrolling.",
    tech: ["ScrollTrigger", "CSS Animations", "Font Awesome"],
    code: "https://github.com/CharlesSin/2022-THE-F2E-WeekOne",
    live: "https://2022-the-f2e.netlify.app",
    thumnail: "thef2e.jpg",
    featured: true,
  },
  {
    title: "Transportation SPA Website",
    description: "This project is a transportation spa website. ",
    code: "https://github.com/CharlesSin/Transportation-Template",
    tech: ["Next js", "Node js"],
    live: "https://transportation-spa-project.vercel.app/",
    thumnail: "transportation.jpg",
    featured: false,
  },
  {
    title: "Taiwan Aboriginal Celebration Schedule and Cultural Introduction",
    description: "List out the celebration schedule of the aborigines in Taiwan and the culture of each tribe",
    tech: ["React js", "Redux"],
    code: "https://github.com/CharlesSin/Web-Course-Project",
    live: "https://indigenous-people-info.vercel.app/",
    thumnail: "indigenous-people.jpg",
    featured: false,
  },
  {
    title: "Frontend Kanban",
    description: "Using Pure HTML, CSS, Javascript implementation frontend mission kanban",
    code: "https://github.com/CharlesSin/Frontend-Kanban",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "DnD", "Google Login", "Firebase Auth", "Firebase Firestore"],
    live: "https://charles-kanban.netlify.app/",
    thumnail: "frontend-kanban.jpg",
    featured: false,
  },
  {
    title: "Eugene UI Webpage",
    description: "Frontend UI Collection",
    code: "https://github.com/CharlesSin/Eugene-UI-Webpage",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://eugene-ui.vercel.app/",
    thumnail: "https://github.com/CharlesSin/Eugene-UI-Webpage/raw/master/public/images/cover.jpg",
    featured: false,
  },
];
