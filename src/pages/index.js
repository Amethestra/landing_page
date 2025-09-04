import React, { useState } from "react";
import AboutMe from "../components/portfolio/AboutMe";
import ProjectCard from "../components/portfolio/ProjectCard";
import ProjectModal from "../components/portfolio/ProjectModal";

const projects = [
  {
    title: "Weather Animation App",
    summary: "A sleek, animated weather dashboard that pulls real-time data with responsive visuals",
    description: "This app displays real-time weather conditions with animated effects such as rain, snow, or thunder storm",
    technologies: ["React", "TailwindCSS", "OpenWeather API", "Framer Motion"],
    skills: ["API Integration", "Frontend Animation", "Responsive Design"],
    githubRepo: "https://github.com/username/portfolio",
    liveDemo: "https://portfolio-demo.com",
    screenshots: ["/screenshots/portfolio-1.png", "/screenshots/portfolio-2.png"],
  },
  {
    title: "Pixel Art Editor",
    summary: "A browser-based pixel art editor with export and undo/redo features.",
    description: "A lightweight web app for creating and editing pixel art sprites. Features a grid-based canvas, color palette, bucket fill, and the ability to export artwork as PNG files.",
    technologies: ["React", "TailwindCSS", "Canvas API"],
    skills: ["Frontend Development", "Canvas Rendering", "State Management", "UI/UX"],
    githubRepo: "https://github.com/yourusername/pixel-art-editor",
    liveDemo: "https://pixel-editor-demo.vercel.app",
    screenshots: ["/images/pixel-1.png", "/images/pixel-2.png"]
  },
  {
    title: "Pathfinding Visualizer",
    summary: "A C++ desktop app that visualizes A*, Dijkstra, and BFS/DFS algorithms.",
    description: "This project demonstrates classic pathfinding algorithms in an interactive grid environment. Built with C++ and SFML, users can place walls, set start/end points, and watch algorithms solve the maze in real-time.",
    technologies: ["C++", "SFML"],
    skills: ["Algorithm Design", "C++ Development", "Data Structures", "Problem Solving"],
    githubRepo: "https://github.com/yourusername/pathfinding-visualizer",
    liveDemo: "",
    screenshots: ["/images/pathfinding-1.png", "/images/pathfinding-2.png"]
  },
  {
    title: "Chess Engine + GUI",
    summary: "A C++ chess engine with a custom-built SFML user interface.",
    description: "Implements Minimax with Alpha-Beta pruning for move calculation, alongside a FEN-based board system. Includes a simple GUI to play against the engine, view legal moves, and track captures.",
    technologies: ["C++", "SFML"],
    skills: ["Game AI", "Algorithm Optimization", "C++ Programming", "UI Design"],
    githubRepo: "https://github.com/yourusername/chess-engine",
    liveDemo: "",
    screenshots: ["/images/chess-1.png", "/images/chess-2.png"]
  },
  {
    title: "WebAssembly Demo Hub",
    summary: "A showcase of React + C++ integration using WebAssembly.",
    description: "A hub of interactive demos compiled from C++ to WebAssembly and displayed within a React frontend. Includes math visualizations, small simulations, and lightweight C++ utilities.",
    technologies: ["React", "WebAssembly", "C++", "TailwindCSS"],
    skills: ["WebAssembly", "React-C++ Integration", "Systems Programming", "Frontend Development"],
    githubRepo: "https://github.com/yourusername/wasm-demo-hub",
    liveDemo: "https://wasm-demo-hub.vercel.app",
    screenshots: ["/images/wasm-1.png", "/images/wasm-2.png"]
  },
  {
    title: "Leaderboard System",
    summary: "A lightweight leaderboard system with persistent storage.",
    description: "A small but scalable project to manage leaderboards for games or apps. Includes player authentication, score submission, sorting, and retrieval through a RESTful API backend.",
    technologies: ["Node.js", "Express", "MongoDB", "React"],
    skills: ["Backend Development", "Database Design", "API Integration", "Full-Stack Development"],
    githubRepo: "https://github.com/yourusername/leaderboard-system",
    liveDemo: "https://leaderboard-demo.vercel.app",
    screenshots: ["/images/leaderboard-1.png", "/images/leaderboard-2.png"]
  }
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
