import type {
  Achievement,
  Blog,
  Education,
  Experience,
  Profile,
  Project,
  Tool,
} from "@/types/portfolio";

const now = new Date().toISOString();

export const seedProfile: Profile = {
  name: "Mouaadh Sahailia",
  title:
    "Computer Science Graduate | Aspiring QA Tester | Developer | Eager to Build Skills in Engineering & Technology | Adaptable, Responsible, Collaborative",
  location: "Europe",
  bio: "I'm a Computer Science graduate with a strong interest in software development and quality assurance. I led a hands-on graduation project using ESP32 and MQTT to build a health monitoring system, and I am motivated to learn, contribute, and grow in tech.",
  avatarUrl: "/myfoto.png",
  email: "mouaadhsahailia@gmail.com",
  socialLinks: [
    { label: "Email", url: "mailto:mouaadhsahailia@gmail.com", icon: "/at-sign.svg" },
    { label: "GitHub", url: "https://github.com/mouaadh11", icon: "/github.svg" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/mouaadhsh/", icon: "/linkedin.svg" },
  ],
};

export const seedProjects: Project[] = [
  {
    id: "graduation-project",
    title: "Graduation Project: A Journey of Challenges and Growth",
    description:
      "A final-year computer science project built through real challenges, teamwork, and deep learning.",
    imageUrl: "/maxresdefault.jpg",
    link: "/blog/GraduationProject",
    githubUrl: "",
    tags: ["ESP32", "MQTT", "Mobile App", "IoT"],
    featured: true,
    order: 1,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "spanish-learning",
    title: "A Spanish Practice Tool",
    description:
      "A free web app that helps beginners practice simple Spanish conversation topics using random prompts.",
    imageUrl: "/screenshot.png",
    link: "/blog/SpanishLearning",
    githubUrl: "",
    tags: ["React", "Supabase", "Tailwind CSS"],
    featured: true,
    order: 2,
    createdAt: now,
    updatedAt: now,
  },
];

export const seedEducation: Education[] = [
  {
    id: "computer-science-degree",
    title: "Computer Science Graduate",
    institution: "University Computer Science Program",
    description:
      "Built a foundation in algorithms, operating systems, software engineering, mobile development, and practical project work.",
    startDate: "2021",
    endDate: "2024",
    location: "Algeria",
    order: 1,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "technical-math-baccalaureate",
    title: "Technical Math Baccalaureate",
    institution: "High School Mechanical Engineering Track",
    description:
      "Ranked first in the mechanical engineering track after focused study in mathematics, physics, and engineering foundations.",
    startDate: "2020",
    endDate: "2021",
    location: "Algeria",
    order: 2,
    createdAt: now,
    updatedAt: now,
  },
];

export const seedExperience: Experience[] = [
  {
    id: "razan-dental-cad",
    title: "Designing Dental Prostheses with CAD: My First Tech Job",
    company: "Razan Dental",
    description:
      "Created digital dental prostheses using exoCad software and supported quality-focused digital dentistry workflows.",
    location: "Chlef, Algeria",
    startDate: "2022",
    endDate: "2022",
    order: 1,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "nakon-packaging-assistant",
    title: "Packaging Assistant in Germany: Work, Study, and Growth",
    company: "Nakon GmbH",
    description:
      "Balanced part-time packaging work with robotics studies while building discipline, teamwork, and time-management habits.",
    location: "Schweinfurt, Germany",
    startDate: "2024",
    endDate: "2024",
    order: 2,
    createdAt: now,
    updatedAt: now,
  },
];

export const seedAchievements: Achievement[] = [
  {
    id: "high-school-rank",
    title: "Ranked #1 in High School",
    description: "Recognized for academic excellence in the 2021 Technical Math track.",
    date: "2021",
    imageUrl: "/award-white.svg",
    order: 1,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "computer-science-rank",
    title: "Ranked #1 in Computer Science",
    description: "Finished first in the Computer Science class of 2024.",
    date: "2024",
    imageUrl: "/award-black.svg",
    order: 2,
    createdAt: now,
    updatedAt: now,
  },
];

export const seedTools: Tool[] = [
  {
    id: "arduino",
    name: "Arduino",
    category: "Hardware and sensor programming",
    iconUrl: "/Arduino.png",
    level: "Intermediate",
    order: 1,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "figma",
    name: "Figma",
    category: "UI design and prototyping",
    iconUrl: "/figma.svg",
    level: "Intermediate",
    order: 2,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "react",
    name: "React",
    category: "Frontend web app framework",
    iconUrl: "/reactjs.svg",
    level: "Intermediate",
    order: 3,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "tailwind",
    name: "Tailwind",
    category: "Utility-first CSS framework",
    iconUrl: "/tailwind.svg",
    level: "Intermediate",
    order: 4,
    createdAt: now,
    updatedAt: now,
  },
];

export const seedBlogs: Blog[] = [
  {
    id: "myUniversityJourneyPost",
    slug: "myUniversityJourneyPost",
    title: "My University Journey: From Dream to Graduation",
    description:
      "In 2021, I began my journey into computer science after ranking first in my high school's mechanical engineering major.",
    content:
      "## The Beginning: A Childhood Dream Takes Shape\n\nEver since I was a child, I was fascinated by how machines and technology worked. This curiosity led me to pursue mechanical engineering in high school, where I ranked first in my class in 2021.\n\n## Diving Deeper: The Technical Core\n\nIn the second year, we studied computer architecture, operating systems, information systems, MIPS assembly language, and object-oriented programming.\n\n## The Final Year: Real Projects and Real Growth\n\nThe third and final year was centered around our graduation project, a demanding effort filled with technical obstacles, limited resources, and tight deadlines.",
    imageUrl: "/cs.jpg",
    tags: ["Education", "Computer Science"],
    published: true,
    order: 1,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "myBaccalaureateJourneyPost",
    slug: "myBaccalaureateJourneyPost",
    title: "My Baccalaureate Journey: Discipline, Dedication, and Dreams",
    description:
      "The Baccalaureate exam was an important academic milestone that taught me discipline, pressure management, and focus.",
    content:
      "## What is the Baccalaureate?\n\nIn Algeria, the Baccalaureate is a national exam that determines whether students can continue to university.\n\n## Subjects and Daily Routine\n\nMy main subjects were mathematics, physics, and mechanical engineering, supported by languages and humanities.\n\n## Achieving First Place\n\nAll the effort paid off when I ranked first in my high school.",
    imageUrl: "/mechanical.webp",
    tags: ["Education", "Achievement"],
    published: true,
    order: 2,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "GraduationProject",
    slug: "GraduationProject",
    title: "Graduation Project: A Journey of Challenges and Growth",
    description:
      "In the final year of my computer science studies, I faced one of the most important milestones: the graduation project.",
    content:
      "## Solving Real Problems With Limited Resources\n\nFrom the beginning, our graduation project presented many challenges. We designed and implemented a solution that worked with the limited tools available to us.\n\n## Lessons Beyond the Code\n\nTechnical skills were only part of the story. Time management, communication, and creative problem-solving were just as important.",
    imageUrl: "/maxresdefault.jpg",
    tags: ["Project", "IoT", "Teamwork"],
    published: true,
    order: 3,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "SpanishLearning",
    slug: "SpanishLearning",
    title: "Creating Tarjetas de Conversacion: A Spanish Practice Tool",
    description:
      "A free web app that helps beginners in Spanish practice simple conversation topics using random prompts.",
    content:
      "## Why I Built It\n\nAs a language learner myself, I understand the struggle of trying to find good ways to practice speaking.\n\n## How It Works\n\nThe app is built with React, Supabase, and Tailwind CSS. It features a clean interface, dark mode support, and responsive design.",
    imageUrl: "/spanishapp.png",
    tags: ["React", "Spanish", "Learning"],
    published: true,
    order: 4,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "DentalAssitst",
    slug: "DentalAssitst",
    title: "Designing Dental Prostheses with CAD: My First Tech Job",
    description:
      "In the summer of 2022, I worked at Razan Dental in Chlef, Algeria, creating digital dental prostheses using exoCad.",
    content:
      "## Entering the World of Digital Dentistry\n\nAt Razan Dental, I was introduced to CAD in healthcare. I designed dental prostheses, performed scans, and supported quality control.\n\n## Skills and Takeaways\n\nThis role helped me develop technical and communication skills while learning how precision matters in health-related work.",
    imageUrl: "/cad.webp",
    tags: ["Experience", "CAD", "Quality"],
    published: true,
    order: 5,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "Nakon",
    slug: "Nakon",
    title: "Packaging Assistant in Germany: Work, Study, and Growth",
    description:
      "In late 2024, I worked part-time as a packaging assistant at Nakon GmbH while balancing robotics studies.",
    content:
      "## Balancing Studies and Physical Work\n\nThe job involved daily packaging, quality control, and maintaining pace in a busy production line.\n\n## Teamwork and Workplace Skills\n\nI developed communication, reliability, and time-management skills that carry over into software and engineering work.",
    imageUrl: "/Lederwaren.jpg",
    tags: ["Experience", "Work"],
    published: true,
    order: 6,
    createdAt: now,
    updatedAt: now,
  },
];

export const seedPortfolioData = {
  profile: seedProfile,
  projects: seedProjects,
  education: seedEducation,
  experience: seedExperience,
  achievements: seedAchievements,
  tools: seedTools,
  blogs: seedBlogs,
};
