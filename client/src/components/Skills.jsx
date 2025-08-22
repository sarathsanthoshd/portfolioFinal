import React from 'react';
// Import representative icons for each main domain
// Corrected to .jpg based on your folder structure
import codeIcon from '../assets/code-icon.jpg'; 
import frontendIcon from '../assets/frontend-icon.png';
import backendIcon from '../assets/backend-icon.jpg';
import databaseIcon from '../assets/database-icon.png';
import toolsIcon from '../assets/tools-icon.jpg';
import mlIcon from '../assets/ml-icon.png';

const skillsData = [
  {
    category: "Programming Languages",
    description: "Core languages for software development",
    icon: codeIcon,
    skills: ["C", "Java", "Python", "JavaScript"],
  },
  {
    category: "Frontend Technologies",
    description: "Modern web development frameworks and tools",
    icon: frontendIcon,
    skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
  },
  {
    category: "Backend Technologies",
    description: "Server-side development and API creation",
    icon: backendIcon,
    skills: ["Node.js", "Express.js", "RESTful APIs", "Flask"],
  },
  {
    category: "Databases",
    description: "Data storage and management systems",
    icon: databaseIcon,
    skills: ["MongoDB", "MySQL"],
  },
  {
    category: "Developer Tools",
    description: "Essential development and design tools",
    icon: toolsIcon,
    skills: ["Git", "VsCode", "Jupyter Notebook", "Canva"],
  },
  {
    category: "Machine Learning",
    description: "Data science and ML libraries",
    icon: mlIcon,
    skills: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Technical Skills</h2>
        <div className="skills-grid-main">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-category-card">
              <img src={category.icon} alt={category.category} className="category-icon" />
              <h3 className="category-title">{category.category}</h3>
              <p className="category-description">{category.description}</p>
              <ul className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;