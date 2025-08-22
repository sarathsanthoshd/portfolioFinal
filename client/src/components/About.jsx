import React from 'react';
 // Assuming you'll use the same image or provide another for about section

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h1 class="aboutme">About Me</h1>
        <br/>
        <div className="about-grid">
          <div className="about-content">
            <p>
              Passionate B.Tech student in Artificial Intelligence and Data Science with hands-on experience in machine learning, data analysis, and Python-based development. Skilled in building smart models, solving real-world problems, and continuously learning emerging technologies. Learning stage in DSA and interest in AI-driven solutions. Actively working on impactful projects and certifications to grow in the tech industry.
            </p>
            <div className="about-details">
              <p><strong>Education:</strong> B.Tech in Artificial Intelligence & Data Science</p>
              <p><strong>College:</strong> Sagi Rama Krishanam Raju Engineering College, Bhimavaram</p>
              <p><strong>Expected Graduation:</strong> April, 2027</p>
              <p><strong>Current CGPA:</strong> 8.73/10</p>
              <p><strong>Relevant Courses:</strong> Machine Learning, Data Structures & Algorithms, Python Programming, Java, Web Development, Database Management Systems</p>
              <p><strong>Email:</strong> sarathsanthoshd@gmail.com</p>
              <p><strong>Phone:</strong> +91 9391650219</p>
            </div>
            <div className="interests">
              <h3>Interests</h3>
              <span>Traveling</span>
              <span>Cooking</span>
              <span>Music</span>
              <span>Sports</span>
            </div>
            <div className="languages">
              <h3>Languages</h3>
              <p> English, Hindi, Telugu</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;