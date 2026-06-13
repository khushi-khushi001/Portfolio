function Stats() {
  const stats = [
    {
      number: "8+",
      title: "Projects Built",
    },
    {
      number: "MERN",
      title: "Stack Developer",
    },
    {
      number: "100%",
      title: "Responsive Design",
    },
    {
      number: "Open",
      title: "For Freelance",
    },
  ];

  return (
    <section
      className="
      bg-[#050816]
      text-white
      py-24
      px-6
      "
    >
      <h2 className="text-6xl font-bold text-center mb-16">
        Quick Stats
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        {stats.map((item, index) => (
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
            <h3 className="text-5xl font-bold text-cyan-400 mb-4">
              {item.number}
            </h3>

            <p className="text-gray-400 text-lg">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;