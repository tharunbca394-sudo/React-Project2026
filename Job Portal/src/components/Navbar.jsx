import React from 'react';

function Navbar({ darkMode, toggleDark, activeTab, setActiveTab }) {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <img className="brand-logo" src="/jobportal-logo.svg" alt="JobPortal logo" />
        <span>JobPortal</span>
      </div>

      <div className="nav-links">
        <button className={`nav-link ${activeTab === 'home' ? 'active' : ''}`} onClick={() => setActiveTab('home')}>
          Home
        </button>
        <button className={`nav-link ${activeTab === 'jobs' ? 'active' : ''}`} onClick={() => setActiveTab('jobs')}>
          Jobs
        </button>
        <button
          className={`nav-link ${activeTab === 'internship' ? 'active' : ''}`}
          onClick={() => setActiveTab('internship')}
        >
          Internship
        </button>
        <button className={`nav-link ${activeTab === 'saved' ? 'active' : ''}`} onClick={() => setActiveTab('saved')}>
          Saved
        </button>
        <button
          className={`nav-link ${activeTab === 'notifications' ? 'active' : ''}`}
          onClick={() => setActiveTab('notifications')}
        >
          Notifications
        </button>
        <button className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`} onClick={() => setActiveTab('contact')}>
          Contact
        </button>
      </div>

      <button className="dark-toggle" onClick={toggleDark}>
        {darkMode ? 'Light' : 'Dark'}
      </button>
    </nav>
  );
}

export default Navbar;
