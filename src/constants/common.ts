import CodiumImage from "../assets/codium.png";
import ShopboxoImage from "../assets/shopboxo.png";

export const SOCIAL_LINKS = {
  github: "https://github.com/akmatoff",
  likedin: "https://www.linkedin.com/in/akmatoff/",
  telegram: "https://t.me/azimoffs",
  email: "mailto:azim.akmatov1@gmail.com",
};

export interface IWorkExperience {
  period: string;
  title: string;
  company: string;
  companyLink?: string;
}

export const WORK_EXPERIENCE: IWorkExperience[] = [
  {
    period: "February 2022 - May 2022",
    title: "Front-end developer intern",
    company: "Appboxo",
    companyLink: "https://appboxo.com",
  },
  {
    period: "June 2022 - February 2024",
    title: "Junior Front-end developer",
    company: "Appboxo",
    companyLink: "https://appboxo.com",
  },
];

export interface IProject {
  title: string;
  description: string;
  link: string;
  image: string;
  isFeatured: boolean;
  stack: IStack[];
}

export interface IStack {
  title: string;
  icon?: string;
}

export const PROJECTS: IProject[] = [
  {
    title: "Codium KG",
    description: "Education platform",
    link: "https://codiumdev.com",
    image: CodiumImage,
    stack: [
      {
        title: "Next.js",
      },
      {
        title: "React",
      },
    ],
    isFeatured: false,
  },
  {
    title: "Shopboxo",
    description: "E-commerce platform",
    link: "https://shopboxo.io",
    image: ShopboxoImage,
    stack: [
      {
        title: "Next.js",
      },
      {
        title: "React",
      },
    ],
    isFeatured: true,
  },
];
