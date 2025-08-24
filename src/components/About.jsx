import React, { useEffect } from 'react';
import './About.css';
import profileImg from './snow.jpeg';
// Import icons
import { FiUser, FiMapPin, FiCpu } from 'react-icons/fi'; 

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 }); // Adjusted threshold for grid items

    document.querySelectorAll('.fade-in, .slide-up, .grid-item').forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section">
      {/* Tech Grid Overlay (Decorative) */}
      <div className="tech-grid-overlay"></div>

      <div className="about-container">
        {/* Left Column - Photo */}
        <div className="about-photo fade-in">
          <div className="photo-wrapper">
            <img 
              src={profileImg} 
              alt="Oween Barranzuela" 
              className="profile-image" 
              loading="lazy"
            />
            <div className="tech-grid-mask"></div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="about-content slide-up">
          <h2 className="section-title">
            <span className="gradient-text">Beyond</span> The Code
          </h2>

          {/* NEW: Story Grid */}
          <div className="about-grid">
            {/* Card 1: Who I Am */}
            <div className="grid-item">
              <div className="grid-item-header">
                <FiUser className="grid-icon" />
                <h3 className="grid-title">Who I Am</h3>
              </div>
              <p>
                I'm <span className="highlight">Oween Cesar</span>, an AI student at the Deggendorf Institute of Technology. Born in Peru 🇵🇪, shaped by years in Turkey, and now at home in Bavaria 🇩🇪. I'm a naturally curious and easygoing person who loves meeting new people and exploring cultures.
              </p>
            </div>

            {/* Card 2: My Journey */}
            <div className="grid-item">
              <div className="grid-item-header">
                <FiMapPin className="grid-icon" />
                <h3 className="grid-title">My Journey</h3>
              </div>
              <p>
                My path has been diverse—international business, restaurants, programming, tutoring. This versatility led me to Germany, where I discovered my true passion: building <span className="highlight">AI applications</span> and discoring patterns in data.
              </p>
            </div>

            {/* Card 3: My Focus */}
            <div className="grid-item">
              <div className="grid-item-header">
                <FiCpu className="grid-icon" />
                <h3 className="grid-title">My Focus</h3>
              </div>
              <p>
                Right now, I’m really into building AI agents with <span className="highlight">Large Language Models</span>  and exploring how they can actually be useful in real life. On the side, I enjoy working with datasets, running ML experiments, and discovering cool patterns hidden in any data.
              </p>
            </div>
          </div>

          {/* <a href="#projects" className="cta-button">
            <span>See My Work</span>
            <div className="arrow-icon"></div>
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default About;