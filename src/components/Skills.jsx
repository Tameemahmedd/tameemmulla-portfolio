import React from 'react';

const skills = [ "Java", "Basic SQL", "Basic Python", "Playwright", "TestNG", "Apache JMeter", "API Testing", "Spring Boot", "Spring Data JPA", "JUnit", "Apache Kafka", "Postman", "Maven", "JIRA", "Git", "GitHub", "Jenkins", "TeamCity", "HTML", "CSS", "MySQL", "Linux", "AWS", "Docker", "Ansible", "Splunk AppDynamics" ];
const extendedSkills = [...skills, ...skills]; // Duplicate for seamless loop

const Skills = () => (
  <section id="skills" className="skills-section">
    <div className="skills-ticker">
      <div className="ticker-content">
        {extendedSkills.map((skill, index) => <span key={index}>{skill}</span>)}
      </div>
    </div>
  </section>
);

export default Skills;