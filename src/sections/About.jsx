import "./About.css";
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
          Passionate about building modern web applications, AI-powered
          solutions and scalable software with clean UI and real-world impact.
        </p>
      </div>

      <div className="about-content">

        {/* LEFT */}

        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <span className="about-subtitle">
            WHO I AM
          </span>

          <h2>
            Software Engineer
            <br />
            <span>& AI Enthusiast</span>
          </h2>

          <p>
            I'm <strong>Aayushi Agarwal</strong>, a Computer Science undergraduate
            passionate about developing scalable web applications, intelligent
            software and modern digital experiences.
          </p>

          <p>
            I enjoy transforming ideas into production-ready applications using
            React, Node.js, Python and cloud technologies while continuously
            learning AI and software engineering best practices.
          </p>

          <div className="about-focus">
            <span>⚛ React</span>
            <span>🚀 Node.js</span>
            <span>🤖 AI</span>
            <span>☁ Cloud</span>
            <span>🐍 Python</span>
            <span>💾 MongoDB</span>
          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <div className="info-card">

            <h3>Education</h3>

            <p>B.Tech Computer Science Engineering</p>

            <small>AKTU • Expected Graduation 2027</small>

          </div>

          <div className="info-card">

            <h3>Current Focus</h3>

            <ul>
  <li>🚀 AI Powered Applications</li>
  <li>💻 Full Stack Development</li>
  <li>☁️ Cloud Computing</li>
  <li>🧠 Problem Solving</li>
</ul>

          </div>

        </motion.div>

      </div>

      <div className="about-grid">

        <div className="about-card">
          <h2>2+</h2>
          <span>Projects</span>
        </div>

        <div className="about-card">
          <h2>10+</h2>
          <span>Technologies</span>
        </div>

        <div className="about-card">
          <h2>2</h2>
          <span>Hackathons</span>
        </div>

        <div className="about-card">
          <h2>AI</h2>
          <span>Focused</span>
        </div>

      </div>

    </motion.section>
  );
}

export default About;