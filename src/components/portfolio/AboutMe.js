import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Code, Coffee } from "lucide-react";

export default function AboutMe() {
  const contactLinks = [
    { icon: Github,  href: "https://github.com/username",          label: "GitHub",   color: "hover:text-white" },
    { icon: Linkedin, href: "https://linkedin.com/in/username",     label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: Mail,    href: "mailto:your.email@example.com",        label: "Email",    color: "hover:text-purple-400" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="glassmorphism rounded-2xl p-8 glow-purple max-w-2xl w-full mx-auto border border-white/10"
    >
      {/* Profile */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
          <Code className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-white">Alex Developer</h2>
          <div className="flex items-center gap-1 text-slate-400 text-sm">
            <MapPin className="w-3 h-3" />
            San Francisco, CA
          </div>
        </div>
      </div>

      {/* Bio */}
      <p className="text-slate-300 text-sm leading-relaxed mb-6">
        Full-stack developer passionate about creating beautiful, functional web applications.
        Specialized in React, Node.js, and modern web technologies.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center p-3 rounded-xl bg-white/5">
          <div className="text-2xl font-bold text-purple-400">50+</div>
          <div className="text-xs text-slate-400">Projects</div>
        </div>
        <div className="text-center p-3 rounded-xl bg-white/5">
          <div className="text-2xl font-bold text-purple-400">3+</div>
          <div className="text-xs text-slate-400">Years Exp</div>
        </div>
      </div>

      {/* Core Skills */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-white mb-3">Core Skills</h3>
        <div className="flex flex-wrap gap-2">
          {["React", "Node.js", "TypeScript", "Python", "AWS"].map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Connect */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-white">Connect</h3>
        <div className="flex gap-3">
          {contactLinks.map(({ icon: Icon, href, label, color }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-lg bg-white/5 text-slate-400 transition-all duration-300 ${color}`}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-4 h-4" />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Divider + Tagline */}
      <motion.div
        className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-slate-400 text-xs"
        animate={{ opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Coffee className="w-3 h-3 text-yellow-500" />
        <span>Fueled by coffee and curiosity</span>
      </motion.div>
    </motion.div>
  );
}
