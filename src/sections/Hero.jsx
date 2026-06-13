import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      id="home"
      className="
      min-h-screen
      bg-[#050816]
      text-white
      flex
      items-center
      justify-center
      px-6
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="
        max-w-5xl
        mx-auto
        text-center
        p-10
        md:p-16
        rounded-3xl
        bg-gradient-to-b
        from-[#101c42]
        border
        border-cyan-500/20
        shadow-[0_0_60px_rgba(0,255,255,.12)]
        "
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm{" "}
          <span className="text-cyan-400">
            Khushi
          </span>
        </h1>

        <TypeAnimation
          sequence={[
            "MERN Stack Developer",
            2000,
            "Frontend Developer",
            2000,
            "React.js Developer",
            2000,
            "Freelancer",
            2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          className="
          text-2xl
          md:text-4xl
          font-semibold
          text-cyan-400
          mb-6
          "
        />

        <p
          className="
          text-gray-400
          text-lg
          leading-8
          max-w-2xl
          mx-auto
          "
        >
          I build modern, responsive and scalable web applications
          using React.js, Node.js, Express.js and MongoDB.
          Passionate about creating beautiful user experiences
          and clean backend architectures.
        </p>

        <div className="flex justify-center gap-5 mt-10 flex-wrap">
          <a href="#projects">
            <button
              className="
              px-8 py-4
              bg-cyan-500
              rounded-xl
              font-semibold
              hover:scale-105
              duration-300
              "
            >
              View Projects
            </button>
          </a>

          <a href="/Resume.pdf"
          target="_blank"
          rel="noreferrer"
           className="
              px-8 py-4
              bg-cyan-500
              rounded-xl
              font-semibold
              hover:scale-105
              duration-300
              ">Resume</a>

          <a href="#contact">
            <button
              className="
              px-8 py-4
              rounded-xl
              border
              border-cyan-500
              text-cyan-400
              hover:bg-cyan-500
              hover:text-white
              duration-300
              "
            >
              Hire Me
            </button>
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;