
import "./project.scss";

// Reusable ProjectCard component
function ProjectCard({ image, title, description, buttonText }) {
  
  return (
    <div className="project-card">
      <div className="glass-effect">
        <img src={image} alt="Project Thumbnail" className="project-image" />
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <button className="project-btn">{buttonText}</button>
      </div>
    </div>
  );
}

export default ProjectCard;
