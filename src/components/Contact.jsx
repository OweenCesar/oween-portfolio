import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaFileDownload, FaLocationArrow, FaRegClock, FaCopy, FaCheck } from 'react-icons/fa';
import './Contact.css';
import resume from './OWEEN_CESAR_EN.pdf';

const CONTACT = {
  email: 'oweenbarranzuela@gmail.com',                 // TODO: replace
  linkedin: 'https://www.linkedin.com/in/oweenbarranzuela/', // TODO: replace
  github: 'https://github.com/OweenCesar',       // TODO: replace
  resume:  resume,                   // TODO: replace
  location: 'Deggendorf, Germany',                 // Optional
  timezone: 'CEST (UTC+2)',                        // Optional
  availability: 'Open to Working Student / Internship',
};

export default function Contact() {
  const [copied, setCopied] = React.useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      // ignore
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, when: 'beforeChildren' }
    }
  };

  const item = {
    hidden: { y: 16, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.45, ease: 'easeOut' } }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Header / Pitch */}
        <motion.header
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="contact-header"
        >
          <motion.h2 variants={item} className="section-title">
            <span className="gradient-text">Let’s Connect</span>
          </motion.h2>
          <motion.p variants={item} className="section-subtitle">
            I’m open to collaborations, internships, and working-student roles. If my profile resonate with you,
            reach out through any of the channels below.
          </motion.p>

          {/* Quick meta badges */}
          <motion.div variants={item} className="meta-row">
            <span className="meta-pill" title="Location">
              <FaLocationArrow aria-hidden="true" />
              {CONTACT.location}
            </span>
            <span className="meta-pill" title="Timezone">
              <FaRegClock aria-hidden="true" />
              {CONTACT.timezone}
            </span>
            <span className="meta-pill badge-available" title="Availability">
              {CONTACT.availability}
            </span>
          </motion.div>
        </motion.header>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="contact-grid"
        >
          {/* Email - primary CTA card */}
          <motion.a
            variants={item}
            href={`mailto:${CONTACT.email}`}
            className="contact-card contact-card--primary"
            aria-label="Email me"
          >
            <div className="card-icon">
              <FaEnvelope size={22} />
            </div>
            <div className="card-body">
              <h3>Email</h3>
              <p>{CONTACT.email}</p>
            </div>
            <div className="card-actions">
              <button
                type="button"
                className="copy-btn"
                onClick={(e) => { e.preventDefault(); copyEmail(); }}
                aria-label="Copy email to clipboard"
              >
                {copied ? <FaCheck /> : <FaCopy />}
              </button>
            </div>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            variants={item}
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            aria-label="Open LinkedIn profile"
          >
            <div className="card-icon">
              <FaLinkedin size={22} />
            </div>
            <div className="card-body">
              <h3>LinkedIn</h3>
              <p className="muted">{CONTACT.linkedin.replace('https://', '')}</p>
            </div>
          </motion.a>

          {/* GitHub */}
          <motion.a
            variants={item}
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            aria-label="Open GitHub profile"
          >
            <div className="card-icon">
              <FaGithub size={22} />
            </div>
            <div className="card-body">
              <h3>GitHub</h3>
              <p className="muted">{CONTACT.github.replace('https://', '')}</p>
            </div>
          </motion.a>

          {/* Resume */}
          <motion.a
            variants={item}
            href={CONTACT.resume}
            download
            className="contact-card"
            aria-label="Download resume"
          >
            <div className="card-icon">
              <FaFileDownload size={22} />
            </div>
            <div className="card-body">
              <h3>Resume</h3>
              <p className="muted">Download my CV (PDF)</p>
            </div>
          </motion.a>
        </motion.div>

        {/* Bottom callout */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="contact-callout"
        >
          <motion.p variants={item}>
            Prefer a quick chat? I’m happy to hop on a short call—just drop a line via email or LinkedIn.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
