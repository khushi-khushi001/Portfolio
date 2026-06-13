import SectionWrapper from "../components/SectionWrapper";

function About() {
  return (

    <section
      id="about"
      className="
      bg-[#050816]
      text-white
      py-24
      px-6
      "
    >
      <h1 className="text-6xl font-bold text-center mb-16">
        About Me
      </h1>

      <div
        className="
        max-w-5xl
        mx-auto
        p-10
        md:p-14
        rounded-3xl
        bg-gradient-to-b
        from-[#101c42]
        border
        border-cyan-500/20
        hover:shadow-[0_0_60px_rgba(0,255,255,.12)]
        duration-500
        "
      >
        <p
          className="
          text-gray-400
          text-lg
          leading-9
          text-center
          "
        >
          I'm a <span className="text-cyan-400 font-semibold">
            MERN Stack Developer
          </span>{" "}
          passionate about building modern web applications. I specialize in
          React.js, Node.js, Express.js and MongoDB.

          <br />
          <br />

          I have built projects like an
          <span className="text-white font-medium">
            {" "}AI-powered Video Conferencing Platform (Collab AI)
          </span>
          {" "}and a
          <span className="text-white font-medium">
            {" "}Role-Based Bug Tracker System
          </span>.
          My focus is on creating responsive, scalable and user-friendly
          applications with clean code and intuitive user experiences.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div
            className="
            text-center
            p-6
            rounded-2xl
            bg-[#16213e]
            "
          >
            <h3 className="text-3xl font-bold text-cyan-400">
              10+
            </h3>
            <p className="text-gray-400 mt-2">
              Projects Completed
            </p>
          </div>

          <div
            className="
            text-center
            p-6
            rounded-2xl
            bg-[#16213e]
            "
          >
            <h3 className="text-3xl font-bold text-cyan-400">
              MERN
            </h3>
            <p className="text-gray-400 mt-2">
              Full Stack Expertise
            </p>
          </div>

          <div
            className="
            text-center
            p-6
            rounded-2xl
            bg-[#16213e]
            "
          >
            <h3 className="text-3xl font-bold text-cyan-400">
              100%
            </h3>
            <p className="text-gray-400 mt-2">
              Client Satisfaction
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;