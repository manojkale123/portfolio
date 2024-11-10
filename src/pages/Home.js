import React from "react";
import "./home.scss";

function Home() {
  return (
    <div className="home">
      <div className="glass-effect">
        <div className="profile">
          <img
            src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1731212776~exp=1731216376~hmac=43b21b20b82a23fdc6161a6e9519e7084d83273828a22887a037212a53029761&w=740"
            alt="profile Thumbnail"
            className="profile-image"
          />
        </div>
        <h1>Welcome to My Portfolio</h1>
        <p>
          Hi! I'm Manoj, a passionate developer and designer. Explore my work,
          learn more about my background, and see the exciting projects I've
          worked on.
        </p>
        <button className="explore-btn">Explore Projects</button>
      </div>
    </div>
  );
}

export default Home;
