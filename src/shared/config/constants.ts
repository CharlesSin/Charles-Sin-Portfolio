import classNames from "classnames";
import { ProjectTypes } from "./types";

// whenever wee need to change default className value we will use this
export const cx = classNames;

// nav data
export const navData = ["关于我", "经验", "作品", "联系"];

// project data
export const projects: ProjectTypes[] = [
  {
    title: "个人作品集网站",
    description: "个人网站 v2 我个人网站的第二次迭代。 有意识地设计和开发以避免个人网站 v1 遇到的问题, 我的个人网站的第二次迭代。 我还添加了博客部分",
    tech: ["Next js 13", "Tailwind CSS", "Express js", "MongoDB"],
    code: "https://github.com/CharlesSin/Charles-Sin-Portfolio/tree/zh-CN",
    live: "https://chaersi.vercel.app/",
    thumnail: "portfolio-v2.jpg",
    featured: true,
  },
  {
    title: "前端修練精神時光屋 - 第一周活动",
    description: "通过纯HTML、CSS、JavaScript实现视差滚动交互网站, 通过鼠标滚动带来特殊的视觉体验。",
    tech: ["ScrollTrigger", "CSS Animations", "Font Awesome"],
    code: "https://github.com/CharlesSin/2022-THE-F2E-WeekOne",
    live: "https://2022-the-f2e.netlify.app",
    thumnail: "thef2e.jpg",
    featured: true,
  },
  {
    title: "前端修練精神時光屋 - 第二周活动",
    description: "通过纯 HTML、CSS 和 JavaScript 上传和签署 PDF 文件",
    tech: ["File Uploader - Dropzone", "Feather Icon", "Canvas", "PDF.js"],
    code: "https://github.com/CharlesSin/2022-THE-F2E-WeekTwo",
    live: "https://2022-the-f2e-week2.netlify.app/",
    thumnail: "thef2e-week2.jpg",
    featured: true,
  },
  {
    title: "前端修練精神時光屋 - 第三周活动",
    description: "通过纯 HTML、CSS、JavaScript 和 Jquery UI 实现 Scrum 新手村",
    tech: ["SCSS", "Jquery UI", "Droppable", "Draggable"],
    code: "https://github.com/CharlesSin/2022-THE-F2E-WeekThree",
    live: "https://2022-the-f2e-week3.netlify.app/",
    thumnail: "thef2e-week3.jpg",
    featured: true,
  },
  {
    title: "运输 SPA 网站",
    description: "这个项目是一个使用 Nextjs 框架是做的运输网站",
    code: "https://github.com/CharlesSin/Transportation-Template",
    tech: ["Next js", "Node js"],
    live: "https://transportation-spa-project.vercel.app/",
    thumnail: "transportation.jpg",
    featured: false,
  },
  {
    title: "台湾原住民庆典行程及文化介绍",
    description: "列出台湾原住民的庆祝活动时间表和各部落的文化",
    tech: ["React js", "Redux"],
    code: "https://github.com/CharlesSin/Web-Course-Project",
    live: "https://indigenous-people-info.vercel.app/",
    thumnail: "indigenous-people.jpg",
    featured: false,
  },
  {
    title: "前端看板",
    description: "使用纯 HTML、CSS、Javascript 实现前端任务看板",
    code: "https://github.com/CharlesSin/Frontend-Kanban",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "DnD", "Google Login", "Firebase Auth", "Firebase Firestore"],
    live: "https://charles-kanban.netlify.app/",
    thumnail: "frontend-kanban.jpg",
    featured: false,
  },
  {
    title: "个人 UI 库",
    description: "前端 UI 集合",
    code: "https://github.com/CharlesSin/Eugene-UI-Webpage",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://eugene-ui.vercel.app/",
    thumnail: "ui-collection.jpg",
    featured: false,
  },
  {
    title: "个人仪表板",
    description: "使用 React 技术实作纯前端仪表板",
    code: "https://github.com/CharlesSin/Fake-Dashboard",
    tech: ["React", "Fullcalendar", "Mui", "Nivo", "Reduxjs", "Chart", "Formik", "Reduxjs", "React-pro-sidebar", "Yup"],
    live: "https://eugene-ui.vercel.app/",
    thumnail: "eugene-dashboard.jpg",
    featured: false,
  },
  {
    title: "技术比价",
    description: "记录现代最新的框架、技术和技能",
    code: "https://github.com/CharlesSin/Notes",
    tech: ["Nextjs 12", "Cheerio", "MongoDB"],
    live: "https://charles-favorite.vercel.app/",
    thumnail: "tech-note.jpg",
    featured: false,
  },
];
