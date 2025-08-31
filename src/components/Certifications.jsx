import React, { useState, useRef, useEffect } from 'react';

const certsData = [
  { title: "Cisco Certified DevNet Associate", description: "Issued by Cisco Systems Inc, 2025. Validates skills in developing and maintaining applications built on Cisco platforms.", link: "/devnet.png" },
  { title: "Cisco Certified Network Associate", description: "Issued by Cisco Systems Inc, 2025. Covers networking fundamentals, IP services, security fundamentals, and automation.", link: "/ccna.png" },
  { title: "Automation Testing and Cloud Automation", description: "Issued by Simplilearn, 2025. Focused on automation frameworks/tools and cloud technologies for efficient testing processes.", link: "/automationtesting.png" },
  { title: "Java Certification", description: "Issued by HackerRank, 2024. Demonstrates proficiency in core Java programming concepts and problem-solving.", link: "/hackerrank.png" },
  { title: "Java Backend Development", description: "Training by GeeksForGeeks, 2024. Covered advanced topics in building robust server-side applications.", link: "/gfg.png" },
  { title: "Postman Student Expert", description: "Issued by Postman Academy, 2024. Validates skills in API testing and development using the Postman platform.", link: "/postman.png" },
  { title: "AWS Certified Cloud Practitioner", description: "Issued by Amazon Web Services, 2023. Covers cloud concepts, security, technology, and billing.", link: "/aws.png" },
];

const AUTO_SCROLL_SPEED = 0.5;

const Certifications = () => {
  const scrollContainerRef = useRef(null);
  const animationFrameId = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const [canScroll, setCanScroll] = useState({ left: false, right: true });

  useEffect(() => {
    if (userInteracted) {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      return;
    }

    let isRewinding = false;
    const scroll = () => {
      const el = scrollContainerRef.current;
      if (el && !isHovering && !isRewinding) {
        // Check if we've reached the end
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
          isRewinding = true;
          // Smoothly scroll back to the start
          el.scrollTo({ left: 0, behavior: 'smooth' });
          // After the scroll duration (approx 1s), reset and continue
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
  }, [userInteracted, isHovering]);

  const checkScrollPosition = () => {
    const el = scrollContainerRef.current;
    if (el) {
      const canScrollLeft = el.scrollLeft > 5;
      const canScrollRight = el.scrollLeft < el.scrollWidth - el.clientWidth - 5;
      setCanScroll({ left: canScrollLeft, right: canScrollRight });
    }
  };

  const handleInteraction = () => {
    if (!userInteracted) setUserInteracted(true);
  };
  
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
        checkScrollPosition();
        el.addEventListener('scroll', checkScrollPosition);
    }
    return () => el?.removeEventListener('scroll', checkScrollPosition);
  }, []);

  const handleClickScroll = (direction) => {
    handleInteraction();
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="certifications" className="container">
      <h2>CERTIFICATIONS</h2>
      <p className="tagline">A COMMITMENT TO CONTINUOUS LEARNING AND SKILL DEVELOPMENT.</p>
      
      <div 
        className="cert-scroll-wrapper"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <button className="scroll-button left" onClick={() => handleClickScroll('left')} disabled={!canScroll.left}>{'<'}</button>
        
        <div className="cert-grid" ref={scrollContainerRef}>
          {/* We now map over the original, non-duplicated array */}
          {certsData.map((cert, i) => (
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-card" key={i}>
              <div className="open-button">Open</div>
              <h4>{cert.title}</h4>
              <p>{cert.description}</p>
            </a>
          ))}
        </div>
        
        <button className="scroll-button right" onClick={() => handleClickScroll('right')} disabled={!canScroll.right}>{'>'}</button>
      </div>
    </section>
  );
};

export default Certifications;