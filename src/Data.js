export const portfolioData = {
  hero: {
    name: "Ravinder Singh Negi",
    role: "Full Stack Web Developer",
    typewriterText: [
      "Frontend Specialist",
      "Full Stack Explorer",
      "Mountain Trekker",
      "Life-long Learner",
    ],
    image:
      "https://res.cloudinary.com/dvxa7eljz/image/upload/v1770637440/profile-pic_1_fe9ej2.png", // Keeping the high-end placeholder
    resumeLink:
      import.meta.env.VITE_RESUME_LINK ||
      "https://drive.google.com/file/d/1xzO08-PK0mrVbDrCROLxCNqOCvieUZlO/view?usp=sharing",
  },
  about: {
    image:
      "https://res.cloudinary.com/dvxa7eljz/image/upload/v1770637042/IMG_0812_vn5rwj.jpg", // Keeping the high-end placeholder
    bio: "From a young age, I've been fascinated by the world of technology. I've always been eager to learn more about new developments and how they can be applied to solve real-world problems. As technology continues to evolve at a rapid pace, it's an exciting time to be a part of this field. I'm currently focused on developing my technical expertise and building a strong foundation in software development. In my free time, I trek mountains and high peaks of Uttarakhand with my friends on my bike. I'm always eager to learn about new technologies and explore the latest trends in the field.",
    metrics: [
      { label: "Years Experience", value: "4+" },
      { label: "Projects Completed", value: "15+" },
      { label: "Companies Worked", value: "1" },
    ],
  },
  experience: [
    {
      company: "Indus Net Technologies",
      logo: "https://res.cloudinary.com/dvxa7eljz/image/upload/v1744363697/zedbjsmet8udvieveudv.png",
      roles: [
        {
          title: "Software Engineer",
          period: "March 2024 - Till date",
          description:
            "In my new job as a Software Engineer, I'm eager to take on more tasks and help with important projects that make a big difference. I'm excited to use what I know about full-stack development to create strong solutions and make things run smoother.",
        },
        {
          title: "Associate Software Engineer",
          period: "March 2022 - March 2024",
          description:
            "Grateful for my journey where I've had the opportunity to learn and grow. Transitioning into a full-stack developer role, I've honed my skills while collaborating with leading players in the pharmaceutical industry.",
        },
      ],
    },
  ],
  projects: [
    {
      title: "Hisabkar - AI-Powered Expense Ecosystem",
      thumbnail:
        "https://res.cloudinary.com/dvxa7eljz/image/upload/v1744349873/tpspkwd6f6tdxizfkatp.png",
      techstack: [
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Redis",
        "Redux",
        "Socket.io",
        "OpenRouter",
      ],
      liveLink: "https://hisabkar.vercel.app",
      githubLink: "https://github.com/Ravinder2001/hisabkar",
      summary:
        "A high-performance PWA for intelligent group expense management. It combines core split logic with real-time chat, budget tracking, and an AI-powered Financial Sensei (via OpenRouter) for proactive financial analysis.",
      features: [
        "AI Financial Sensei: Integrated OpenRouter API to analyze spending patterns using multiple LLMs, predict monthly totals, and provide proactive budgeting advice.",
        "Integrated Group Chat: Real-time messaging system allowing members to share and discuss specific expenses for instant clarification.",
        "Smart Multi-mode Splitting: Support for Equal, Percentage, and Custom split logic with optimized algorithms to minimize group transactions.",
        "Dynamic Budget Tracking: Real-time budget monitoring with visual health indicators and category-wise spending breakdowns.",
        "High-Performance Caching: Integrated Redis to cache group and expense lists, significantly improving application responsiveness and reducing database load.",
        "Premium PWA Experience: Fast, installable mobile-first interface featuring offline support, push notifications, and rich Framer Motion animations.",
      ],
    },
    {
      title: "AI Meeting Auditor & Autopilot",
      thumbnail:
        "https://res.cloudinary.com/dvxa7eljz/image/upload/v1770734064/Screenshot_2026-02-10_195421_cvue5j.png",
      techstack: ["React", "n8n", "OpenRouter"],
      liveLink: "https://ai-meeting-validator.vercel.app",
      githubLink: "https://github.com/Ravinder2001/AI-Meeting-Validator",
      summary:
        "Automated meeting auditing system. Features auto-joining, deep AI analysis with OpenRouter, and detailed compliance reports.",
      features: [
        "Automated Meeting Pilot: Fetches meetings and joins calls automatically.",
        "Granular AI Analysis: Generates detailed MoM, checks agenda compliance, and analyzes sentiment.",
        "Beautiful HTML Reports: Delivers structured email reports with risk scores and insights.",
      ],
    },
    {
      title: "Incident Responder System",
      thumbnail:
        "https://res.cloudinary.com/dvxa7eljz/image/upload/v1770733966/Screenshot_2026-02-10_195039_geutrz.png",
      techstack: ["Node.js", "n8n", "OpenRouter"],
      githubLink: "https://github.com/Ravinder2001/Incident-Responder-System",
      summary:
        "Automated incident response system using RAG & OpenRouter. Detects crashes, analyzes errors, and alerts owners instantly.",
      features: [
        "Real-time Crash Detection: Captures errors and code context instantly.",
        "RAG & AI Analysis: Uses Vector DB and OpenRouter to diagnose root causes.",
        "Automated Workflows: Triggers n8n pipelines for alerts and reporting.",
      ],
    },

    {
      title: "Create Pro App - CLI Tool",
      thumbnail:
        "https://res.cloudinary.com/dvxa7eljz/image/upload/v1747387279/iwuaqjqnuu4pvidrxgdu.png",
      techstack: ["JavaScript"],
      liveLink: "https://www.npmjs.com/package/create-pro-app",
      githubLink: "https://github.com/Ravinder2001/create-pro-app",
      summary:
        "Modern CLI tool to scaffold production-ready React apps. Built with Vite, offering TypeScript, Redux, and Tailwind support.",
      features: [
        "Rapid Scaffolding: Create tailored React apps with Vite in seconds.",
        "Full Customization: Support for TypeScript, Redux, Tailwind, and Authentication.",
        "Developer Excellence: Pre-configured with Husky, ESLint, and Prettier.",
      ],
    },
  ],
  skills: [
    {
      name: "React",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/480/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png",
    },
    {
      name: "Next.js",
      icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
    },
    {
      name: "JavaScript",
      icon: "https://img.icons8.com/color/480/javascript--v1.png",
    },
    {
      name: "TypeScript",
      icon: "https://img.icons8.com/color/480/typescript.png",
    },
    { name: "Redux", icon: "https://img.icons8.com/color/480/redux.png" },
    { name: "Node.js", icon: "https://img.icons8.com/fluency/480/node-js.png" },
    {
      name: "Express",
      icon: "https://img.icons8.com/color/480/express-js.png",
    },
    {
      name: "PostgreSQL",
      icon: "https://img.icons8.com/color/480/postgreesql.png",
    },
    { name: "MongoDB", icon: "https://img.icons8.com/color/480/mongodb.png" },
    { name: "MySQL", icon: "https://img.icons8.com/color/480/mysql-logo.png" },
    {
      name: "Socket.io",
      icon: "https://www.vectorlogo.zone/logos/socketio/socketio-icon.svg",
    },
    {
      name: "AWS",
      icon: "https://img.icons8.com/color/480/amazon-web-services.png",
    },
    {
      name: "Tailwind CSS",
      icon: "https://img.icons8.com/color/480/tailwind_css.png",
    },
    { name: "Git", icon: "https://img.icons8.com/color/480/git.png" },
    { name: "n8n", icon: "https://static.cdnlogo.com/logos/n/75/n8n.svg" },
    {
      name: "OpenRouter",
      icon: "https://openrouter.ai/favicon.ico",
    },
    { name: "Redis", icon: "https://img.icons8.com/color/480/redis.png" },
  ],
  awards: [
    {
      title: "WOW Award - June 2024",
      image:
        "https://res.cloudinary.com/dvxa7eljz/image/upload/v1744349925/ykzqahro0odjhfvgpbpo.jpg",
      description:
        "Received 'Way of Working' Award for outstanding performance and delivering critical features ahead of schedule.",
      year: "2024",
    },
    {
      title: "WOW Award - Feb 2024",
      image:
        "https://res.cloudinary.com/dvxa7eljz/image/upload/v1744349910/jus7nm9kcnafv8ead8br.jpg",
      description:
        "Recognized for exceptional technical skill and commitment to excellence in the Associate Software Engineer role.",
      year: "2024",
    },
  ],
};
