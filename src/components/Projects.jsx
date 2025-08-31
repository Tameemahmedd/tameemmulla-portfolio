import React, { useState } from 'react'; // <-- Import useState

const projectData = [
  { title: "Alerting Tool (Cisco AppDynamics)", desc: "Automated generation, monitoring, and reporting of AppDynamics health rules across performance testing stages.", link: "https://github.com/Tameemahmedd" },
  { title: "Rezum", desc: "Resume builder website with customizable templates using Spring Boot, Spring Security, and Thymeleaf.", link: "https://github.com/Tameemahmedd/Rezum" },
  { title: "Tech Bay", desc: "Spring Boot e-commerce app with complete store functionalities (like Amazon).", link: "https://github.com/Tameemahmedd/Tech-Bay" },
  { title: "AI Text Summarizer App", desc: "Summarized long texts using Hugging Face APIs (Bart Large CNN). Integrated with Postman for seamless API calls.", link: "https://github.com/Tameemahmedd/AI-Text-Summarizer-App" },
  { title: "Prime Wallet", desc: "Spring Boot E-wallet app similar to Paytm Wallet.", link: "https://github.com/Tameemahmedd/Prime-Wallet" },
  { title: "Observability Dashboard", desc: "Created a lightweight AppDynamics/Grafana-like tool for monitoring microservices metrics with Prometheus + React.", link: "https://github.com/Tameemahmedd" },
  { title: "Multimodal Disaster Identification", desc: "Improved disaster tweet classification by combining textual + visual features.", link: "https://github.com/Tameemahmedd" },
  { title: "Distributed Job Scheduler", desc: "Built a scalable job scheduling system like Google Borg using Java + Kafka + Docker, capable of handling 100K+ jobs/day.", link: "https://github.com/Tameemahmedd" },
];

const Projects = () => {
  // Add state to track if the list is expanded
  const [isExpanded, setIsExpanded] = useState(false);

  // Determine which projects to show based on the state
  const projectsToShow = isExpanded ? projectData : projectData.slice(0, 6);

  // Function to toggle the state
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="projects" className="container">
      <h2>FEATURED PROJECTS</h2>
      <div className="project-grid">
        {/* Map over the projectsToShow array instead of the full data */}
        {projectsToShow.map((p, i) => (
          <a href={p.link} target="_blank" rel="noopener noreferrer" className="project-card" key={i}>
            <h4>{p.title}</h4><p>{p.desc}</p>
          </a>
        ))}
      </div>
      
      {/* Add the Show More/Less button */}
      <button onClick={toggleExpansion} className="expand-button">
        {isExpanded ? 'Show Less' : 'Show More'}
      </button>

    </section>
  );
};

export default Projects;