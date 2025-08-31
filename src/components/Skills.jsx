import React, { useRef, useState, useEffect } from 'react';

const skills = [ "Java", "Basic SQL", "Basic Python", "Playwright", "TestNG", "Apache JMeter", "API Testing", "Spring Boot", "Spring Data JPA", "JUnit", "Apache Kafka", "Postman", "Maven", "JIRA", "Git", "GitHub", "Jenkins", "TeamCity", "HTML", "CSS", "MySQL", "Linux", "AWS", "Docker", "Ansible", "Splunk AppDynamics" ];

const AUTO_SCROLL_SPEED = 0.5;
const HOVER_SCROLL_SPEED = 3;

const Skills = () => {
  const scrollContainerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverDirection, setHoverDirection] = useState('none');
  const animationFrameId = useRef(null);

  useEffect(() => {
    let isRewinding = false;
    const scroll = () => {
      const el = scrollContainerRef.current;
      if (!el) return;

      if (isHovering) {
        if (hoverDirection === 'left') {
          el.scrollLeft -= HOVER_SCROLL_SPEED;
        } else if (hoverDirection === 'right') {
          el.scrollLeft += HOVER_SCROLL_SPEED;
        }
      } else if (!isRewinding) {
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth -1) {
          isRewinding = true;
          el.scrollTo({ left: 0, behavior: 'smooth' });
          setTimeout(() => { isRewinding = false; }, 1000);
        } else {
          el.scrollLeft += AUTO_SCROLL_SPEED;
        }
      }
      animationFrameId.current = requestAnimationFrame(scroll);
    };

    animationFrameId.current = requestAnimationFrame(scroll);
    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [isHovering, hoverDirection]);

  const handleMouseMove = (e) => {
    if (!scrollContainerRef.current) return;
    const { left, width } = scrollContainerRef.current.getBoundingClientRect();
    const mouseX = e.clientX;
    const leftZone = left + width * 0.2;
    const rightZone = left + width * 0.8;

    if (mouseX < leftZone) setHoverDirection('left');
    else if (mouseX > rightZone) setHoverDirection('right');
    else setHoverDirection('none');
  };

  return (
    <section id="skills" className="container">
      <h2>SKILLS</h2>
      <div 
        className="skills-scroller"
        ref={scrollContainerRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={handleMouseMove}
      >
        <div className="skills-list">
          {/* We now map over the original, non-duplicated array */}
          {skills.map((skill, index) => <span key={index}>{skill}</span>)}
        </div>
      </div>
    </section>
  );
};

export default Skills;