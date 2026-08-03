import avatar from "../assets/aayushi-ai-avatar.png";

function Avatar() {
  return (
    <div className="avatar-container">

      <div className="avatar-glow"></div>

      <div className="avatar-ring"></div>

      <div className="avatar-card">
        <img
          src={avatar}
          alt="Aayushi Agarwal AI Avatar"
          className="avatar-image"
        />
      </div>
      

      <div className="floating-badge">
        💻 Full Stack Developer | AI Explorer
      </div>

    </div>
  );
}

export default Avatar;