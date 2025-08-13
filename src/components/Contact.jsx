import React, { useEffect } from 'react';
import './Contact.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload } from 'react-icons/fa';

const Contact = () => {
  useEffect(() => {
    // Animation observer for scroll effects
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.contact-item, .form-group').forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="section-title">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          <p className="section-subtitle">
            I'm always open to discussing new opportunities, collaborations, or just a friendly chat about tech.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <FaEnvelope size={24} />
              </div>
              <div>
                <h3>Email</h3>
                <a href="mailto:your.email@example.com">your.email@example.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaLinkedin size={24} />
              </div>
              <div>
                <h3>LinkedIn</h3>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/yourprofile
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaGithub size={24} />
              </div>
              <div>
                <h3>GitHub</h3>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  github.com/yourusername
                </a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaFileDownload size={24} />
              </div>
              <div>
                <h3>Resume</h3>
                <a href="/path/to/resume.pdf" download className="resume-link">
                  Download my resume
                </a>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your email" required />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="What's this about?" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Your message..." required></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;