import { FaInstagram, FaLinkedin, FaDribbble, FaGithub } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      
      {/* 🔥 NAME */}
      <h2 className="footer-title">Suit Sangita Sahoo</h2>

      {/* 🔹 NAVIGATION */}
      <ul className="footer-nav">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* 🔹 SOCIAL ICONS */}
      <div className="footer-icons">
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaLinkedin /></a>
        <a href="#"><FaDribbble /></a>
        <a href="#"><FaGithub /></a>
      </div>

      {/* 🔹 COPYRIGHT */}
      <p className="footer-copy">
        © 2026 <span>Suit Sangita Sahoo</span> | All Rights Reserved
      </p>

    </footer>
  );
};

export default Footer;