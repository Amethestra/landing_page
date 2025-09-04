import React, { useState } from "react";
import AboutMe from "../components/portfolio/AboutMe";
import ProjectCard from "../components/portfolio/ProjectCard";
import ProjectModal from "../components/portfolio/ProjectModal";

const projects = [
  {
    title: "Portfolio Website",
    summary: "A sleek and interactive portfolio to showcase my work.",
    description:
      "A fully responsive and interactive portfolio site built with React, Next.js, and TailwindCSS. Features smooth animations, glassmorphism, and modern UI principles.",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    skills: ["Frontend Development", "UI/UX Design"],
    githubRepo: "https://github.com/username/portfolio",
    liveDemo: "https://portfolio-demo.com",
    screenshots: ["/screenshots/portfolio-1.png", "/screenshots/portfolio-2.png"],
  },
  {
    title: "E-Commerce Platform",
    summary: "A scalable web app with cart, payments, and authentication.",
    description:
      "A MERN stack e-commerce solution supporting user authentication, cart, and checkout functionality. Designed for scalability and security.",
    technologies: ["Node.js", "Express", "MongoDB"],
    skills: ["Backend Development", "Database Design", "Payment Integration"],
    githubRepo: "https://github.com/username/ecommerce",
    liveDemo: "https://ecommerce-demo.com",
    screenshots: [],
  },
  {
    title: "Game Prototype",
    summary: "A fun 2D platformer built with engaging mechanics.",
    description:
      "A Unity 2D prototype featuring custom physics, sprite animations, and level design experimentation.",
    technologies: ["Unity", "C#"],
    skills: ["Game Design", "C# Scripting"],
    screenshots: [],
  },
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-6">
      {/* Floating background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 left-1/4 w-72 h-72 bg-indigo-600 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-pink-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-16">
        {/* Hero */}
        <header>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-gray-300">
            Showcasing my journey, skills, and projects
          </p>
        </header>

        {/* About Me */}
        <section className="flex justify-center">
          <div className="max-w-lg w-full">
            <AboutMe />
          </div>
        </section>

        {/* Projects */}
        <section className="flex flex-col items-center gap-8 max-w-4xl mx-auto px-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </section>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
