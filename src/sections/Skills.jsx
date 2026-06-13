import React from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
} from "react-icons/si";

function Skills() {
  const skills = [
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS",
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiBootstrap />,
      name: "Bootstrap",
    },
  ];

  return (
    <section
      id="skills"
      className="bg-[#050816] text-white py-24 px-6"
    >
      <h2 className="text-6xl font-bold text-center mb-16">
        Skills
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="
            p-8
            rounded-3xl
            text-center
            bg-gradient-to-b
            from-[#101c42]
            border
            border-cyan-500/20
            hover:-translate-y-3
            hover:shadow-[0_0_60px_rgba(0,255,255,.15)]
            duration-500
            "
          >
            <div className="text-5xl text-cyan-400 mb-5 flex justify-center">
              {skill.icon}
            </div>

            <h3 className="text-xl font-semibold">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;