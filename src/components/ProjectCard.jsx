import "./ProjectCard.css";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function ProjectCard({ project }) {
  return (
    <div
  className="project-card"
  onMouseMove={(e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    card.style.setProperty(
      "--x",
      `${e.clientX - rect.left}px`
    );

    card.style.setProperty(
      "--y",
      `${e.clientY - rect.top}px`
    );
  }}
>

      <div className="project-image">
        <img
          src={project.image}
          alt={project.title}
/>
      </div>

      <div className="project-content">

        <span className={`status ${project.status.toLowerCase().replace(/\s+/g, "-")}`}>
          {project.status}
        </span>

        <h3>{project.title}</h3>

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

    </div>
  );
}

export default ProjectCard;