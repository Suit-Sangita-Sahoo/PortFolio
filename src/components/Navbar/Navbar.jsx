import { useState } from "react";
import { MdOutlineCloudDownload } from "react-icons/md";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skill", id: "skill" },
    { name: "Project", id: "project" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-lg shadow-lg z-50 border-b border-gray-800">
      
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* 🔹 Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide cursor-pointer 
        bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
          Sangita
        </h1>

        {/* 🔹 Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-lg font-medium text-gray-300">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer relative group transition"
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
              
              {/* Hover underline effect */}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* 🔹 Download Button */}
        <a
          href="/Sangita-FullstackResume.pdf"
          download="Sangita-Resume.pdf"
          className="hidden md:flex items-center gap-2 px-5 py-2 rounded-lg 
          bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg 
          hover:scale-105 hover:shadow-purple-500/50 transition-all duration-300"
        >
          <MdOutlineCloudDownload size={22} />
          Download CV
        </a>

        {/* 🔹 Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-gray-300"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* 🔹 Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-black border-t border-gray-800 px-6 pb-6 pt-4 space-y-4 text-lg font-medium text-gray-300">
          
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-cyan-400 transition py-1"
              onClick={() => scrollToSection(item.id)}
            >
              {item.name}
            </li>
          ))}

          <a
            href="/Sangita-Fullstack Resume1.pdf"
            download="Sangita-Fullstack Resume1.pdf"
            className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 
            text-white px-4 py-2 rounded-lg shadow hover:scale-105 transition justify-center"
          >
            <MdOutlineCloudDownload size={22} />
            Download CV
          </a>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;