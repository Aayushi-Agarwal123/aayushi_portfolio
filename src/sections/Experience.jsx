import "./Experience.css";

const experiences = [
  {
    title: "Google Skills Arcade 2025",
    company: "Google Cloud",
    duration: "2025",
    description:
      "Completed hands-on labs in Google Cloud, Docker, Kubernetes, IAM, Cloud Storage and AI services while earning cloud skill badges."
    
  },

  {
    title: "Full Stack Developer Intern",
    company: "Remote Internship",
    duration: "Feb - April 2026",
    description:
      "Built responsive web applications using React.js, Node.js, Express.js, MongoDB and REST APIs. Worked on frontend, backend and database integration."
  },

  
];

function Experience() {
  return (
    <section id="experience" className="experience">

      <h2 className="section-title">
        Experience
      </h2>

      <div className="timeline">

        {experiences.map((item, index) => (
          <div className="timeline-item" key={index}>

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span className="duration">
                {item.duration}
              </span>

              <h3>{item.title}</h3>

              <h4>{item.company}</h4>

              <p>{item.description}</p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Experience;