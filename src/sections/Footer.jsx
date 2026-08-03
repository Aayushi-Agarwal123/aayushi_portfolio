import "./Footer.css";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h2>Aayushi Agarwal</h2>

        <p>
          Full Stack Developer • AI Enthusiast • Cloud Learner
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

        </div>

        <a href="#hero" className="back-top">
          <FaArrowUp />
        </a>

        <p className="copyright">
          © {new Date().getFullYear()} Aayushi Agarwal. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;