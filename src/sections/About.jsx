import "./About.css";
import {
  FaCode,
  FaLaptopCode,
  FaBrain,
  FaAward,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

function About() {
  return (
    <motion.section
      id="about"
      className="about"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="section-header">
        <span className="section-tag">ABOUT ME</span>

        <h2 className="section-title">
          Building Digital Experiences with Passion
        </h2>

        <p className="section-desc">
          I love creating modern web applications that combine beautiful
          design, clean code, and real-world functionality.
        </p>
      </div>

      <div className="about-content">

        <motion.div
          className="about-text-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >
          <h3>Hello 👋</h3>

          <p>
            I'm <span>Aayushi Agarwal</span>, a passionate
            <span> Full Stack Developer</span> pursuing B.Tech in Computer
            Science Engineering.
          </p>

          <p>
            I enjoy transforming ideas into modern web applications using
            React, Node.js, MongoDB and exploring AI-powered solutions.
          </p>

          <p>
            My goal is to build scalable, user-friendly products while
            continuously learning new technologies.
          </p>
        </motion.div>

      </div>

      <div className="about-grid">

        <motion.div
          className="about-card"
          whileHover={{ y: -12 }}
        >
          <FaCode />

          <h3>10+</h3>

          <p>Technologies</p>
        </motion.div>

        <motion.div
          className="about-card"
          whileHover={{ y: -12 }}
        >
          <FaLaptopCode />

          <h3>5+</h3>

          <p>Projects</p>
        </motion.div>

        <motion.div
          className="about-card"
          whileHover={{ y: -12 }}
        >
          <FaBrain />

          <h3>AI & Cloud</h3>

          <p>Continuous Learner</p>
        </motion.div>

        <motion.div
          className="about-card"
          whileHover={{ y: -12 }}
        >
          <FaAward />

          <h3>2</h3>

          <p>Hackathons</p>
        </motion.div>

      </div>
    </motion.section>
  );
}

export default About; 