import classNames from "classnames";
import { ProjectTypes } from "./types";

// whenever wee need to change default className value we will use this
export const cx = classNames;

// nav data
export const navData = ["About", "Experience", "Works", "Contact"];

// project data
export const projects: ProjectTypes[] = [
  {
    title: "Finance Dashboard",
    description: "Build a MERN Finance Dashboard App that has Machine Learning Predictions",
    tech: ["MongoDB", "Expressjs", "React", "Nodejs", "Typescript"],
    code: "https://github.com/CharlesSin/Finance-App",
    live: "https://charles-finance-app.netlify.app/",
    thumnail: "finance-dashboard.jpg",
    featured: true,
  },
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
    title: "The F2E 4th 1st week Event",
    description: "Implement parallax scrolling interactive website through pure HTML, CSS, JavaScript, and bring a special visual experience through mouse scrolling.",
    tech: ["ScrollTrigger", "CSS Animations", "Font Awesome"],
    code: "https://github.com/CharlesSin/2022-THE-F2E-WeekOne",
    live: "https://2022-the-f2e.netlify.app",
    thumnail: "thef2e.jpg",
    featured: false,
  },
  {
    title: "The F2E 4th 2nd week Event",
    description: "Upload and sign PDF files through pure HTML, CSS, and JavaScript",
    tech: ["File Uploader - Dropzone", "Feather Icon", "Canvas", "PDF.js"],
    code: "https://github.com/CharlesSin/2022-THE-F2E-WeekTwo",
    live: "https://2022-the-f2e-week2.netlify.app",
    thumnail: "thef2e-week2.jpg",
    featured: false,
  },
  {
    title: "The F2E 4th 3rd week Event",
    description: "Implement Scrum Novice Village through pure HTML, CSS, JavaScript and Jquery UI",
    tech: ["SCSS", "Jquery UI", "Droppable", "Draggable"],
    code: "https://github.com/CharlesSin/2022-THE-F2E-WeekThree",
    live: "https://2022-the-f2e-week3.netlify.app/",
    thumnail: "thef2e-week3.jpg",
    featured: false,
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
    thumnail: "ui-collection.jpg",
    featured: false,
  },
  {
    title: "Eugene Dashboard",
    description: "Dashboard Template",
    code: "https://github.com/CharlesSin/Fake-Dashboard",
    tech: ["React", "Fullcalendar", "Mui", "Nivo", "Reduxjs", "Chart", "Formik", "Reduxjs", "React-pro-sidebar", "Yup"],
    live: "https://eugene-ui.vercel.app/",
    thumnail: "eugene-dashboard.jpg",
    featured: false,
  },
  {
    title: "Tech Notes",
    description: "Memorize alot tech post, roadmap and skill.",
    code: "https://github.com/CharlesSin/Notes",
    tech: ["Nextjs 12", "Cheerio", "MongoDB"],
    live: "https://charles-favorite.vercel.app/",
    thumnail: "tech-note.jpg",
    featured: false,
  },
];
