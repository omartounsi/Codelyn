export const lessons = [
  {
    id: 1,
    title: "HTML",
    description:
      "Learn HTML basics, general web structure, how different elements work.",
    progress: 0, // This will be overridden by real progress data
    icon: "IoCode",
    route: "/lessons/html",
  },
  {
    id: 2,
    title: "CSS",
    description: "Learn how to style your HTML index using CSS properties.",
    progress: 0, // This will be overridden by real progress data
    icon: "FaCss3Alt",
    route: "/lessons/css",
  },
  {
    id: 3,
    title: "JavaScript",
    description:
      "Master JavaScript programming from basics to advanced DOM manipulation. Build interactive web applications.",
    progress: 0, // This will be overridden by real progress data
    icon: "IoLogoJavascript",
    route: "/lessons/js",
  },
  {
    id: 4,
    title: "React",
    description:
      "Build dynamic user interfaces with React. Learn components, state management, and modern React patterns.",
    progress: 0,
    icon: "FaReact",
    route: "#",
    locked: true,
  },
  {
    id: 5,
    title: "Node.js",
    description:
      "Build server-side applications with Node.js. Learn APIs, databases, and backend development.",
    progress: 0,
    icon: "FaNodeJs",
    route: "#",
    locked: true,
  },
];

export const bonusLessons = [
  {
    id: 6,
    title: "CLI",
    description:
      "Learn how to use the command line to navigate your file system.",
    progress: 0,
    icon: "HiCommandLine",
    route: "/lessons/cli",
  },
  {
    id: 7,
    title: "Git",
    description: "Learn how to use Git for version control and collaboration.",
    progress: 0,
    icon: "IoIosGitBranch",
    route: "#",
    locked: true,
  },
  {
    id: 8,
    title: "GitHub",
    description:
      "Learn how to use GitHub for version control and collaboration.",
    progress: 0,
    icon: "FiGithub",
    route: "#",
    locked: true,
  },

  {
    id: 9,
    title: "Tailwind",
    description: "Learn how to use Tailwind CSS to style your HTML index.",
    progress: 0,
    icon: "RiTailwindCssFill",
    route: "#",
    locked: true,
  },
  {
    id: 10,
    title: "ES6",
    description: "Learn about ES6 features and how to use them.",
    progress: 0,
    icon: "IoLogoJavascript",
    route: "#",
    locked: true,
  },
];
