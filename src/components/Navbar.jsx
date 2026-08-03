import "./Navbar.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <span className="logo-dot"></span>
        AAYUSHI
      </div>

      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="nav-right">

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

    </nav>
  );
}

export default Navbar;