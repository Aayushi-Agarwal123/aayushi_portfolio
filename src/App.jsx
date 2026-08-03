import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Loader from "./components/Loader";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

import ScrollProgress from "./sections/ScrollProgress";
import CursorGlow from "./sections/CursorGlow";
import LoadingScreen from "./sections/LoadingScreen";

function App() {

 /* const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);*/

 
  return (
    <>
      <CursorGlow />
      <ScrollProgress />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <LoadingScreen />
    </>
  );
}

export default App;