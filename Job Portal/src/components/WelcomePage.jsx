import React, { useEffect, useRef } from 'react';
import '../WelcomePage.css';
 
function WelcomePage({ navigate }) {
  const starsRef = useRef(null);
  const iconsRef = useRef(null);
 
  useEffect(() => {
    // Generate animated stars
    const starsEl = starsRef.current;
    for (let i = 0; i < 120; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.cssText = `
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        --d: ${2 + Math.random() * 4}s;
        animation-delay: ${Math.random() * 4}s;
        width: ${1 + Math.random() * 2}px;
        height: ${1 + Math.random() * 2}px;
      `;
      starsEl.appendChild(star);
    }
     // Generate floating job icons
    const iconsEl = iconsRef.current;
    const emojis = ['💼','🎯','📊','💻','🏆','⚡','🔥','💡','📱','🌟','🎓','🏢'];
    emojis.forEach((emoji) => {
      const icon = document.createElement('div');
      icon.className = 'icon-float';
      icon.textContent = emoji;
      icon.style.cssText = `
        left: ${5 + Math.random() * 90}%;
        top: ${5 + Math.random() * 90}%;
        --d: ${5 + Math.random() * 8}s;
        animation-delay: ${Math.random() * 5}s;
        font-size: ${1.2 + Math.random() * 1.5}rem;
      `;
      iconsEl.appendChild(icon);
    });
 
    // Cleanup on unmount
    return () => {
      if (starsEl) starsEl.innerHTML = '';
      if (iconsEl) iconsEl.innerHTML = '';
    };
  }, []);
 
  return (
    <div className="welcome-page">
 
      {/* Glowing Orbs */}
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="orb orb3"></div>
 
      {/* Grid Overlay */}
      <div className="grid-overlay"></div>
 
      {/* Stars Container */}
      <div className="stars" ref={starsRef}></div>
 
      {/* Floating Icons Container */}
      <div className="floating-icons" ref={iconsRef}></div>
 
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">
          <div className="nav-logo-icon">💼</div>
          <span>JobPortal</span>
        </div>
        <div className="nav-links-right">
          <a className="nav-link-item" href="#home">Home</a>
          <a className="nav-link-item" href="#jobs">Jobs</a>
          <a className="nav-link-item" href="#companies">Companies</a>
          <a className="nav-link-item" href="#about">About</a>
          <button className="nav-cta" onClick={() => navigate('/login')}>
            Login
          </button>
        </div>
      </nav>
 
      {/* Main Content */}
      <div className="container">
 
        {/* Badge */}
        <div className="logo-badge">
          <div className="logo-dot"></div>
          Naan Mudhalvan Internship Project 2026
        </div>
 
        {/* Heading */}
        <h1 className="hero-heading">
          Find Your<br />
          <span className="gradient-text">Dream Career</span><br />
          Today
        </h1>
 
        {/* Subtitle */}
        <p className="hero-sub">
          The smartest job portal for{' '}
          <strong style={{ color: '#60A5FA' }}>College Students</strong>,{' '}
          <strong style={{ color: '#A78BFA' }}>Freshers</strong> &amp;{' '}
          <strong style={{ color: '#34D399' }}>Job Seekers</strong> across India.
          Search, Filter &amp; Apply in seconds.
        </p>
 
        {/* Stats */}
        <div className="stats-row">
          <div className="stat">
            <div className="stat-num">500+</div>
            <div className="stat-label">Live Jobs</div>
          </div>
          <div className="stat">
            <div className="stat-num">50+</div>
            <div className="stat-label">Companies</div>
          </div>
          <div className="stat">
            <div className="stat-num">100%</div>
            <div className="stat-label">Free</div>
          </div>
        </div>
 
        {/* Buttons */}
        <div className="btn-group">
          <button
            className="btn-primary"
            onClick={() => navigate('/login')}
          >
            <span>🚀 Get Started</span>
            <span className="arrow">→</span>
          </button>
          <button
            className="btn-secondary"
            onClick={() => navigate('/jobs')}
          >
            👁️ Browse Jobs
          </button>
        </div>
 
        {/* Tech Tags */}
        <div className="tech-tags">
          <span className="tech-tag">⚛️ React.js</span>
          <span className="tech-tag">⚡ Vite</span>
          <span className="tech-tag">🎨 CSS3</span>
          <span className="tech-tag">🔷 JavaScript</span>
          <span className="tech-tag">🗄️ JSON API</span>
          <span className="tech-tag">🌙 Dark Mode</span>
        </div>
 
      </div>
 
      {/* Footer */}
      <p className="wave-text">
        Built with ❤️ by Tharun K.R · SKP Arts and Science College
      </p>
 
    </div>
  );
}
 
export default WelcomePage;
