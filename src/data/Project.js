import aiResumeImage from "../assets/AI-RESUME-IMAGE.png";

const projects = [
  {
    title: "AI Resume Screening Tool",
    status: "Featured",
    description:
      "An AI-powered application that analyzes resumes against job descriptions, calculates ATS scores, extracts skills, and provides personalized recommendations.",
    tech: [ "React.js","Typescript", "Python", "NLP"],
    github: "https://github.com/Aayushi-Agarwal123/AI-Resume-Screener",
    demo: "https://ai-resume-screener-ynpp.onrender.com",
    image: aiResumeImage,
  },

  {
    title: "InterviewVerseAI",
    status: "Under Development",
    description:
      "An AI-powered interview and collaboration platform with video calling, AI interview assistance, and smart meeting features.",
    tech: ["React", "Node.js", "Socket.io", "WebRTC", "MongoDB"],
    github: "https://github.com/Aayushi-Agarwal123/InterviewVerseAI",
    demo: "",
    image: "/projects/smartmeet.png",
  },

  
];

export default projects;