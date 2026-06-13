import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="
      fixed top-0 w-full z-50
      bg-[#050816]/90
      backdrop-blur-md
      border-b border-cyan-500/20
      text-white
      "
    >
      <div className="max-w-7xl mx-auto px-8 py-5 flex
       justify-between items-center">

        <h1 className="text-3xl font-bold text-cyan-400">
          Khushi • MERN Developer
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg">
          {["About", "Skills", "Projects", "Services", "Contact"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="
                  hover:text-cyan-400
                  duration-300
                  "
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        {/* Mobile Icon */}
        <button
          className="md:hidden text-2xl text-cyan-400"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="
          md:hidden
          mx-4 mb-4
          rounded-3xl
          p-6
          bg-gradient-to-b
          from-[#101c42]
          border border-cyan-500/20
          shadow-[0_0_40px_rgba(0,255,255,.12)]
          flex flex-col
          items-center
          gap-5
          "
        >
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>

          <a href="#skills" onClick={() => setMenuOpen(false)}>
            Skills
          </a>

          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projects
          </a>

          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>

          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;