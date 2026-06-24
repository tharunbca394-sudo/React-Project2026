import React, { useEffect, useRef, useState } from 'react';
import '../LoginPage.css';
 
function LoginPage({ navigate }) {
  const starsRef = useRef(null);
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
 
  useEffect(() => {
    // Generate animated starfield
    const starsEl = starsRef.current;
    for (let i = 0; i < 80; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.cssText = `
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        width: ${1 + Math.random() * 2}px;
        height: ${1 + Math.random() * 2}px;
        --d: ${2 + Math.random() * 4}s;
        animation-delay: ${Math.random() * 5}s;
      `;
      starsEl.appendChild(star);
    }
    return () => {
      if (starsEl) starsEl.innerHTML = '';
    };
  }, []);
 
  const handleGetStarted = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please enter both Email and Password');
      return;
    }
    // On successful login -> navigate to Job Portal home
    navigate('/home');
  };
 
  return (
    <div className="login-page">
 
      {/* Background Effects */}
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="orb orb3"></div>
      <div className="grid-bg"></div>
      <div className="stars" ref={starsRef}></div>
 
      {/* LEFT PANEL - Branding + Features */}
      <div className="left-panel">
        <div className="brand">
          <div className="brand-icon">💼</div>
          <h1>JobPortal</h1>
          <p className="brand-sub">Your Career Starts Here</p>
        </div>
 
        <div className="features">
          <div className="feature-item" style={{ '--delay': '0.3s' }}>
            <div className="feat-icon blue">🔍</div>
            <div className="feat-text">
              <h4>Smart Search &amp; Filter</h4>
              <p>Search by skills, company, location &amp; role</p>
            </div>
          </div>
          <div className="feature-item" style={{ '--delay': '0.4s' }}>
            <div className="feat-icon purple">🌙</div>
            <div className="feat-text">
              <h4>Dark / Light Mode</h4>
              <p>Comfortable viewing in any environment</p>
            </div>
          </div>
          <div className="feature-item" style={{ '--delay': '0.5s' }}>
            <div className="feat-icon green">🔖</div>
            <div className="feat-text">
              <h4>Save &amp; Bookmark Jobs</h4>
              <p>Never lose track of your favourite listings</p>
            </div>
          </div>
          <div className="feature-item" style={{ '--delay': '0.6s' }}>
            <div className="feat-icon cyan">🚀</div>
            <div className="feat-text">
              <h4>1-Click Apply Now</h4>
              <p>Direct redirect to company careers page</p>
            </div>
          </div>
        </div>
      </div>
 
      {/* DIVIDER */}
      <div className="divider"></div>
 
      {/* RIGHT PANEL - Login Card */}
      <div className="right-panel">
        <form className="login-card" onSubmit={handleGetStarted}>
 
          <div className="card-header">
            <h2>Welcome Back 👋</h2>
            <p>Login to access your job dashboard</p>
          </div>
 
          
 
          <div className="or-divider">or continue with email</div>
 
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div className="input-wrapper">
              <input
                className="form-input"
                type="email"
                placeholder="tharun@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="input-icon">✉️</span>
            </div>
          </div>
 
          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="input-wrapper">
              <input
                className="form-input"
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="input-icon"
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: 'pointer' }}
              >
                👁
              </span>
            </div>
          </div>
 
          <div className="form-extras">
            <label className="remember">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Remember me
            </label>
            <span className="forgot">Forgot password?</span>
          </div>
 
          <button type="submit" className="btn-login">
            🚀 Get Started
          </button>
 
          <p className="signup-link">
            Don't have an account? <a href="#signup">Sign Up Free →</a>
          </p>
 
          <div className="trust-badges">
            <span className="trust-item">🔒 Secure Login</span>
            <span className="trust-item">✅ Free Forever</span>
            <span className="trust-item">🎓 Fresher Friendly</span>
          </div>
 
        </form>
      </div>
 
    </div>
  );
}
 
export default LoginPage;
