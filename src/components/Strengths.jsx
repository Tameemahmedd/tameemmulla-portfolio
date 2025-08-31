import React from 'react';

const strengths = [ "Public Speaking", "Logical Thinking", "Flexibility", "Detail Oriented", "Decision Making" ];

const Strengths = () => (
  <section id="strengths" className="container">
    <h2>STRENGTHS</h2>
    <div className="strengths-list">
      {strengths.map((s, i) => <span key={i}>{s}</span>)}
    </div>
  </section>
);

export default Strengths;