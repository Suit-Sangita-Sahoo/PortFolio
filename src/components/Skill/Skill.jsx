import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaDatabase,
  FaJava,
} from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { BsFiletypePhp } from "react-icons/bs";
import { SiSpringboot, SiSpringsecurity, SiOracle } from "react-icons/si";

const Skill = () => {
  const frontend = [
    { name: "React JS", icon: <FaReact /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3 /> },
    { name: "PHP", icon: <BsFiletypePhp /> },
  ];

  const backend = [
    { name: "Java", icon: <FaJava /> },
    { name: "Spring", icon: <BiLogoSpringBoot /> },
    { name: "SpringBoot", icon: <SiSpringboot /> },
    { name: "MVC", icon: <SiSpringsecurity /> },
  ];

  const database = [
    { name: "MySQL", icon: <FaDatabase /> },
    { name: "Oracle", icon: <SiOracle /> },
  ];

  // 🔥 Skill Card UI
  const renderCards = (skills) =>
    skills.map((s, i) => (
      <div
        key={i}
        className="
          flex items-center gap-4 p-5 
          rounded-xl 
          bg-[#111] border border-[#222]
          hover:shadow-[0_0_20px_cyan]
          hover:scale-105 
          transition-all duration-300
        "
      >
        <div className="text-4xl text-cyan-400">{s.icon}</div>
        <p className="text-lg font-semibold text-gray-200">{s.name}</p>
      </div>
    ));

  return (
    <div
      id="skill"
      className="px-6 py-16 bg-black min-h-screen text-white"
    >
      {/* 🔥 Heading */}
      <h1
        className="
          text-4xl font-bold text-center mb-12
          bg-gradient-to-r from-cyan-400 to-purple-500
          bg-clip-text text-transparent
        "
      >
        My Skills
      </h1>

      <div className="grid lg:grid-cols-3 gap-10">

        {/* 🔹 FRONTEND */}
        <div
          className="
            p-8 rounded-2xl 
            bg-[#111] border border-[#222]
            hover:shadow-[0_0_25px_cyan]
            hover:-translate-y-2 
            transition-all duration-300
          "
        >
          <h2 className="text-3xl font-semibold mb-6 text-center text-cyan-400">
            Frontend
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {renderCards(frontend)}
          </div>
        </div>

        {/* 🔹 BACKEND */}
        <div
          className="
            p-8 rounded-2xl 
            bg-[#111] border border-[#222]
            hover:shadow-[0_0_25px_purple]
            hover:-translate-y-2 
            transition-all duration-300
          "
        >
          <h2 className="text-3xl font-semibold mb-6 text-center text-purple-400">
            Backend
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {renderCards(backend)}
          </div>
        </div>

        {/* 🔹 DATABASE */}
        <div
          className="
            p-8 rounded-2xl 
            bg-[#111] border border-[#222]
            hover:shadow-[0_0_25px_pink]
            hover:-translate-y-2 
            transition-all duration-300
          "
        >
          <h2 className="text-3xl font-semibold mb-6 text-center text-pink-400">
            Database
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {renderCards(database)}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Skill;