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
      { label: "Total Experience", value: "Since 7 Mar 2022" },
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
  professionalProjects: [
    {
      id: "smart-connect",
      name: "Smart Connect",
      client: "Capsule & Machinery Client",
      confidentialNote: "Client name & UI confidential per NDA",
      tagline: "Industrial IoT Dashboards, OEE Tracking & AI Search",
      summary:
        "Engineered an enterprise Industrial IoT platform for manufacturing lines. Built live telemetry dashboards for CNC machines and capsule production lines, along with an AI assistant to query machine logs in natural language.",
      points: [
        "PAM (Plant Asset Management): Equipment lifecycle tracking and predictive maintenance alerts.",
        "CNC & OEE Analytics: Real-time Overall Equipment Effectiveness (Availability, Performance, Quality) tracking.",
        "FNF & PMO Modules: Fill & Finish line monitoring, batch reject analysis, and project milestone tracking.",
        "AI Conversational Search: Natural language LLM assistant for engineers to query machine logs and production reports.",
      ],
      techstack: ["React.js", "Node.js", "PostgreSQL", "AI / LLMs", "Redis", "REST APIs", "Tailwind CSS"],
    },
    {
      id: "ezengage",
      name: "ezEngage",
      client: "Healthcare & Logistics Client",
      confidentialNote: "Client name & UI confidential per NDA",
      tagline: "Omnichannel CRM, Meeting Tracker & Field Coaching",
      summary:
        "Developed a healthcare CRM and field engagement platform to record doctor interactions, run structured manager coaching workflows, and deliver executive dashboard analytics.",
      points: [
        "Interaction & Meeting Logs: Comprehensive record feed of virtual and in-person doctor meetings, discussion notes, and feedback.",
        "Coaching Module: Structured coaching framework with evaluation rubrics and field rep scorecards.",
        "Executive Dashboard Reports: Real-time analytics for territory coverage, meeting frequency, and KPI reports.",
        "High-Volume APIs: Scalable backend with optimized PostgreSQL queries, reducing data fetching latency by 35%.",
      ],
      techstack: ["Next.js", "React.js", "TypeScript", "Node.js", "PostgreSQL", "Redux Toolkit", "REST APIs"],
    },
    {
      id: "smart-lead-capture",
      name: "Smart Lead Capture",
      client: "Global Pharma Client",
      confidentialNote: "Client name & UI confidential per NDA",
      tagline: "Exhibition Lead Capture & Azure OCR Scanner",
      summary:
        "Built an exhibition and event management platform with integrated Azure OCR computer vision to automate attendee badge and business card scanning at global trade events.",
      points: [
        "Azure OCR Scanner: Automated badge and business card data extraction, reducing manual entry effort by 60%.",
        "Booth & Queue Management: Floor operations management, rep session allocation, and visitor tracking.",
        "Instant CRM Sync: Real-time lead ingestion with automatic tagging and CRM pipeline integration.",
        "Offline-First Mode: Robust local caching ensuring zero data loss during busy exhibitions with poor Wi-Fi.",
      ],
      techstack: ["React.js", "Node.js", "Azure OCR", "PostgreSQL", "REST APIs", "Tailwind CSS"],
    },
  ],
  projects: [
    {
      title: "Hisabkar - AI-Powered Expense Ecosystem",
      thumbnail:
        "https://res.cloudinary.com/dvxa7eljz/image/upload/v1787656269/IMG_5518-imageonline.co-merged_spd5ou.png",
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
      screens: [
        {
          step: "01",
          tag: "Auth & Security",
          title: "Welcome & One-Tap Authentication",
          description:
            "Clean Google OAuth onboarding granting instant, encrypted access to group ledgers and personal finance records without login friction.",
          image:
            "https://res.cloudinary.com/dvxa7eljz/image/upload/v1787833172/IMG_5519_xkydi1.jpg",
          highlights: ["Google OAuth 2.0 Login", "Encrypted User Sessions", "Fast PWA Launch"],
        },
        {
          step: "02",
          tag: "Dashboard & Balances",
          title: "Groups Hub & Real-time Balance Overview",
          description:
            "High-level overview displaying aggregate 'You Owe' and 'You're Owed' balances across all active groups with live settlement tags.",
          image:
            "https://res.cloudinary.com/dvxa7eljz/image/upload/v1787833172/IMG_5516_smlsrw.jpg",
          highlights: ["Net Debt Calculation", "Group-level Status Badges", "Multi-Group Management"],
        },
        {
          step: "03",
          tag: "Expense Engine",
          title: "Dynamic Expense Timeline & Multi-Splits",
          description:
            "Interactive transaction feed supporting granular expense categorization (WiFi, Dining, Groceries) and custom split rules with instant breakdown visibility.",
          image:
            "https://res.cloudinary.com/dvxa7eljz/image/upload/v1787833172/IMG_5515_capsap.jpg",
          highlights: ["Equal & Custom Splitting", "Categorized Activity Logs", "Member-wise Breakdown"],
        },
        {
          step: "04",
          tag: "Settlement Engine",
          title: "Smart Debt Simplification & Settle-Up",
          description:
            "Graph-based debt minimization algorithm that condenses complex multi-member obligations into the minimum possible transactions.",
          image:
            "https://res.cloudinary.com/dvxa7eljz/image/upload/v1787833172/IMG_5517_eyhf8r.jpg",
          highlights: ["Graph Optimization Algorithm", "Simplified vs Detailed Mode", "Visual Transaction Flow"],
        },
        {
          step: "05",
          tag: "AI Intelligence",
          title: "AI Financial Sensei (Assistant)",
          description:
            "Integrated AI assistant powered by OpenRouter LLMs that analyzes group spending habits, predicts future budgets, and answers conversational financial queries.",
          image:
            "https://res.cloudinary.com/dvxa7eljz/image/upload/v1787833172/IMG_5518_ftrem8.jpg",
          highlights: ["OpenRouter LLM Integration", "Predictive Spending Analytics", "Context-Aware Spending Advice"],
        },
      ],
    }
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
