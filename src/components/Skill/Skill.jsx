import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaJs,
  FaNodeJs,
  FaDatabase,
  FaJava,
} from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { BsFiletypePhp } from "react-icons/bs";
import { SiSpringboot } from "react-icons/si";
import { SiSpringsecurity } from "react-icons/si";
import { SiOracle } from "react-icons/si";

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
    {name:"MVC",icon:<SiSpringsecurity />}
  ];

  const database = [{ name: "MySQL", icon: <FaDatabase /> },
        {name:"Oracle",icon:<SiOracle />}
  ];

  // Skill Card UI
  const renderCards = (skills) =>
    skills.map((s, i) => (
      <div
        key={i}
        className="
          flex items-center gap-4 p-5 
          rounded-xl shadow-md bg-white
          border border-gray-200
          hover:shadow-xl hover:scale-105 
          transition-all duration-300 
        "
      >
        <div className="text-4xl text-blue-600">{s.icon}</div>
        <p className="text-lg font-semibold text-gray-700">{s.name}</p>
      </div>
    ));

  return (
    <div id="skill" className="px-6 py-14 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        My Skills
      </h1>

      <div className="grid lg:grid-cols-3 gap-10">

        {/* FRONTEND BLOCK */}
        <div
          className="
            p-8 rounded-2xl bg-white shadow-lg border border-gray-200 
            hover:shadow-2xl hover:-translate-y-2 transition-all duration-300
          "
        >
          <h2 className="text-3xl font-semibold mb-6 text-blue-700 text-center">
            Frontend
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">{renderCards(frontend)}</div>
        </div>

        {/* BACKEND BLOCK */}
        <div
          className="
            p-8 rounded-2xl bg-white shadow-lg border border-gray-200 
            hover:shadow-2xl hover:-translate-y-2 transition-all duration-300
          "
        >
          <h2 className="text-3xl font-semibold mb-6 text-green-700 text-center">
            Backend
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">{renderCards(backend)}</div>
        </div>

        {/* DATABASE BLOCK */}
        <div
          className="
            p-8 rounded-2xl bg-white shadow-lg border border-gray-200 
            hover:shadow-2xl hover:-translate-y-2 transition-all duration-300
          "
        >
          <h2 className="text-3xl font-semibold mb-6 text-purple-700 text-center">
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
