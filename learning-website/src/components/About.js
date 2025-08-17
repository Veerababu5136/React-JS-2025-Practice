import React from "react";

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Me</h1>
      <div className="about-card">
        <p>
          Hi 👋, I’m <span className="highlight">Sreesailam Veera Babu</span>, a passionate learner and developer.
        </p><br></br><br></br>
        <p>
          🚀 Skilled in <span className="highlight">React.js, Spring Boot, MySQL</span> and always exploring new technologies.
        </p><br></br><br></br>
        <p>
          💡 I enjoy building <span className="highlight">web applications</span> with clean UI and secure backends.
        </p><br></br><br></br>
        <p>
          📚 Continuous learning is my true happiness — I believe in upgrading skills every day.
        </p><br></br><br></br>
        <p>
          🌟 Some of my recent works include:
          <ul className="about-list">
            <li>✔️ React Weather App deployed with AWS & Netlify</li><br></br><br></br>
            <li>✔️ Spring Boot + JWT + React Integration Project</li><br></br><br></br>
            <li>✔️ My Diary App (Spring Boot + React + JWT + MySQL)</li><br></br><br></br>
          </ul>
        </p>
        <p>
          🔗 Connect with me on <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        </p><br></br><br></br>
      </div>
    </div>
  );
}

export default About;
