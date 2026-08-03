import "./Contact.css";
import { useState } from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    setResult("Sending...");

    const formData = new FormData(event.target);

    formData.append(
      "access_key",
      "5f5974a4-6a6f-4f08-969d-d7f505164d3e"
    );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully! ✅");
      event.target.reset();
    } else {
      setResult("Something went wrong ❌");
    }
  };

  return (
    <section id="contact" className="contact" data-aos="fade-up">

      <div className="contact-header">
        <h2 className="section-title">
          Let's Create Something Meaningful
        </h2>

        <p className="contact-subtitle">
          I'm passionate about building modern web applications and AI-powered
          solutions. Whether it's a collaboration, internship, or full-time
          opportunity, I'd love to hear from you.
        </p>
      </div>

      <div className="contact-container">

        {/* Left Side */}

        <div className="contact-info">

          <div className="contact-card">
            <FaEnvelope className="contact-icon" />

            <div>
              <h3>Email</h3>

              <a href="mailto:aayushia971@gmail.com">
                aayushia971@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-card">
            <FaGithub className="contact-icon" />

            <div>
              <h3>GitHub</h3>

              <a
                href="https://github.com/Aayushi-Agarwal123"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Aayushi-Agarwal123
              </a>
            </div>
          </div>

          <div className="contact-card">
            <FaLinkedin className="contact-icon" />

            <div>
              <h3>LinkedIn</h3>

              <a
                href="https://www.linkedin.com/in/aayushi-agarwal-961a47333"
                target="_blank"
                rel="noopener noreferrer"
              >
                View LinkedIn Profile
              </a>
            </div>
          </div>

          <a
            href="/Aayushi_Agarwal_Resume.pdf"
            className="resume-btn"
            download
          >
            Download Resume
          </a>

        </div>

        {/* Right Side */}

        <form className="contact-form" onSubmit={onSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          />

          <button type="submit">
            Send Message →
          </button>

          <p className="form-result">
            {result}
          </p>

        </form>

      </div>

    </section>
  );
}

export default Contact;