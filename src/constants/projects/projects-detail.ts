import type { DetailedProject } from "../../features/projects/types/project-detail.interface";
import { FaReact, FaNodeJs, FaGithub, FaLinkedin, FaJava } from "react-icons/fa";
import { SiAstro, SiTailwindcss, SiFramer, SiVercel, SiTypescript, SiNextdotjs, SiSupabase, SiPostgresql, SiDocker, SiKubernetes, SiAmazon, SiVuedotjs, SiVite, SiSpringboot, SiJavascript } from "react-icons/si";

export const PROJECTS_DETAIL_DATA: DetailedProject[] = [
  {
    id: "car_rental",
    title: "Car Rental Management",
    shortDescription: "A full-stack vehicle rental management system featuring role-based authentication, fleet management, and booking workflows. Built with Vue 3 and Spring Boot, it offers a complete solution for managing vehicle rental operations.",
    technicalStack: {
      frontend: [
        { name: "Vue 3", description: "Progressive JavaScript framework for building reactive user interfaces.", icon: SiVuedotjs },
        { name: "Vite", description: "Frontend build tool that provides fast development and optimized builds.", icon: SiVite },
        { name: "JavaScript", description: "Used for client-side logic and interactivity within the application.", icon: SiJavascript },
        { name: "Tailwind CSS", description: "Utility-first CSS framework for building custom designs efficiently.", icon: SiTailwindcss },
      ],
      backend: [
        { name: "Java", description: "Primary programming language for backend services and application logic.", icon: FaJava },
        { name: "Spring Boot", description: "Framework for building scalable and production-ready REST APIs.", icon: SiSpringboot },
        { name: "PostgreSQL", description: "Relational database for managing vehicle, user, and transaction data.", icon: SiPostgresql },
      ],
      devOps: [
        { name: "Docker", description: "Containerization tool used to manage and deploy the development environment.", icon: SiDocker },
      ],
    },
    visualContent: {
      mainImage: "/images/car_rental/01.png",
      screenshots: [
        "/images/car_rental/02.png",
        "/images/car_rental/03.png",
        "/images/car_rental/04.png",
        "/images/car_rental/05.png",
        "/images/car_rental/06.png",
        "/images/car_rental/07.png",
        "/images/car_rental/08.png",
        "/images/car_rental/09.png",
        "/images/car_rental/10.png",
        "/images/car_rental/11.png",
        "/images/car_rental/12.png",
        "/images/car_rental/13.png",
        "/images/car_rental/14.png",
        "/images/car_rental/15.png",
        "/images/car_rental/16.png",
        "/images/car_rental/17.png",
        "/images/car_rental/18.png",
      ],
    },
    links: {
      demo: "https://example.com/revo",
      github: "https://github.com/example/revo",
    },
    collaborators: [
      { name: "Alex Johnson", role: "Frontend Developer", github: "https://github.com/alexj" },
      { name: "Maria Garcia", role: "UI/UX Designer", linkedin: "https://linkedin.com/in/mariag" },
    ],
  },
  {
    id: "ecua_ticket",
    title: "ecua_ticket",
    shortDescription: "AI landing template with accent animations and a strong visual identity, optimized for conversions.",
    technicalStack: {
      frontend: [
        { name: "React", description: "SPA-like interactions", icon: FaReact },
        { name: "Astro", description: "SSG with islands", icon: SiAstro },
        { name: "Tailwind CSS", description: "Rapid design system", icon: SiTailwindcss },
        { name: "Framer Motion", description: "Micro-interactions", icon: SiFramer },
      ],
    },
    visualContent: {
      mainImage: "/images/ecua_ticket/b1.png",
      screenshots: [
        "/images/ecua_ticket/b10.png",
        "/images/ecua_ticket/b2.png",
        "/images/ecua_ticket/b3.png",
        "/images/ecua_ticket/b4.png",
        "/images/ecua_ticket/b5.png",
        "/images/ecua_ticket/b6.png",
        "/images/ecua_ticket/b7.png",
        "/images/ecua_ticket/b8.png",
        "/images/ecua_ticket/b9.png",
      ],
    },
    links: {
      demo: "https://example.com/najmai",
      github: "https://github.com/example/najmai",
    },
    collaborators: [
      { name: "Sam Smith", role: "Full Stack Developer", github: "https://github.com/sams" },
    ],
  },
  {
    id: "savings_goals",
    title: "savings_goals",
    shortDescription: "Elegant portfolio template with grid gallery and smooth transitions.",
    technicalStack: {
      frontend: [
        { name: "React", description: "UI components", icon: FaReact },
        { name: "Astro", description: "Content-focused structure", icon: SiAstro },
        { name: "Tailwind CSS", description: "Design system", icon: SiTailwindcss },
        { name: "Framer Motion", description: "Animations", icon: SiFramer },
      ],
    },
    visualContent: {
      mainImage: "/images/savings_goals/dashboard1.jpg",
      screenshots: [
        "/images/savings_goals/Login.jpg",
        "/images/savings_goals/Retiros.jpg",
        "/images/savings_goals/chatbot_general_0.jpg",
        "/images/savings_goals/chatbot_general_1.jpg",
        "/images/savings_goals/chatbot_general_2.jpg",
        "/images/savings_goals/chatbot_general_3.jpg",
        "/images/savings_goals/chatbot_general_4.jpg",
        "/images/savings_goals/chatbot_meta_especifica.jpg",
        "/images/savings_goals/chatbot_meta_especifica_pregunta.jpg",
        "/images/savings_goals/contribuciones.jpg",
        "/images/savings_goals/dasboard_scroll.jpg",
        "/images/savings_goals/dashboard2.jpg",
        "/images/savings_goals/dashboard3.jpg",
        "/images/savings_goals/flujo_general.jpg",
        "/images/savings_goals/metas_ahorro.jpg",
        "/images/savings_goals/metas_ahorro_detail.jpg",
        "/images/savings_goals/metas_ahorro_progreso.jpg",
        "/images/savings_goals/recordatorio_email.jpg",
        "/images/savings_goals/register.jpg",
      ],
    },
    links: {
      demo: "https://example.com/stabraq",
      github: "https://github.com/example/stabraq",
    },
    collaborators: [
      { name: "Chris Lee", role: "Backend Developer", github: "https://github.com/chrisl" },
      { name: "Pat Taylor", role: "DevOps Engineer" },
    ],
  },
  {
    id: "website",
    title: "website",
    shortDescription: "Task management concept with AI assistance and minimal UX.",
    technicalStack: {
      frontend: [
        { name: "React", description: "Components", icon: FaReact },
        { name: "Astro", description: "Pages", icon: SiAstro },
        { name: "Tailwind CSS", description: "Styles", icon: SiTailwindcss },
      ],
    },
    visualContent: {
      mainImage: "/images/website/w1.png",
      screenshots: [
        "/images/website/w3.png",
        "/images/website/w4.png",
        "/images/website/w5.png",
        "/images/website/w7.png",
      ],
    },
    links: {
      demo: "https://example.com/taskai",
      github: "https://github.com/example/taskai",
    },
    collaborators: [
      { name: "Jordan Brown", role: "Product Manager" },
      { name: "Casey White", role: "Frontend Developer", github: "https://github.com/caseyw" },
    ],
  },
];
