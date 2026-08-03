import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";

import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
} from "react-icons/si";

function SkillIcon({ name }) {
  switch (name) {
    case "React.js":
      return <FaReact />;
    case "HTML5":
      return <FaHtml5 />;
    case "CSS3":
      return <FaCss3Alt />;
    case "JavaScript":
      return <FaJs />;
    case "Tailwind CSS":
      return <SiTailwindcss />;
    case "Node.js":
      return <FaNodeJs />;
    case "Express.js":
      return <SiExpress />;
    case "MongoDB":
      return <SiMongodb />;
    case "MySQL":
      return <SiMysql />;
    case "Java":
      return <FaJava />;
    case "Python":
      return <FaPython />;
    case "Git":
      return <FaGitAlt />;
    case "GitHub":
      return <FaGithub />;
    case "Docker":
      return <FaDocker />;
    case "AWS (Learning)":
      return <span>☁️</span>;
    default:
      return null;
  }
}

export default SkillIcon;