import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import collabAI from "../assets/Collab-AI.jpeg";
import bugTracker from "../assets/Bug tracker system.jpeg";

function Projects() {
  const projects = [
    {
      title: "Collab AI",
      image: collabAI,
      description:
        "Modern Zoom-style collaboration platform with video conferencing, mute/unmute controls, chat, screen sharing, participant management, hand raise, meeting recording, AI-generated meeting summaries, meeting history tracking, and real-time collaboration features.",
      tech: "React • Node.js • Express • MongoDB • WebRTC • Socket.io",
      live: "https://collab-ai-vc0h.onrender.com",
      github: "https://github.com/khushi-khushi001/Collab-AI",
    },

    {
      title: "Bug Tracker System",
      image: bugTracker,
      description:
        "Role-based bug management platform where admins can create and assign bugs, while developers can update status, resolve issues, search bugs, and track progress in real time.",
      tech: "React • Node.js • Express • MongoDB",
      live: "https://bug-tracker-z8mr.onrender.com",
      github: "https://github.com/khushi-khushi001/Bug-Tracker",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-[#050816] text-white py-24 px-6"
    >
      <h2 className="text-6xl font-bold text-center mb-16">
        My Projects
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="
            rounded-3xl
            overflow-hidden
            bg-gradient-to-b
            from-[#101c42]
            border
            border-cyan-500/20
            hover:-translate-y-3
            hover:shadow-[0_0_60px_rgba(0,255,255,.15)]
            duration-500
            "
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="
              w-full
              h-auto
              object-contain
              hover:scale-105
              duration-500
              "
            />

            {/* Content */}
            <div className="p-8">
              <h3 className="text-3xl font-bold text-cyan-400 mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 leading-7 mb-6">
                {project.description}
              </p>

              <div
                className="
                bg-[#16213e]
                p-3
                rounded-xl
                text-cyan-300
                text-sm
                mb-6
                "
              >
                {project.tech}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 flex-wrap">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="
                    flex items-center gap-2
                    px-5 py-3
                    bg-cyan-500
                    rounded-xl
                    font-medium
                    hover:scale-105
                    duration-300
                    "
                  >
                    <FiExternalLink />
                    Live Demo
                  </button>
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className="
                    flex items-center gap-2
                    px-5 py-3
                    border
                    border-cyan-500
                    rounded-xl
                    text-cyan-400
                    hover:bg-cyan-500
                    hover:text-white
                    duration-300
                    "
                  >
                    <FaGithub />
                    GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;