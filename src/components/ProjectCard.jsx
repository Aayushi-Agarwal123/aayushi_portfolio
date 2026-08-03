import "./ProjectCard.css";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <motion.div
      className="project-card"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
    >

      {/* Project Image */}

      <div className="project-image">
        <img
          src={project.image}
          alt={project.title}
        />

        <div className="image-overlay">
          <span>{project.status}</span>
        </div>
      </div>

      {/* Content */}

      <div className="project-content">

        <h3>{project.title}</h3>

        <div className="project-line"></div>

        <p>{project.description}</p>

        <div className="tech-stack">
          {project.tech.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-buttons">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            GitHub
          </a>

          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              <FiExternalLink />
              Live Demo
            </a>
          ) : (
            <span className="coming-soon">
              🚧 Coming Soon
            </span>
          )}

        </div>

      </div>

    </motion.div>
  );
}

export default ProjectCard;