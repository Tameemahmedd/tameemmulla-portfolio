import React, { useRef } from 'react';
// Restructure the data to fit the new card style
const certsData = [
  { title: "Cisco Certified DevNet Associate", description: "Issued by Cisco Systems Inc, 2025. Validates skills in developing and maintaining applications built on Cisco platforms.", link: "/devnet.png" },
  { title: "Cisco Certified Network Associate", description: "Issued by Cisco Systems Inc, 2025. Covers networking fundamentals, IP services, security fundamentals, and automation.", link: "/ccna.png" },
  { title: "Automation Testing and Cloud Automation", description: "Issued by Simplilearn, 2025. Focused on automation frameworks/tools and cloud technologies for efficient testing processes.", link: "/automationtesting.png" },
  { title: "Java Certification", description: "Issued by HackerRank, 2024. Demonstrates proficiency in core Java programming concepts and problem-solving.", link: "/hackerrank.png" },
  { title: "Java Backend Development", description: "Training by GeeksForGeeks, 2024. Covered advanced topics in building robust server-side applications.", link: "/gfg.png" },
  { title: "Postman Student Expert", description: "Issued by Postman Academy, 2024. Validates skills in API testing and development using the Postman platform.", link: "/postman.png" },
  { title: "AWS Certified Cloud Practitioner", description: "Issued by Amazon Web Services, 2023. Covers cloud concepts, security, technology, and billing.", link: "/aws.png" },
];


const Certifications = () => {
  const scrollContainerRef = useRef(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  return (
    <section id="certifications" className="container">
      <h2>CERTIFICATIONS</h2>
      <p className="tagline">A COMMITMENT TO CONTINUOUS LEARNING AND SKILL DEVELOPMENT.</p>
      
      <div className="cert-scroll-wrapper">
        {/* Use {'<'} which is a safer way to write the arrow in JSX */}
        <button className="scroll-button left" onClick={scrollLeft}>{'<'}</button>
        
        <div className="cert-grid" ref={scrollContainerRef}>
          {certsData.map((cert, i) => (
            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-card" key={i}>
              <div className="open-button">Open</div>
              <h4>{cert.title}</h4>
              <p>{cert.description}</p>
            </a>
          ))}
        </div>
        
        {/* Use {'>'} which is a safer way to write the arrow in JSX */}
        <button className="scroll-button right" onClick={scrollRight}>{'>'}</button>
      </div>
    </section>
  );
};

export default Certifications;