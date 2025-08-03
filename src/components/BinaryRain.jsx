import React, { useEffect, useRef } from 'react';
import './BinaryRain.css';

 

function BinaryRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Rain of 1 and 0's 
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    const fontSize = 16;
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(0);

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = '#ff00aa';
      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const text = Math.random() > 0.5 ? '1' : '0';
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    let animationId;
     


    function animate() {
      draw();
      animationId = requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    return () => cancelAnimationFrame(animationId);
  }, []);
   
 
  return (
    <div className="hero-container">
      <canvas ref={canvasRef} className="binary-bg" />
      <div className="hero-content">
        <h1 style={{ fontSize: '5rem' }}>  AI Portfolio </h1>
        <img src="src/assets/avatar1.png" alt="Oween's Avatar" className="avatar" />

        <h1>  Hey there, I’m Oween 👋</h1>
        <p>
          <strong>Thanks for stopping by! Scroll around and check out what I’ve been building. </strong>
        </p>
        <div className='buttons-row'>
          <button href="/calculator" className="cta-button">
          ABOUT ME
          </button>
          
          <button href="/calculator" className="cta-button">
          SEE MY WORK
          </button>
          <button href="/calculator" className="cta-button">
          CONTACT ME
          </button>
           
        </div>
        
        
        
      

      </div>
    </div>
  );
}

export default BinaryRain;