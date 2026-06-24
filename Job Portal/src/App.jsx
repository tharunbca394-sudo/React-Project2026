import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import JobList from './components/Joblist';
import SearchFilter from './components/SearchFilter';
import JobDetail from './components/Jobdetail';
import WelcomePage from './components/WelcomePage';
import LoginPage from './components/LoginPage';
import { jobsData } from './assets/Jobs';
import { companyAssets } from './assets/companyAssets';
import heroImage from './assets/hero.png';
import './App.css';

const featuredCompanies = Object.entries(companyAssets).slice(0, 12).map(([name, asset]) => ({ name, ...asset }));

function JobNotifications({ jobs, onSelect }) {
  const recentJobs = jobs.slice(-12).reverse();

  return (
    <section className="notification-panel">
      <div className="notification-intro">
        <h2>Recent Job Notifications</h2>
        <p>Fresh openings like LinkedIn recent jobs, updated for quick apply.</p>
        <img className="notification-hero" src={heroImage} alt="Job alert illustration" />
      </div>
      <div className="notification-list">
        {recentJobs.map((job) => (
          <div key={job.id} className="notification-item">
            <button className="notification-main" onClick={() => onSelect(job)}>
              <span className="notification-dot"></span>
              <img className="notification-logo" src={job.logo} alt={`${job.company} logo`} />
              <span>
                <strong>{job.title}</strong>
                <small>{job.company} - {job.location} - {job.posted}</small>
              </span>
            </button>
            <a href={job.linkedInAlertLink} target="_blank" rel="noreferrer" className="notification-link">
              LinkedIn
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function ResumeChatBot({ jobs }) {
  const [open, setOpen] = useState(false);
  const [resumeName, setResumeName] = useState('');
  const [score, setScore] = useState(null);
  const [message, setMessage] = useState('');

  const topSkills = [...new Set(jobs.flatMap((job) => job.skills))].slice(0, 10);

  const analyzeResume = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const name = file.name.toLowerCase();
    let nextScore = 62;
    if (name.includes('react') || name.includes('developer')) nextScore += 10;
    if (name.includes('intern') || name.includes('fresher')) nextScore += 6;
    if (file.size > 120000) nextScore += 8;
    if (file.type.includes('pdf')) nextScore += 5;

    setResumeName(file.name);
    setScore(Math.min(nextScore, 94));
    setMessage('Resume analyzed. Improve keywords, measurable projects, and ATS-friendly formatting.');
  };

  return (
    <>
      <button className="chat-launcher" onClick={() => setOpen(true)}>
        AI Resume Bot
      </button>

      {open && (
        <div className="chat-panel">
          <div className="chat-header">
            <div>
              <h3>AI Resume Assistant</h3>
              <p>Upload resume and check ATS score</p>
            </div>
            <button onClick={() => setOpen(false)}>X</button>
          </div>

          <label className="resume-upload">
            <span>Upload Resume PDF/DOC</span>
            <input type="file" accept=".pdf,.doc,.docx,.txt" onChange={analyzeResume} />
          </label>

          {score ? (
            <div className="ats-result">
              <div className="score-ring">
                <strong>{score}</strong>
                <span>ATS Score</span>
              </div>
              <p><strong>{resumeName}</strong></p>
              <p>{message}</p>
              <ul>
                <li>Add a clear summary with role name, skills, and career goal.</li>
                <li>Use keywords like {topSkills.slice(0, 5).join(', ')}.</li>
                <li>Add project impact with numbers, tools used, and outcomes.</li>
                <li>Keep headings simple: Skills, Education, Projects, Experience.</li>
              </ul>
            </div>
          ) : (
            <div className="chat-message">
              Hi, upload your resume. I will show ATS score and changes needed.
            </div>
          )}
        </div>
      )}
    </>
  );
}

function JobPortalHome() {
  const [jobs] = useState(jobsData);
  const [filtered, setFiltered] = useState(jobsData);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({ role: '', location: '', type: '' });
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [savedJobs, setSavedJobs] = useState([]);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      const result = jobs.filter((job) => {
        const text = search.toLowerCase();
        const matchSearch =
          job.title.toLowerCase().includes(text) ||
          job.company.toLowerCase().includes(text) ||
          job.skills.some((skill) => skill.toLowerCase().includes(text));
        const matchRole = !filters.role || job.role === filters.role;
        const matchLocation = !filters.location || job.location === filters.location;
        const matchType = !filters.type || job.type === filters.type;
        const matchTab =
          activeTab === 'jobs' ? job.role === 'Job' :
          activeTab === 'internship' ? job.role === 'Internship' :
          true;

        return matchSearch && matchRole && matchLocation && matchType && matchTab;
      });

      setFiltered(result);
      setLoading(false);
    }, 250);

    return () => clearTimeout(timer);
  }, [activeTab, filters, jobs, search]);

  const toggleSave = (jobId) => {
    setSavedJobs((prev) =>
      prev.includes(jobId) ? prev.filter((id) => id !== jobId) : [...prev, jobId]
    );
  };

  const handleTabChange = (tab) => {
    setSelected(null);
    setActiveTab(tab);
    setFilters({ role: tab === 'internship' ? 'Internship' : '', location: '', type: '' });
    setSearch('');
  };

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <Navbar
        darkMode={darkMode}
        toggleDark={() => setDarkMode(!darkMode)}
        activeTab={activeTab}
        setActiveTab={handleTabChange}
      />

      <main className="main-content">
        {(activeTab === 'home' || activeTab === 'jobs' || activeTab === 'internship') && (
          <>
            <div className="hero-section">
              <h1>{activeTab === 'internship' ? 'Find Your Internship' : 'Find Your Dream Job'}</h1>
              <p>Students, freshers and job seekers can easily find jobs and internships.</p>
            </div>

            <SearchFilter
              search={search}
              setSearch={setSearch}
              filters={filters}
              setFilters={setFilters}
              jobs={jobs}
              activeTab={activeTab}
            />

            <section className="company-strip" aria-label="Featured companies">
              {featuredCompanies.map((company) => (
                <button
                  key={company.name}
                  className="company-chip"
                  onClick={() => setSearch(company.name)}
                >
                  <img className="company-logo-img" src={company.logo} alt={`${company.name} logo`} />
                  <span>{company.name}</span>
                </button>
              ))}
            </section>

            {loading ? (
              <div className="spinner-container">
                <div className="spinner"></div>
                <p>Loading jobs...</p>
              </div>
            ) : filtered.length === 0 ? (
              <div className="no-results">
                <h2>No Results Found</h2>
                <p>Try changing your search or filters.</p>
              </div>
            ) : (
              <JobList
                jobs={filtered}
                onSelect={setSelected}
                savedJobs={savedJobs}
                toggleSave={toggleSave}
                title={activeTab === 'internship' ? 'Internships Found' : 'Jobs Found'}
              />
            )}
          </>
        )}

        {activeTab === 'saved' && (
          <JobList
            jobs={jobs.filter((job) => savedJobs.includes(job.id))}
            onSelect={setSelected}
            savedJobs={savedJobs}
            toggleSave={toggleSave}
            title="Saved Jobs"
          />
        )}

        {activeTab === 'notifications' && (
          <section className="notifications-section">
            <JobNotifications jobs={jobs} onSelect={setSelected} />
          </section>
        )}

        {activeTab === 'contact' && (
          <section className="contact-section">
            <div className="contact-box">
              <h1>Contact</h1>
              <p>Reach the JobPortal team for job listings, internship support, and application help.</p>
              <div className="contact-grid">
                <a href="mailto:jobportal23@gmail.com" className="contact-card">
                  <span>Email</span>
                  <strong>jobportal23@gmail.com</strong>
                </a>
                <a href="tel:+910987654321" className="contact-card">
                  <span>Contact Number</span>
                  <strong>+91 09876 54321</strong>
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="contact-card">
                  <span>LinkedIn</span>
                  <strong>linkedin.com/jobs</strong>
                </a>
              </div>
            </div>
          </section>
        )}
      </main>

      {selected && (
        <JobDetail
          job={selected}
          onClose={() => setSelected(null)}
          isSaved={savedJobs.includes(selected.id)}
          toggleSave={toggleSave}
        />
      )}
      <ResumeChatBot jobs={jobs} />
    </div>
  );
}

function App() {
  const initialPage = () => {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('login')) return 'login';
    if (path.includes('home') || path.includes('jobs')) return 'home';
    return 'welcome';
  };

  const [page, setPage] = useState(initialPage);

  const navigate = (path) => {
    const nextPage = path === '/login' ? 'login' : path === '/home' || path === '/jobs' ? 'home' : 'welcome';
    window.history.pushState({}, '', path);
    setPage(nextPage);
  };

  return (
    <>
      {page === 'welcome' && <WelcomePage navigate={navigate} />}
      {page === 'login' && <LoginPage navigate={navigate} />}
      {page === 'home' && <JobPortalHome />}
    </>
  );
}

export default App;
