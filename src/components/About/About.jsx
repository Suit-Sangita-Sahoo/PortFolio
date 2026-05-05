import "./About.css";
import { PiMouseScroll } from "react-icons/pi";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Project from "../Projects/Project";

const About = () => {
  // Skills arrays
  const frontendSkills = ["HTML", "CSS", "Bootstrap", "JavaScript", "React"];
  const backendSkills = ["Java", "Servlets", "JSP", "Spring Boot (Basics)"];
  const databaseSkills = ["Oracle", "MySQL"];

  return (
    <div id="about">
      <div id="section">
        <div id="btn">
          <button>
            <PiMouseScroll /> Scroll Down
          </button>
        </div>
        <div id="aboutme">
          <h1>About Me</h1>

          <div className="about-container">
            <div className="intro-card">
              <h2>My Introduction</h2>
              <p>
                I am a software developer skilled in <b>Core Java, Web Development (HTML, CSS, JavaScript)</b>, and backend frameworks like <b>Servlets, JSP, and Spring Boot</b>. 
                I also have strong knowledge of <b>databases such as Oracle and MySQL</b>, along with experience in <b>REST API development, MVC architecture, and OOPs concepts</b>.
              </p>
              <a
  href="/Sangita-Fullstack Resume1.pdf"
  download="Sangita-Fullstack Resume1.pdf"
  className="flex items-center gap-2  text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
>
              <button className="cv-btn">Download CV <FaCloudDownloadAlt /></button>
              </a>
            </div>
            <div className="skills">
              <div>
                <h3>Frontend</h3>
                {frontendSkills.map((skill) => (
                  <span>{skill}</span>
                ))}
              </div>

              <div>
                <h3>Backend</h3>
                {backendSkills.map((skill) => (
                  <span>{skill}</span>
                ))}
              </div>

              <div>
                <h3>Database</h3>
                {databaseSkills.map((skill) => (
                  <span>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="project">
      {/* <Project/> */}
      </div>
    </div>
  );
};

export default About;
