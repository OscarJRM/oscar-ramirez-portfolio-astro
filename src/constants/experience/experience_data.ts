import type { Experience } from "../../features/experience/types/experience.interface";

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: "pixelforge",
    position: "Senior Frontend Developer",
    employment_type: "Full-time",
    company: "PixelForge Studios",
    location: "New York, NY",
    start_date: "2020-01-01",
    end_date: null,
    description: "Led the design team in creating user-centric mobile and web applications, improving the user experience and increasing user engagement.",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Figma"],
    details: {
      overview: "At PixelForge Studios, I had the opportunity to work in a dynamic and creative environment that specialized in cutting-edge digital design and development. The studio was known for its innovative approach to visual storytelling, combining artistry with technology to create stunning visual experiences.",
      role: "As a UI/UX Designer at PixelForge Studios, I was responsible for crafting intuitive and visually compelling user interfaces for a range of digital products. My work involved close collaboration with developers, artists, and clients to ensure that designs were both aesthetically pleasing and functionally effective. I contributed to several high-profile projects, including designing the user interface for a mobile app that was featured in major app stores. I also worked on interactive websites and digital campaigns for prominent brands, ensuring a seamless user experience across all platforms.",
      skills_acquired: ["Advanced React Patterns", "Design Systems", "User Research", "A/B Testing", "Team Leadership"],
      impact: "During my tenure, I helped increase user engagement by 40% across key products and led a team of 5 designers in delivering pixel-perfect interfaces that resulted in a 25% increase in client satisfaction scores.",
      company_link: "https://pixelforge-studios.com"
    }
  },
  {
    id: "bluewave",
    position: "UI/UX Designer & Frontend Developer",
    employment_type: "Full-time", 
    company: "BlueWave Innovators",
    location: "San Francisco, CA",
    start_date: "2017-06-01",
    end_date: "2019-12-01",
    description: "Developed and implemented design strategies for new product lines, collaborated closely with engineers and product managers.",
    skills: ["JavaScript", "Vue.js", "Adobe Creative Suite", "Sketch", "CSS3"],
    details: {
      overview: "BlueWave Innovators was a fast-growing tech startup focused on creating innovative solutions for the fintech industry. The company culture emphasized creativity, rapid prototyping, and user-centered design principles.",
      role: "As a UI/UX Designer and Frontend Developer, I bridged the gap between design and development, creating seamless user experiences from concept to implementation. I was responsible for the complete design-to-code workflow for multiple product features.",
      skills_acquired: ["Vue.js Framework", "Fintech UX Patterns", "Agile Methodologies", "Prototyping", "Cross-functional Collaboration"],
      impact: "Successfully launched 3 major product features that contributed to a 60% increase in user adoption and helped secure $2M in Series A funding.",
      company_link: "https://bluewave-innovators.com"
    }
  },
  {
    id: "techstart",
    position: "Junior Web Developer",
    employment_type: "Part-time",
    company: "TechStart Solutions",
    location: "Austin, TX", 
    start_date: "2015-03-01",
    end_date: "2017-05-01",
    description: "Built responsive web applications and landing pages, worked with cross-functional teams to deliver high-quality digital solutions.",
    skills: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap"],
    details: {
      overview: "TechStart Solutions was my entry point into the professional web development world. It was a small but ambitious agency that worked with local businesses to establish their digital presence.",
      role: "As a Junior Web Developer, I was responsible for coding responsive websites and landing pages from designer mockups. This role taught me the fundamentals of web development and professional coding practices.",
      skills_acquired: ["Responsive Design", "Cross-browser Compatibility", "Version Control (Git)", "Client Communication", "Project Management"],
      impact: "Delivered 15+ websites for local businesses, helping them increase their online presence and achieve an average of 30% increase in online inquiries."
    }
  }
];