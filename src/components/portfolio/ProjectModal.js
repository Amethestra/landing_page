import React from "react";
import { motion } from "framer-motion";
import { X, ExternalLink, Github, Code2, Zap, Image as ImageIcon } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  const {
    title = "Untitled Project",
    summary,
    description,
    technologies = [],
    skills = [],
    screenshots = [],
    liveDemo,
    githubRepo,
  } = project;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Panel */}
      <motion.div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glassmorphism rounded-3xl glow-purple border border-white/10"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.8, y: 50 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 glassmorphism backdrop-blur-md rounded-t-3xl p-6 border-b border-white/10">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">{title}</h2>
              {(summary || description) && (
                <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                  {summary || description}
                </p>
              )}
            </div>
            <motion.button
              onClick={onClose}
              className="p-2 rounded-full bg-white/10 text-slate-400 hover:text-white hover:bg-white/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-6">
            {liveDemo && (
              <motion.a
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500 hover:bg-purple-600 text-white font-medium transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </motion.a>
            )}
            {githubRepo && (
              <motion.a
                href={githubRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-4 h-4" />
                View Code
              </motion.a>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-8">
          {/* Screenshots */}
          {screenshots.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ImageIcon className="w-5 h-5 text-purple-400" />
                <h3 className="text-xl font-semibold text-white">Screenshots</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {screenshots.map((src, i) => (
                  <motion.div
                    key={`${src}-${i}`}
                    className="rounded-xl overflow-hidden bg-slate-800/50"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Keeping <img> to avoid extra setup; Next/Image is fine too */}
                    <img
                      src={src}
                      alt={`${title} screenshot ${i + 1}`}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Overview */}
          {(description || summary) && (
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Project Overview</h3>
              <p className="text-slate-300 leading-relaxed text-lg">
                {description || summary}
              </p>
            </div>
          )}

          {/* Tech & Skills */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Technologies */}
            {technologies.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Code2 className="w-5 h-5 text-purple-400" />
                  <h3 className="text-xl font-semibold text-white">Technologies Used</h3>
                </div>
                <div className="space-y-2">
                  {technologies.map((tech) => (
                    <motion.div
                      key={tech}
                      className="px-4 py-2 rounded-lg bg-slate-800/50 text-slate-300 border border-slate-700"
                      whileHover={{
                        borderColor: "rgba(120, 43, 219, 0.5)",
                        backgroundColor: "rgba(120, 43, 219, 0.1)",
                      }}
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Skills */}
            {skills.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  <h3 className="text-xl font-semibold text-white">Skills Developed</h3>
                </div>
                <div className="space-y-2">
                  {skills.map((skill) => (
                    <motion.div
                      key={skill}
                      className="px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-300 border border-yellow-500/30"
                      whileHover={{ x: 4 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
