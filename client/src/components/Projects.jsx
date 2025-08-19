import React from 'react';
import iplImage from '../assets/ipl.png'; // Assuming you have an image for IPL project

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <img src={iplImage} alt="IPL Score Prediction" />
            <div className="project-info">
              <h3>IPL SCORE PREDICTION</h3>
              <a href="https://iplscorepred25.streamlit.app" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>

          <div className="project-card">
            {/* Replace with a Food Website image if available, otherwise use a placeholder */}
            <img src="https://via.placeholder.com/280x200?text=Food+Website" alt="Food Website" />
            <div className="project-info">
              <h3>Food Website</h3>
              <a href="https://github.com/sarathsanthoshd/Food-website" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
          {/* Add more project cards as needed */}
            <div className="project-card">
            {/* Replace with a Food Website image if available, otherwise use a placeholder */}
            <img src="https://via.placeholder.com/280x200?text=Food+Website" alt="DSA" />
            <div className="project-info">
              <h3>DSA Project</h3>
              <a href="https://github.com/sarathsanthoshd/Food-website" target="_blank" rel="noopener noreferrer">View Code</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;