import React from 'react';

const Experience = () => (
  <section id="experience" className="container">
    <h2>EXPERIENCE & TIMELINE</h2>
    <div className="timeline">
      <div className="timeline-item">
        <div className="timeline-date">Aug 2024 – Present</div>
        <div className="timeline-content">
          <h3>Software Engineer Trainee @ Cisco Systems Inc</h3>
          <p>Bengaluru, India</p>
          <ul>
            <li>Developed 125 tests and refactored 102 legacy tests to achieve 100% pass rate.</li>
            <li>Identified and fixed 66 critical bugs including 21 release blockers within 8 months.</li>
            <li>Boosted test coverage by 25% and reduced manual testing with automation.</li>
            <li>Raised test pass percentage from 65% to 96% by redesigning the framework.</li>
            <li>Spearheaded testing and certification for full modules, executing automation.</li>
            <li>Developed reusable, high-quality utilities to automate manual tasks.</li>
            <li>Led performance engineering efforts for AppDynamics Controller 25.7 release.</li>
            <li>Received Connected Recognitions from leadership up to INR 38,000.</li>
          </ul>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-date">2019 – 2023</div>
        <div className="timeline-content">
          <h3>Bachelor of Technology in Computer Science and Engineering</h3>
          <p>Jawaharlal Nehru Technological University | CGPA: 7.52/10</p>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;