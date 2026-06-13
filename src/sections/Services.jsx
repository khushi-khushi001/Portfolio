import { FaLaptopCode, FaServer, FaBug } from "react-icons/fa";

function Services() {

    const services = [
        {
            icon: <FaLaptopCode />,
            title: "Frontend Development",
            desc: "Responsive React.js interfaces with clean UI.",
        },

        {
            icon: <FaServer />,
            title: "MERN Full Stack",
            desc: "Scalable applications using MongoDB, Express and Node.",
        },

        {
            icon: <FaBug />,
            title: "Bug Fix & Optimization",
            desc: "Fix React.js and Node.js issues fast.",
        },

    ]
    return (
       <section id="services" 
        className="min-h bg-[#050816] text-white py-24 px-8">

            <h1 className="text-6xl font-bold text-center mb-12">
               Services
            </h1>

            <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

              {services.map((item, i) => (
                <div key={i}
                className="p-10 rounded-3xl bg-gradient-to-br
                from-[#101c42] border border-cyan-500/20
                hover:-translate-y-3 
                hover:shadow-[0_0_60px_rgba(0,255,255,.15)]
                duration-500">

                    <div className="text-5xl text-cyan-400 mb-6">
                        {item.icon}
                    </div>

                    <h2 className="text-2xl font-bold mb-4">
                        {item.title}
                    </h2>

                    <p className="text-gray-400">
                        {item.desc}
                    </p>
                </div>
              ))}
               
            </div>
        </section>
      );
}

export default Services;