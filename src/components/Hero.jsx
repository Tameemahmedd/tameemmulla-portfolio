import React from 'react';

const Hero = () => (
  <section id="hero" className="hero-section">
    <div className="hero-text">
      <div className="greeting">Hello There!</div>
      
      <div className="code-block">
        <div className="dots">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <pre><code>
          <span className="punc">{'{'}</span>
          <br />
          {'  '}
          <span className="key">"about_me"</span>
          <span className="punc">: {'{'}</span>
          <br />
          {'    '}
          <span className="key">"name"</span>
          <span className="punc">: </span>
          <span className="string">"Mohammed Tameem Ahmed Mulla"</span>
          <span className="punc">,</span>
          <br />
          {'    '}
          <span className="key">"title"</span>
          <span className="punc">: </span>
          <span className="string">"Software Engineer"</span>
          <span className="punc">,</span>
          <br />
          {'    '}
          <span className="key">"focus"</span>
          <span className="punc">: </span>
          <span className="string">"Quality Engineering, Devops & Automation, Backend Development"</span>
          <br />
          {'  '}
          <span className="punc">{'}'}</span>
          <br />
          <span className="punc">{'}'}</span>
        </code></pre>
      </div>
      
      <div className="resume-buttons-container">
        {/* These links point to the renamed files in your 'public' folder */}
        {/* <a 
          href="/resume.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          View My Resume
        </a> */}
        <a 
          href="/resume-sdet.pdf" 
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          View My Resume
        </a>
      </div>
    </div>
  </section>
);

export default Hero;