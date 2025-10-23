import React, { useEffect, useRef } from 'react';
import './BinaryRain.css';
import avatar from './avatar1.png';

function BinaryRain({ setActiveComponent }) {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1));

    let width = (canvas.width = window.innerWidth * dpr);
    let height = (canvas.height = window.innerHeight * dpr);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const getVar = (v) => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
    const bgFade = 'rgba(0, 0, 0, 0.06)';
    const headColor = getVar('--accent') || '#64ffda';
    const trailColor = getVar('--accent-dim') || 'rgba(100,255,218,0.35)';

    const baseFont = 16;
    const fontSize = baseFont * dpr;
    const columnWidth = fontSize;
    const columns = Math.floor(width / columnWidth);

    const drops = Array.from({ length: columns }, () => ({
      y: Math.floor(Math.random() * (-100 - 0)) + 0,
      v: Math.random() * 1.5 + 0.75,
    }));

    ctx.font = `${fontSize}px ui-monospace, monospace`;
    ctx.textBaseline = 'top';

    function drawFrame() {
      ctx.fillStyle = bgFade;
      ctx.fillRect(0, 0, width, height);

      for (let i = 0; i < columns; i++) {
        const x = i * columnWidth;
        const drop = drops[i];
        const y = drop.y * fontSize;

        ctx.fillStyle = trailColor;
        ctx.fillText(Math.random() > 0.5 ? '1' : '0', x, y - fontSize);

        ctx.shadowColor = headColor;
        ctx.shadowBlur = 12 * dpr;
        ctx.fillStyle = headColor;
        ctx.fillText(Math.random() > 0.5 ? '1' : '0', x, y);
        ctx.shadowBlur = 0;

        drop.y += drop.v;
        drop.v += (Math.random() - 0.5) * 0.03;
        if (drop.v < 0.5) drop.v = 0.5;
        if (drop.v > 2.4) drop.v = 2.4;

        if (y > height && Math.random() > 0.975) {
          drop.y = Math.random() * -20;
          drop.v = Math.random() * 1.5 + 0.75;
        }
      }

      rafRef.current = requestAnimationFrame(drawFrame);
    }

    function start() {
      if (!prefersReduced) {
        rafRef.current = requestAnimationFrame(drawFrame);
      } else {
        ctx.fillStyle = 'rgba(0,0,0,1)';
        ctx.fillRect(0, 0, width, height);
        for (let i = 0; i < columns; i++) {
          const x = i * columnWidth;
          const y = Math.random() * height;
          ctx.fillStyle = trailColor;
          ctx.fillText(Math.random() > 0.5 ? '1' : '0', x, y);
        }
      }
    }

    function resize() {
      width = canvas.width = window.innerWidth * dpr;
      height = canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    }

    start();
    window.addEventListener('resize', resize);

    const onKey = (e) => {
      if (e.key === '1') setActiveComponent?.('about');
      if (e.key === '2') setActiveComponent?.('projects');
      if (e.key === '3') setActiveComponent?.('contact');
    };
    window.addEventListener('keydown', onKey);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('keydown', onKey);
    };
  }, [setActiveComponent]);

  return (
    <div className="hero-container">
      <canvas ref={canvasRef} className="binary-bg" aria-hidden="true" />
      <div className="overlay-gradient" aria-hidden="true" />

      <div className="open-to-work">
        <span className="dot"></span> Looking for an Internship / Working Student Role
      </div>

      <div className="hero-content glass">
        <div className="eyebrow">Portfolio · AI · MLOps</div>
        <h1 className="title">
          Building <span className="title-accent">useful AI</span>
        </h1>
        <p className="subtitle">
          Hi, I’m <span className="highlight">Oween</span> — I build, I experiment, I learn. <br />
          Explore my work, peek at the code, or just say hi.
        </p>

        <div className="avatar-wrap">
          <img src={avatar} alt="Oween avatar" className="avatar" />
        </div>

        <div className='buttons-row'>
          <button onClick={() => setActiveComponent('about')} className="cta-button" aria-label="About me (1)">
            <span className="btn-icon" aria-hidden>👤</span> ABOUT ME
            <span className="kbd">1</span>
          </button>
          <button onClick={() => setActiveComponent('projects')} className="cta-button" aria-label="See my work (2)">
            <span className="btn-icon" aria-hidden>🧩</span> SEE MY WORK
            <span className="kbd">2</span>
          </button>
          <button onClick={() => setActiveComponent('contact')} className="cta-button" aria-label="Contact me (3)">
            <span className="btn-icon" aria-hidden>✉️</span> CONTACT ME
            <span className="kbd">3</span>
          </button>
          <button onClick={() => window.open("https://web-production-f20d1.up.railway.app/", "_blank")} className="cta-button" aria-label="Contact me (3)">
            <span className="btn-icon" aria-hidden>💬</span> CHAT WITH ME
            <span className="kbd">4</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BinaryRain;