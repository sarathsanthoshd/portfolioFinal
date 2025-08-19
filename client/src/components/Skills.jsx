import React from 'react';
import javaIcon from '../assets/java.png';
import htmlIcon from '../assets/html.png';
import jsIcon from '../assets/javascript.png';
import cssIcon from '../assets/css.png';

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-card">
            <img src={javaIcon} alt="Java" className="skill-icon" />
            <h4>Java</h4>
            <span className="level-label">Coding</span>
          </div>
          <div className="skill-card">
            <img src={htmlIcon} alt="HTML" className="skill-icon" />
            <h4>HTML</h4>
            <span className="level-label">Web Development</span>
          </div>
          <div className="skill-card">
            <img src={cssIcon} alt="CSS" className="skill-icon" />
            <h4>CSS</h4>
            <span className="level-label">Web Development</span>
          </div>
          <div className="skill-card">
            <img src={jsIcon} alt="JavaScript" className="skill-icon" />
            <h4>JavaScript</h4>
            <span className="level-label">Web Development</span>
          </div>
          <div className="skill-card">
            {/* Replace with a Python icon if available, otherwise use a placeholder */}
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" className="skill-icon" />
            <h4>Python</h4>
            <span className="level-label">Coding | Data Science | Machine Learning</span>
          </div>
          {/* Add more skills as needed */}
        </div>
      </div>
    </section>
  );
};

export default Skills;