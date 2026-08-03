import "./Projects.css";
import projects from "../data/Project";
import ProjectCard from "../components/ProjectCard";
import { motion } from "framer-motion";
import { fadeUp } from "../utils/animations";

function Projects() {
  return (
    <motion.section
      id="projects"
      className="projects"
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >

      <div className="section-header">

        <span className="section-tag">
          Things I've Built
        </span>

        <h2 className="section-title">
          Featured Projects
        </h2>

        <p className="section-desc">
          A collection of projects showcasing my expertise in Full Stack
          Development, AI-powered applications, and modern web technologies.
        </p>

      </div>

      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </div>

    </motion.section>
  );
}

export default Projects;