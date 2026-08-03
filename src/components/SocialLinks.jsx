import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function SocialLinks() {
  return (
    <div className="social-links">
      <a
        href="https://github.com/Aayushi-Agarwal123"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/aayushi-agarwal-961a47333/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>

      <a href="mailto:aayushia971@gmail.com?subject=Portfolio Inquiry">
        <FaEnvelope />
      </a>
    </div>
  );
}

export default SocialLinks;