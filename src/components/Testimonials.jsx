import React, { useState, useEffect, useCallback } from 'react';

const testimonialsData = [
  { text: "He ramped me up on the automation repo... When runs surfaced flakiness or env-specific failures, he triaged alongside me, isolated root causes, and helped stabilizing the suites so we could trust the signal. What stood out: shared ownership of quality... Strong cross-functional partner.", author: "Abhimanyu Vashisht", role: "Software Engineer, BrowserStack" },
  { text: "Kudos to QA Tameem for the great support on the Freshchat task... Really appreciated the ownership and proactive follow-ups with cross-teams to get all GTGs completed on time. Also, thanks for the support in debugging automation failures... Your quick responses, teamwork, and support made the deployment possible.", author: "Pankaj Vadnal", role: "Software Engineer, BrowserStack" },
  { text: "Great work in identifying the gaps within our automation coverage. This is a strong start toward building a clear path to reducing defect leakages and preventing production incidents.", author: "Arpit Patel", role: "Manager - Engineering, BrowserStack" },
  { text: "Fantastic teamwork... on successfully delivering the Hello Bar implementation for the signed-out state! Your technical precision ensured a flawless rollout.", author: "Pragya Shukla", role: "BrowserStack" },
  { text: "Over the last few weeks, whenever automation validation stopped us, you found time. Not eventually, but when it actually mattered -- and that's the part that made the difference.", author: "Pankaj Vadnal", role: "Software Engineer, BrowserStack" },
  { text: "For being the newest faces in the QA space and absolutely crushing it, delivering on critical timelines with an infectious eagerness to learn.", author: "Arpit Patel", role: "Manager - Engineering, BrowserStack" },
  { text: "To the QA team — a special thank you. Your communication was consistently clear and proactive, and you unblocked me at every single stage. Honestly, my real onboarding happened because of you all.", author: "Siddharth Garg", role: "Software Engineer, BrowserStack" },
  { text: "Thanks to Swaraj and Tameem for quickly handling the post-deploy design issue on the HelloBar. Their seamless coordination got the visual fix resolved smoothly - ensuring we didn't lose any time.", author: "Pragya Shukla", role: "BrowserStack" },
  { text: "Really appreciate the awesome work delivered throughout the year. The ownership, quality, and collaboration across the teams have made a strong impact.", author: "Arpit Patel", role: "Manager - Engineering, BrowserStack" },
  { text: "Tameem, thank you for doing everything you were asked for and helping even at the places that no one asked... You are a patient person, willing to help and committed to success - even if that required answering questions outside your working hours. That is a real team spirit, aiming for success! Keep on the great work!", author: "Aleksander Olkuski", role: "Tech lead, Splunk Appdynamics" },
  { text: "Tameem, you shown a great effort and hard work on the release activities for Alerting CSAAS and Quick fix releases. Also you have reduced the backlog items of the Alerting Tests and Migration of UI tests from TestIM. It's really good that you are able to handle all the dev requests and Stabilising the pipeline with consistent results Please keep up the good work", author: "Kishore kumar", role: "Tech Lead, Splunk Appdynamics" },
  { text: "Tameem, from the very first day you joined, you’ve been an invaluable player on the team. Your enthusiasm, dedication, and passion for the role have consistently stood out and made a real difference. Working with Tameem has been a fantastic experience. He is extremely proactive and result driven individual and always exceeded my expectations.", author: "Biswajit Raut", role: "Leader, Software Engineering- Splunk Appdynamics" },
  { text: "I want to take a moment to recognise the exceptional efforts of tameem. You have done an outstanding job ramping up quickly, delivering results flawlessly... This effort has contributed significantly to the overall quality and efficiency of our processes, ensuring smooth and effective releases... Thank you for your dedication and continuous improvement!", author: "Araveti Obul Reddy", role: "Leader, Software Engineering- Splunk Appdynamics" },
  { text: "I had the pleasure of working with Tameem during his time at Cisco. He is a quick learner who adapts to new challenges very effectively... What I admire most is his dedication and ability to deliver quality work on time. His positive attitude, problem-solving mindset, and willingness to take ownership made him a valuable team member.", author: "Abhijeet Waghmare", role: "Senior SDET- Splunk Appdynamics" },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % testimonialsData.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 8000);
    return () => clearInterval(timer);
  }, [nextTestimonial]);

  return (
    <section id="testimonials" className="container">
      <h2>TESTIMONIALS</h2>
      <div className="testimonial-slider">
        <div className="testimonial-content">
          <p>"{testimonialsData[currentIndex].text}"</p>
          <cite>- {testimonialsData[currentIndex].author} <span>({testimonialsData[currentIndex].role})</span></cite>
        </div>
        <div className="slider-nav">
          <button onClick={() => setCurrentIndex(prev => (prev - 1 + testimonialsData.length) % testimonialsData.length)}>&lt;</button>
          <button onClick={nextTestimonial}>&gt;</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;