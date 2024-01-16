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
