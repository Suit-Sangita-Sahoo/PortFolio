import React from "react";
import { DiReact } from "react-icons/di";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FcManager } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";
import { FcPortraitMode } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";

const Project = () => {
  const projects = [
    {
      title: "Food Ordering Website",
      tech: ["HTML", "CSS", "JavaScript"],
      description: "A complete online food ordering platform with cart & checkout.",
      details: "Select food items according to user choice and place orders.",
      icon: <i className="uil uil-utensils text-4xl text-cyan-400"></i>
    },
    {
      title: "Portfolio Website",
      tech: ["React", "Tailwind CSS"],
      description: "A personal interactive portfolio showcasing skills & projects.",
      details: "Includes authentication, JWT token, and update features.",
      icon: <i className="uil uil-user-circle text-4xl text-pink-400"></i>
    },
    {
      title: "React Learn Hub",
      tech: ["React", "Tailwind CSS"],
      description: "Concept-wise React notes for better understanding.",
      details: "Includes authentication and JWT token.",
      icon: <DiReact className="text-4xl text-blue-400" />
    },
    {
      title: "Teacher Dashboard Management",
      tech: ["React", "Tailwind CSS"],
      description: "System to manage teacher details and subjects.",
      details: "Authenticate and manage teacher records.",
      icon: <FaChalkboardTeacher className="text-4xl text-purple-400" />
    },
    {
      title: "Pharmacy Database System",
      tech: ["Java Servlet", "JSP", "MySQL"],
      description: "Manage medicine stock, billing, and updates.",
      details: "Supports CRUD operations, live search & secure login.",
      icon: <i className="uil uil-medical-square text-4xl text-green-400"></i>
    },
    {
      title: "Employee Management",
      tech: ["Java Servlet", "WebTech", "MySQL"],
      description: "Manage employee details easily.",
      details: "Employee data can be updated anytime.",
      icon: <FcManager className="text-4xl" />
    },
    {
      title:"Smart FoodWastage",
      tech:["React","TailWind CSS","JavaScript"],
      description:"User can know Which product destroy within how many days",
      details:"Product Expired date shows",
      icon:<FcCancel className="text-4xl" />
    },
    {
      title: "Profile Website",
      tech: ["React", "Tailwind CSS"],
      description: "A personal interactive profile showing user details.",
      details: "Registeration and Login is mandatory here.",
      icon: <FcPortraitMode className="text-4xl"/>
    },
    {
      title: "Resume Dashboard Creation",
      tech: ["React", "Tailwind CSS","NodeJs"],
      description: "After uploading Resume it analyze and create its  dashboard and also analyze.",
      details: "Resume verification occured here.",
      icon: <FcAbout className="text-4xl"/>
    },
  ];

  return (
    <div id="project" className="py-16 px-6 bg-black min-h-screen text-white">

      {/* 🔥 Heading */}
      <h1 className="text-4xl font-bold text-center mb-12 
        bg-gradient-to-r from-cyan-400 to-purple-500 
        bg-clip-text text-transparent">
        My Projects
      </h1>

      {/* 🔹 PROJECT GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="
              bg-[#111] border border-[#222] 
              rounded-2xl p-6 
              shadow-lg 
              hover:shadow-[0_0_25px_cyan] 
              hover:-translate-y-3 hover:scale-105
              transition-all duration-300
            "
          >
            {/* ICON */}
            <div className="flex justify-center mb-4">
              {project.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-2xl font-semibold text-center text-cyan-400">
              {project.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="mt-2 text-gray-300 text-center text-sm">
              {project.description}
            </p>

            {/* TECH STACK */}
            <div className="mt-4">
              <h4 className="font-semibold text-gray-200">Tech Used:</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((techItem, i) => (
                  <span
                    key={i}
                    className="
                      px-3 py-1 text-sm rounded-full 
                      bg-gradient-to-r from-cyan-500 to-purple-500 
                      text-white
                    "
                  >
                    {techItem}
                  </span>
                ))}
              </div>
            </div>

            {/* DETAILS */}
            <p className="mt-4 text-gray-400 text-sm">
              <span className="font-semibold text-gray-200">
                Additional Info:
              </span>{" "}
              {project.details}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;