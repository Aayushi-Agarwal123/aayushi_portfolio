import "./Hero.css";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import Buttons from "../components/Buttons";
import SocialLinks from "../components/SocialLinks";
import Avatar from "../components/Avatar";
import "./HeroParticles";


function Hero() {
  return (
    <section id="hero" className="hero" data-aos="fade-up">
        <div className="blur blur1"></div>
        <div className="blur blur2"></div>
        <div className="grid-bg"></div>

       <div className="floating-circle circle1"></div>
        <div className="floating-circle circle2"></div>
        <div className="floating-circle circle3"></div>

      {/* Left Side */}
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >

       

<div className="hero-content">

  <div className="hero-badge">
    <span className="status-dot"></span>
    Open to Software Engineering • Full Stack • AI Opportunities
  </div>

  <p className="hero-small">
    HELLO, I'M
  </p>

  <h1 className="hero-name">
    AAYUSHI
    <br />
    <span>AGARWAL</span>
  </h1>

  <div className="hero-type">
   <TypeAnimation
  sequence={[
    "Full Stack Developer",
    1800,
    "AI Application Developer",
    1800,
    "React • Node • Python",
    1800,
    "Building Intelligent Products",
    1800,
    "Cloud & Modern Web",
    1800,
  ]}
  wrapper="span"
  speed={55}
  repeat={Infinity}
/>   
  
  </div>

</div>

        <p className="description">
  I build modern, scalable and AI-powered web applications with a strong
  focus on performance, clean architecture and delightful user experience.
  Passionate about transforming innovative ideas into impactful digital
  products through React, Node.js, Python and Cloud technologies.
</p>
        <Buttons />

          
        

        <SocialLinks />

      </motion.div>

      {/* Right Side */}
      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        
          <Avatar />
    

      </motion.div>
      

    </section>
  );
}

   
export default Hero;
