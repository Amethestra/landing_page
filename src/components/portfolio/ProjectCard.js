import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Zap } from "lucide-react";

export default function ProjectCard({ project, onClick }) {
  const { title, summary, description, technologies = [], skills = [] } = project || {};

  return (
    <motion.div
      className="relative w-full max-w-3xl mx-auto mb-6 cursor-pointer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick || (() => {})}
    >
      {/* Main Card */}
      <div className="relative glassmorphism rounded-2xl p-8 glow-purple transition-all duration-500 w-full min-h-[350px] flex flex-col justify-between">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-200 transition-colors duration-300">
              {title || "Untitled Project"}
            </h3>
            <p className="text-slate-400 leading-relaxed">
              {summary || description || "No summary provided."}
            </p>
          </div>
          <motion.div
            className="p-3 rounded-full bg-purple-500/15 text-purple-300 transition-all duration-300"
            whileHover={{ rotate: 45 }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </div>

        {/* Technologies */}
        {technologies.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <Code2 className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-white">Technologies</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full bg-slate-800/50 text-slate-300 border border-slate-700 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 4 && (
                <span className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  +{technologies.length - 4} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Skills Gained */}
        {skills.length > 0 && (
          <div className="mb-2">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-white">Skills Gained</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 border border-yellow-500/30"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Hover hint */}
        <motion.div
          className="absolute bottom-4 right-4 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ x: 10 }}
          animate={{ x: 0 }}
        >
          Click to explore →
        </motion.div>
      </div>
    </motion.div>
  );
}
