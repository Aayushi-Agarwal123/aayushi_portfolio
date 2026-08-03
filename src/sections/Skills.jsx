import "./Skills.css";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaPython,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiTailwindcss,
  SiFirebase,
  SiPostman,
  SiVite,
} from "react-icons/si";

import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

function Skills() {
  return (
    <motion.section
      id="skills"
      className="skills"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="section-header">
        <span className="section-tag">MY SKILLS</span>

        <h2 className="section-title">
          Technologies I Work With
        </h2>

        <p className="section-desc">
          My tech stack for building modern web applications.
        </p>
      </div>

      <div className="skills-box">

        <div className="skill-row">
          <h3>Frontend</h3>

          <div className="skill-list">
            <span><FaReact /> React</span>
            <span><SiJavascript /> JavaScript</span>
            <span><FaHtml5 /> HTML5</span>
            <span><FaCss3Alt /> CSS3</span>
            <span><SiTailwindcss /> Tailwind</span>
          </div>
        </div>

        <div className="skill-row">
          <h3>Backend</h3>

          <div className="skill-list">
            <span><FaNodeJs /> Node.js</span>
            <span><SiExpress /> Express</span>
            <span><FaPython /> Python</span>
            <span><SiFirebase /> Firebase</span>
          </div>
        </div>

        <div className="skill-row">
          <h3>Database</h3>

          <div className="skill-list">
            <span><SiMongodb /> MongoDB</span>
            <span><SiMysql /> MySQL</span>
          </div>
        </div>

        <div className="skill-row">
          <h3>Tools</h3>

          <div className="skill-list">
            <span><FaGitAlt /> Git</span>
            <span><FaGithub /> GitHub</span>
            <span><SiPostman /> Postman</span>
            <span><FaDocker /> Docker</span>
            <span><SiVite /> Vite</span>
          </div>
        </div>

      </div>
    </motion.section>
  );
}

export default Skills;