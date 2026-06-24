import React from 'react';

function JobCard({ job, onSelect, isSaved, toggleSave }) {
  return (
    <div className="job-card" onClick={() => onSelect(job)}>
      <div className="card-header">
        <div className="company-logo">
          {job.logo ? <img src={job.logo} alt={`${job.company} logo`} /> : job.company[0]}
        </div>
        <div className="card-title">
          <h3>{job.title}</h3>
          <p className="company-name">{job.company}</p>
        </div>
        <button
          className="save-btn"
          onClick={(event) => {
            event.stopPropagation();
            toggleSave(job.id);
          }}
        >
          {isSaved ? 'Saved' : 'Save'}
        </button>
      </div>

      <div className="card-info">
        <span>Location: {job.location}</span>
        <span>Type: {job.type}</span>
        <span>Salary: {job.salary}</span>
      </div>

      <div className="card-content-text">
        <p><strong>Experience:</strong> {job.experience}</p>
        <p>{job.description}</p>
      </div>

      <div className="skills-tags">
        {job.skills.slice(0, 3).map((skill) => (
          <span key={skill} className="skill-tag">{skill}</span>
        ))}
      </div>

      <div className="card-footer">
        <span className={`badge ${job.role === 'Internship' ? 'badge-intern' : 'badge-job'}`}>
          {job.role}
        </span>
        <span className="posted-time">{job.posted}</span>
      </div>
    </div>
  );
}

export default JobCard;
