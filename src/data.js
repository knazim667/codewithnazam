import portfolio from "./assets/appModern/code.png";
import man from "./assets/images/banner-image/man.png";
import code from "./assets/images/banner-image/code.png";
import carpet from "./assets/images/banner-image/carpet.png";
import bin from "./assets/images/banner-image/bin.png";
import book from "./assets/images/banner-image/book.png";
import desktop from "./assets/images/banner-image/dekstop.png";
import dot from "./assets/images/banner-image/dot.png";
import flowertop from "./assets/images/banner-image/flower-top-big.png";
import flower from "./assets/images/banner-image/flower-top.png";
import headphone from "./assets/images/banner-image/headphone.png";
import keyboard from "./assets/images/banner-image/keyboard.png";
import mainpic from "./assets/images/banner-image/main-pic.png";
import pen from "./assets/images/banner-image/pen.png";
import table from "./assets/images/banner-image/table.png";
import teacup from "./assets/images/banner-image/tea-cup.png";

export const mainBannerImages = [
  {
    path: man,
    alt: "man",
  },
  {
    path: code,
    alt: "code",
  },
  {
    path: carpet,
    alt: "carpet",
  },
  {
    path: bin,
    alt: "bin",
  },
  {
    path: book,
    alt: "book",
  },
  {
    path: desktop,
    alt: "desktop",
  },
  {
    path: dot,
    alt: "dot",
  },
  {
    path: flowertop,
    alt: "flowerTop",
  },
  {
    path: flower,
    alt: "flower",
  },
  {
    path: keyboard,
    alt: "keyboard",
  },
  {
    path: pen,
    alt: "pen",
  },
  {
    path: table,
    alt: "table",
  },
  {
    path: teacup,
    alt: "teacup",
  },
  {
    path: headphone,
    alt: "headphone",
  },
  {
    path: mainpic,
    alt: "mainpic",
  },
];

export const MENU_ITEMS = [
  {
    label: "ME",
    path: "#banner_section",
    offset: 0,
  },
  {
    label: "about me",
    path: "#aboutme_section",
    offset: 0,
  },
  {
    label: "PROJECTS",
    path: "#project_section",
    offset: 0,
  },
  {
    label: "Blogs",
    path: "#blogs",
    offset: 0,
  },
  {
    label: "LET'S TALK",
    path: "/contact",
    offset: 0,
  },
];
export const FOOTER_ITEMS = [
  {
    label: "about me",
    path: "#aboutme_section",
    offset: 0,
  },
  {
    label: "BLOG",
    path: "/blogs",
    offset: 0,
  },
  {
    label: "GALLERY",
    path: "#portfolio",
    offset: 0,
  },
  {
    label: "contact me",
    path: "#contact_me",
    offset: 0,
  },
];
export const PERSONAL_INFO = [
  {
    label: "first name",
    content: "muhammad",
  },
  {
    label: "last name",
    content: "nazam",
  },
  {
    label: "age",
    content: 31,
  },
  {
    label: "nationality",
    content: "usa",
  },
  {
    label: "freelance",
    content: "available",
  },
];
export const PERSONAL_ADD = [
  {
    label: "address",
    content: "south carolina",
  },
  {
    label: "phone",
    content: "+15046158098",
  },
  {
    label: "email",
    content: "knazim667@gmail.com",
  },
  {
    label: "skype",
    content: "knazim667",
  },
  {
    label: "languages",
    content: "english, urdu",
  },
];

export const ABOUT_ME = [
  {
    count: "7",
    label: "years job",
    span: "experience",
  },
  {
    count: "50",
    label: "completed",
    span: "projects",
  },
  {
    count: "10",
    label: "awards",
    span: "won",
  },
  {
    count: "41",
    label: "happy",
    span: "customers",
  },
];

export const SKILLS = [
  {
    label: "html",
    percentage: "95",
  },
  {
    label: "css",
    percentage: "95",
  },
  {
    label: "javascript",
    percentage: "85",
  },
  {
    label: "jquery",
    percentage: "65",
  },
  {
    label: "node",
    percentage: "75",
  },
  {
    label: "mongodb",
    percentage: "65",
  },
  {
    label: "react",
    percentage: "85",
  },
  {
    label: "redux",
    percentage: "75",
  },
];

export const EXPERIENCE = [
  {
    id: 1,
    date: "2019 - Present",
    role: "technolodgy lead",
    company: "infosys ltd",
    description:
      "Movement Mortgage is a well known and renowned name Mortgage Domain. I am working on a project with infosys for its annuities application ‘​Email Templates and Websites​’. ",
  },
  {
    id: 2,
    date: "2018 - 2019",
    role: "web developer",
    company: "Manshaaz Technolodgy",
    description:
      "Northwestern Mutual is a well known and renowned name Insurance domain. I worked for a 1 year project with NM for its annuities application ‘WorkList’.",
  },
  {
    id: 3,
    date: "2016 - 2018",
    role: "UI/UX developer",
    company: "Kohl's",
    description:
      "Kohl’s is a largest store for a Fashion Clothing, Home, Kitchen & more. I worked on designing a website for the Kohl’s by using HTML5, CSS3, XML, JavaScript and Ajax, JQuery, Angular.JS, Node.JS, Bootstrap and Adobe Photoshop",
  },
];

export const EDUCATION = [
  {
    id: 1,
    date: "2017",
    degree: "Full stack Certification",
    college: "Ucla",
    description:
      "The course material is very interesting and the way the class is structured is pretty good, it takes your hand with baby steps even if you have no background about coding or engineering.",
  },
  {
    id: 2,
    date: "2013 - 2015",
    degree: "becholer degree",
    college: "University of Punjab",
    description:
      "A Bachelor of Commerce, abbreviated as B.Com is an undergraduate degree in commerce and related subjects.",
  },
  {
    id: 3,
    date: "2011 - 2013",
    degree: "Associates degree",
    college: "Noble College",
    description:
      "Intermediate in Commerce which is also known as I.COM or D.COM is the first step in Commerce, Management and Finance Fields. Although the names I.COM and D.COM imply that these are purely commerce, accounting and finance programs,",
  },
];

export const PORTFOLIO = [
  {
    id: 1,
    img: portfolio,
    path: "/name",
    linkText: "view more",
  },
  {
    id: 2,
    img: portfolio,
    path: "/name",
    linkText: "view more",
  },
  {
    id: 3,
    img: portfolio,
    path: "/name",
    linkText: "view more",
  },
  {
    id: 4,
    img: portfolio,
    path: "/name",
    linkText: "view more",
  },
  {
    id: 5,
    img: portfolio,
    path: "/name",
    linkText: "view more",
  },
  {
    id: 6,
    img: portfolio,
    path: "/name",
    linkText: "view more",
  },
  {
    id: 7,
    img: portfolio,
    path: "/name",
    linkText: "view more",
  },
  {
    id: 8,
    img: portfolio,
    path: "/name",
    linkText: "view more",
  },
  {
    id: 9,
    img: portfolio,
    path: "/name",
    linkText: "view more",
  },
];
