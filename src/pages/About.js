import React from "react";
import "./about.scss";

function About() {
  return (
    <div className="about-container">
      <div className="about-glass-effect">
        <div className="profile">
          <img
            src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611731.jpg?t=st=1731213903~exp=1731217503~hmac=2e472d859757f06cd5c99b929320e069dac4e9ce4950bf079779f822609087bb&w=740"
            alt="profile Thumbnail"
            className="profile-image"
          />
        </div>
        <h1>About Me</h1>
        <p>
          Hi! I'm Manoj, a passionate developer with a love for creating
          intuitive and user-friendly web applications. With a strong foundation
          in both front-end and back-end technologies, I thrive in building
          innovative solutions. I'm always eager to learn new technologies and
          improve my skillset.
        </p>
        <p>
          When I'm not coding, Feel free to explore my portfolio and get in
          touch!
        </p>
        <button className="contact-btn">Contact Me</button>
      </div>
    </div>
  );
}

export default About;
