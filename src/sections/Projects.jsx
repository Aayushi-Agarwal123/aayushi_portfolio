import "./Projects.css";
import projects from "../data/Project";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <section id="projects" className="projects" data-aos="fade-right">

      <div className="section-header">

  <span className="section-tag">
    MY WORK
  </span>

  <h2 className="section-title">
    Featured Projects
  </h2>

  <p className="section-desc">
    A collection of projects showcasing my expertise in Full Stack Development,
    AI-powered applications, and modern web technologies.
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

    </section>
  );
}

export default Projects;