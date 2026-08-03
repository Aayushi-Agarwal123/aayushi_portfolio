import "./ScrollProgress.css";
import { useEffect, useState } from "react";

function ScrollProgress() {

  const [scroll,setScroll]=useState(0);

  useEffect(()=>{

    const onScroll=()=>{

      const total=document.documentElement.scrollHeight-window.innerHeight;

      const progress=(window.scrollY/total)*100;

      setScroll(progress);

    };

    window.addEventListener("scroll",onScroll);

    return ()=>window.removeEventListener("scroll",onScroll);

  },[]);

  return(

<div
className="scroll-progress"
style={{width:`${scroll}%`}}
></div>

  );

}

export default ScrollProgress;