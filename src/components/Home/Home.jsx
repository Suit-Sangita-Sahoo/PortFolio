import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin, FiGithub } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";
import Logo from "./Logo";

const Home = () => {
  return (
    <div
      id="home"
      className="w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-10 bg-black"
    >
      
      {/* 🔹 LEFT SIDE */}
      <div id="main" className="flex-1 space-y-6">
        
        {/* Name Tag */}
        <h3 className="inline-block bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-2 rounded-full shadow-lg text-lg font-semibold">
          Suit Sangita Sahoo
        </h3>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          I'm
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600 mt-3">
            <TypeAnimation
              sequence={[
                "Frontend Developer", 2000,
                "ReactJs Developer", 2000,
                "Java Developer", 2000,
                "SpringBoot Developer", 2000,
              ]}
              speed={60}
              repeat={Infinity}
            />
          </span>
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-base md:text-lg max-w-[480px]">
          Enthusiastic full-stack developer experienced in crafting responsive user interfaces and robust backend systems for seamless web experiences.
        </p>

        {/* Social Icons */}
        <div id="logo">
          <ul className="flex gap-6 mt-4">
            
            <li className="w-12 h-12 rounded-full bg-gray-900 border border-gray-700 shadow-lg flex items-center justify-center hover:scale-110 hover:text-pink-500 hover:border-pink-500 transition-all duration-300">
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-xl text-gray-300" />
              </a>
            </li>

            <li className="w-12 h-12 rounded-full bg-gray-900 border border-gray-700 shadow-lg flex items-center justify-center hover:scale-110 hover:text-blue-500 hover:border-blue-500 transition-all duration-300">
              <a
                href="https://www.linkedin.com/in/suit-sangita-sahoo-b4b151338/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin className="text-xl text-gray-300" />
              </a>
            </li>

            <li className="w-12 h-12 rounded-full bg-gray-900 border border-gray-700 shadow-lg flex items-center justify-center hover:scale-110 hover:text-white hover:border-white transition-all duration-300">
              <a
                href="https://github.com/Suit-Sangita-Sahoo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub className="text-xl text-gray-300" />
              </a>
            </li>

          </ul>
        </div>
      </div>

      {/* 🔹 RIGHT SIDE */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0">
        <div className="bg-gradient-to-tr from-indigo-500 to-purple-600 p-1 rounded-full shadow-2xl">
          <div className="bg-black rounded-full p-3">
            <Logo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;