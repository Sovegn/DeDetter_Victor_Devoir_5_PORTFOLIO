import React from "react";
import "../css/Home.css";

const Home = () => {
  const skills = [
    { name: "HTML5", percentage: 90, color: "bg-red-500" },
    { name: "CSS3", percentage: 80, color: "bg-blue-400" },
    { name: "JAVASCRIPT", percentage: 70, color: "bg-yellow-400" },
    { name: "PHP", percentage: 60, color: "bg-green-600" },
    { name: "REACT", percentage: 50, color: "bg-blue-500" },
  ];

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Bonjour, je suis John Doe</h1>
          <h2>Développeur Web full stack</h2>
          <button className="cta-button">En savoir plus</button>
        </div>
      </div>

      <div className="main-content">
        <div className="content-grid">
          <div className="about-section">
            <h3 className="section-title">A propos</h3>
            <div className="profile-image">
              <img src="../assets/images/john-doe-about.jpg" alt="Profile" />
            </div>
            <div className="about-text">
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Optio, necessitatibus
                consectetur tempore perferendis nostrum, ex delectus recusandae impedit aut sunt
                enim placeat? Natus, neque at?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Optio, necessitatibus
                consectetur tempore perferendis nostrum, ex delectus recusandae impedit aut sunt
                enim placeat? Natus, neque at?</p>
            </div>
          </div>

          <div className="skills-section">
            <h3 className="section-title">Mes compétences</h3>
            <div className="skills-container">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className={`skill-progress ${skill.color}`}
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
