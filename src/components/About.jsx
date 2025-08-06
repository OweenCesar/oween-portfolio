import React, { useEffect } from 'react';
import './About.css';
import oweenImg from './profile.png';

import profileImg from './snow.jpeg';
const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.2 });

    document.querySelectorAll('.fade-in, .slide-up').forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section">
      {/* Tech Grid Overlay (Decorative) */}
      <div className="tech-grid-overlay"></div>

      <div className="about-container">
        {/* Left Column - Photo (Large & Dynamic) */}
        <div className="about-photo fade-in">
          <div className="photo-wrapper">
            <img 
              src={profileImg} 
              alt="Oween Barranzuela" 
              className="profile-image" 
              loading="lazy"
            />
            <div className="tech-grid-mask"></div> {/* Grid overlay effect */}
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="about-content slide-up">
          <h2 className="section-title">
            <span className="gradient-text">Beyond</span> The Code
          </h2>

          <div className="about-text">
            <p>
              It's me <span className="highlight">Oween Cesar</span>, a 5th semester student of <span className="highlight">Artificial Intelligence </span> at the Deggendorf Institute of Technology in Germany.
              I built this page to create <span className="highlight"> my own space </span> and share with other developers my work .
            </p>

            <p>
              I’ve dipped my toes into a bit of everything—international sales, exports, teaching Spanish, kitchen shifts, even translation gigs. <span className="highlight"> Versatility has always been my thing 😉. </span>
              But it wasn’t until I moved to Germany that I found what truly sparks my passion: <span className="highlight"> building AI applications</span>  that simplify and automate the everyday. 
               
            </p>

            <p>
              Throughout my semesters, I’ve been gradually uncovering the power of AI, and right now I’m diving deep into developing AI agents powered by <span className="highlight"> Large Language Models</span>. 
              I’m especially interested in turning <span className="highlight"> open-source tools into practical</span>, business-ready solutions that are not just smart but also sustainable

            </p>
            <p>  
              But hey, it’s not all tech all the time! I might look serious, but I’m pretty easygoing. I genuinely enjoy meeting new people, exploring cultures, and having good conversations 
              Born and raised in Peru 🇵🇪 (I can't prepare ceviche tho),  also spent several years living in Turkey , and now I’m based in Bavaria, Germany 💙🤍 🇩🇪 , a place that became my home.
               
            </p>
          </div>

          <a href="#projects" className="cta-button">
            <span>See My Work</span>
            <div className="arrow-icon"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;