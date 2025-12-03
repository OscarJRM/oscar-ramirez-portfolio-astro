import { SiNextdotjs, SiReact, SiTypescript, SiTailwindcss, SiNodedotjs, SiFigma, SiGit, SiMongodb, SiExpress, SiJavascript, SiPython, SiDocker } from "react-icons/si";
import type { Skill } from "../../features/hero/types/skills.interface";

export const SKILLS_DATA: Skill[] = [
    {
        icon: SiNextdotjs,
        title: "Next.js",
        description: "React framework",
    },
    {
        icon: SiReact,
        title: "React.js",
        description: "JavaScript library for UI",
    },
    {
        icon: SiTypescript,
        title: "TypeScript",
        description: "Typed JavaScript at scale",
    },
    {
        icon: SiTailwindcss,
        title: "Tailwind CSS",
        description: "Utility-first CSS framework",
    },
    {
        icon: SiNodedotjs,
        title: "Node.js",
        description: "JavaScript runtime for backend",
    },
    {
        icon: SiFigma,
        title: "Figma",
        description: "Design tool for prototyping",
    },
    {
        icon: SiGit,
        title: "Git",
        description: "Version control system",
    },
    {
        icon: SiMongodb,
        title: "MongoDB",
        description: "NoSQL database solution",
    },
    {
        icon: SiExpress,
        title: "Express.js",
        description: "Fast Node.js web framework",
    },
    {
        icon: SiJavascript,
        title: "JavaScript",
        description: "Dynamic programming language",
    },
    {
        icon: SiPython,
        title: "Python",
        description: "Versatile programming language",
    },
    {
        icon: SiDocker,
        title: "Docker",
        description: "Containerization platform",
    },
];
