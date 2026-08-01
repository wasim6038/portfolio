export const personalInfo = {
  name: "Md Wasim Ansari",
  shortName: "Wasim",
  role: "Full Stack MERN Developer",
  tagline: "Building scalable web apps with modern tech",
  email: "anassaifi6038@gmail.com",
  phone: "+91 9546906038",
  location: "Ranchi, Jharkhand, India",
  github: "https://github.com/wasim6038",
  linkedin: "https://linkedin.com/in/md-wasim-ansari",
  twitter: "https://twitter.com/wasim6038",
  summary:
    "Full-Stack MERN Developer with hands-on experience building scalable web applications. Currently working as a Junior Developer at Executehub Technologies after completing a 6-month internship there. Skilled in REST API development, authentication systems, database design, and responsive UI development.",
  resumeLink: "#",
};

export const skills = [
  {
    category: "Frontend",
    icon: "🎨",
    color: "from-violet-500 to-purple-600",
    items: [
      { name: "React.js",    level: 88 },
      { name: "Next.js",     level: 82 },
      { name: "Tailwind CSS",level: 90 },
      { name: "TypeScript",  level: 72 },
      { name: "HTML & CSS",  level: 95 },
      { name: "JavaScript",  level: 88 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "from-blue-500 to-cyan-600",
    items: [
      { name: "Node.js",       level: 85 },
      { name: "Express.js",    level: 85 },
      { name: "REST API",      level: 88 },
      { name: "Authentication",level: 80 },
    ],
  },
  {
    category: "Database",
    icon: "🗄️",
    color: "from-emerald-500 to-teal-600",
    items: [
      { name: "MongoDB",        level: 85 },
      { name: "Mongoose",       level: 83 },
      { name: "Database Design",level: 78 },
    ],
  },
  {
    category: "Tools & Others",
    icon: "🛠️",
    color: "from-orange-500 to-red-500",
    items: [
      { name: "Git & GitHub",     level: 88 },
      { name: "Postman",          level: 85 },
      { name: "API Integration",  level: 87 },
      { name: "ChatGPT & AI Tools",level: 80 },
      { name: "Data Structures",  level: 72 },
    ],
  },
];

export const experience = [
  {
    id: 1,
    role: "Junior Developer",
    company: "Executehub Technologies",
    duration: "Feb 2026 – Present",
    type: "Full-Time · Currently Working",
    location: "On-Site",
    isCurrent: true,
    color: "from-emerald-500 to-teal-600",
    description:
      "Continued as a full-time Junior Developer after successfully completing the internship, taking on more ownership of features and leading small modules.",
    responsibilities: [
      "Developing and maintaining full-stack web features using the MERN stack",
      "Leading frontend module development with React.js and Next.js",
      "Collaborating with the team on architecture decisions and code reviews",
      "Optimizing application performance, database queries, and UI responsiveness",
      "Participating in sprint planning and agile development cycles",
    ],
  },
  {
    id: 2,
    role: "MERN Stack Developer Intern",
    company: "Executehub Technologies",
    duration: "July 2025 – Jan 2026",
    type: "Internship · 6 months",
    location: "On-Site",
    isCurrent: false,
    color: "from-violet-500 to-indigo-600",
    description:
      "Contributed to production-grade web platforms as part of a professional development team.",
    responsibilities: [
      "Developed full-stack web applications using MongoDB, Express.js, React.js, Node.js, and Next.js",
      "Built backend APIs and integrated frontend interfaces for production web platforms",
      "Worked on multiple real-world projects: Oneseva, Collibet, and a Learning Management System",
      "Improved application performance and UI responsiveness using Next.js and React",
    ],
  },
];

export const projects = [
  {
    id: 8,
    title: "School Platform",
    description:
      "A comprehensive school platform with Admin CMS featuring user authentication, role-based access, and updating various school-related data. ",
    techStack: ["JavaScript", "HTML", "CSS", "React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs", "Framer Motion", "Tailwind CSS", "Redux Toolkit",],
    github: "https://github.com/wasim6038/school-frontend",
    live: "https://school-frontend-one-tau.vercel.app/",
    category: "Full Stack",
    featured: true,
    color: "from-emerald-500 to-teal-600",
    icon: "📋",
  },
  {
    id: 1,
    title: "MealSnap AI Powered Nutrition App",
    description:
      "An AI-powered nutrition app that analyzes meal photos or names to provide calorie estimates, nutritional breakdowns, and healthy eating suggestions.",
    techStack: ["JavaScript", "HTML", "CSS", "React.js", "Node.js", "Express.js", "MongoDB", "Gemini APIs"],
    github: "https://github.com/wasim6038/mealsnap-frontend",
    live: "https://mealsnap-frontend.vercel.app/login",
    category: "Full Stack",
    featured: true,
    color: "from-violet-500 to-purple-700",
    icon: "📋",
  },
  {
    id: 2,
    title: "Kanban Board",
    description:
      "A drag-and-drop task management board with real-time updates, column management, and smooth interactions.",
    techStack: ["JavaScript", "HTML", "CSS", "Drag & Drop API"],
    github: "https://github.com/wasim6038/kanban-board",
    live: "https://kanban-board-inky-delta.vercel.app/",
    category: "Frontend",
    featured: true,
    color: "from-pink-500 to-rose-600",
    icon: "📋",
  },
  {
    id: 7,
    title: "Real-Time Location Tracker",
    description:
      "Live location tracking using Socket.io and Leaflet.js. Tracks multiple users in real-time on an interactive map.",
    techStack: ["Node.js", "Socket.io", "Leaflet.js", "Express.js", "JavaScript"],
    github: "https://github.com/wasim6038/RealTime-Tracker",
    live: "https://real-time-tracker-ten-sooty.vercel.app",
    category: "Backend",
    featured: false,
    color: "from-blue-500 to-cyan-600",
    icon: "📍",
  },
  {
    id: 3,
    title: "URL Shortener",
    description:
      "A full-stack URL shortening service with custom slugs, click analytics, and redirect functionality.",
    techStack: ["Node.js", "Express.js", "MongoDB", "JavaScript", "EJS"],
    github: "https://github.com/wasim6038/Url-Shortner",
    live: "https://shortlinks-0j58.onrender.com/signup",
    category: "Full Stack",
    featured: true,
    color: "from-emerald-500 to-teal-600",
    icon: "🔗",
  },
  {
    id: 4,
    title: "Blogging Website",
    description:
      "A feature-rich blogging platform with CRUD operations, user authentication, and rich text editor.",
    techStack: ["Node.js", "Express.js", "MongoDB", "EJS", "CSS"],
    github: "https://github.com/wasim6038/BlogingWebsite",
    live: "https://github.com/wasim6038/BlogingWebsite",
    category: "Full Stack",
    featured: false,
    color: "from-orange-500 to-red-500",
    icon: "✍️",
  },
  {
    id: 5,
    title: "Oneseva Platform",
    description:
      "Contributed to the Oneseva web platform. Built responsive UI components and integrated REST APIs.",
    techStack: ["React.js", "Next.js", "Node.js", "MongoDB", "Express.js"],
    github: "https://github.com/wasim6038",
    live: "https://www.oneseva.in/",
    category: "Full Stack",
    featured: false,
    color: "from-pink-500 to-rose-600",
    icon: "🌐",
  },
  {
    id: 6,
    title: "Collibet Platform",
    description:
      "Developed modules and APIs for the Collibet platform including database models and stock management features.",
    techStack: ["Node.js", "Express.js", "MongoDB", "JavaScript"],
    github: "https://github.com/wasim6038",
    live: "https://collibet.com/",
    category: "Full Stack",
    featured: true,
    color: "from-indigo-500 to-blue-600",
    icon: "📊",
  },
];

export const services = [
  {
    icon: "🎨",
    title: "Frontend Development",
    description: "Pixel-perfect, responsive UIs with React.js, Next.js, and Tailwind CSS.",
    color: "from-violet-500/20 to-purple-600/20",
    border: "border-violet-500/30",
  },
  {
    icon: "⚙️",
    title: "Backend Development",
    description: "Robust server-side solutions with Node.js, Express.js, and scalable architecture.",
    color: "from-blue-500/20 to-cyan-600/20",
    border: "border-blue-500/30",
  },
  {
    icon: "🚀",
    title: "Full Stack Web Apps",
    description: "End-to-end MERN stack applications from concept to deployment.",
    color: "from-emerald-500/20 to-teal-600/20",
    border: "border-emerald-500/30",
  },
  {
    icon: "🔗",
    title: "REST API Development",
    description: "Clean, documented RESTful APIs with proper authentication and error handling.",
    color: "from-orange-500/20 to-red-500/20",
    border: "border-orange-500/30",
  },
  {
    icon: "🗄️",
    title: "Database Design",
    description: "Efficient MongoDB schema design, indexing, and query optimization.",
    color: "from-pink-500/20 to-rose-600/20",
    border: "border-pink-500/30",
  },
  {
    icon: "🔐",
    title: "Auth Systems",
    description: "Secure JWT authentication, OAuth integration, and role-based access control.",
    color: "from-indigo-500/20 to-blue-600/20",
    border: "border-indigo-500/30",
  },
];

export const stats = [
  { value: "1+",  label: "Years Experience" },
  { value: "10+", label: "Projects Built"   },
  { value: "3+",  label: "Production Apps"  },
  { value: "8.24",label: "CGPA"             },
];

export const education = [
  {
    degree: "Bachelor of Technology (IT)",
    institution: "M.L.V Textile & Engineering College",
    location: "Bhilwara, Rajasthan",
    year: "Nov 2022 – May 2026",
    grade: "CGPA: 8.24",
    color: "from-violet-500 to-indigo-600",
  },
  {
    degree: "12th CBSE",
    institution: "RTC High School, Buti",
    location: "Ranchi, Jharkhand",
    year: "Apr 2019 – Apr 2021",
    grade: "63%",
    color: "from-blue-500 to-cyan-600",
  },
  {
    degree: "10th CBSE",
    institution: "RTC High School, Buti",
    location: "Ranchi, Jharkhand",
    year: "Mar 2019",
    grade: "83%",
    color: "from-emerald-500 to-teal-600",
  },
];

export const navLinks = [
  { label: "Home",       href: "#hero"       },
  { label: "About",      href: "#about"      },
  { label: "Skills",     href: "#skills"     },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects"   },
  { label: "Services",   href: "#services"   },
  { label: "Contact",    href: "#contact"    },
];
