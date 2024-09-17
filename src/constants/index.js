import todoApp from '../assets/projects/todo-project.jpg';
import weatherApp from '../assets/projects/weather-project.jpg';
import movieApp from '../assets/projects/movie-project.jpg';


export const HERO_CONTENT = `I'm eager to join a software development team where I can apply my programming skills, tackle new challenges, and grow in a supportive environment. With experience in Web Development, I've honed my problem-solving abilities and collaboration skills through projects and internships. I'm enthusiastic about contributing to innovation and the success of the company.`;

export const ABOUT_TEXT = `I am a dedicated and versatile front end developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including Javascript, API, and CMD. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Aug 2022 - Feb 2023",
    role: "Junior Digital Specialist",
    company: "DataWords",
    description: `Our task is to help our client to Create, Replace, Update, and Delete the content of the website using CMS (Content Management System).`,
    technologies: ["HTML", "CSS", "Javascript", "CMS"],
  },
  {
    year: "Apr 2021 - July 2021",
    role: "Frontend Developer Intern",
    company: "Bridge 360",
    description: `Building an application to help travelers to their destinations, I learn in this project is Angular, Ionic Framework, and Typescript`,
    technologies: ["HTML", "CSS", "Javascript", "Angular", "Typescrip"],
  },
];

export const PROJECTS = [
  {
    title: "Todo List App",
    image: todoApp,
    link: "https://todo-app-ebon-ten.vercel.app/",
    description:
      "A fully functional Todo List App using react, you can create a todo, update, replace, and delete in this app.",
    technologies: ["HTML", "CSS", "React", "React Hook", "Tailwind"],
  },
  {
    title: "Weather App",
    image: weatherApp,
    link: "https://weather-app-indol-gamma.vercel.app/",
    description:
      "Weather App is the application of science and technology to predict the conditions of the atmosphere for a given location and time.",
    technologies: ["HTML", "CSS", "React", "Fetch API", "Tailwind"],
  },
  {
    title: "Movie App",
    image: movieApp,
    link: "https://movie-app-kappa-ten-81.vercel.app/",
    description:
      "In this App, we have made a movie app in React which contains 4 pages made from different APIs but have a common UI. The four pages that our app has are the Trending Page, the Movies Page, the TV Series Page, and the Custom Search Page.",
    technologies: ["HTML", "CSS", "Bootstrap", "React", "React Hook", "Custom Hook", "Fetch API"],
  },
];

export const CONTACT = {
  address: "Biñan Laguna, Philippines ",
  phoneNo: "+6309565705537 ",
  email: "emmanueldilag@gmail.com",
};