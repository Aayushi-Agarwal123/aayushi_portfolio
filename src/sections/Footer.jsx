import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h2>Aayushi Agarwal</h2>

        <p>
          Full Stack Developer • AI Enthusiast • Building modern digital experiences.
        </p>

        <div className="footer-social">

          <a
            href="https://github.com/Aayushi-Agarwal123"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/aayushi-agarwal-961a47333"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

          <a href="mailto:aayushia971@gmail.com">
            <FaEnvelope />
          </a>

        </div>

        <div className="footer-line"></div>

        <p className="copyright">
          © 2026 Aayushi Agarwal. Crafted with React, Framer Motion & ❤️
        </p>

      </div>

      <a href="#hero" className="scroll-top">
        <FaArrowUp />
      </a>

    </footer>
  );
}

export default Footer;  