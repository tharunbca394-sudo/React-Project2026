import React from 'react';

function JobDetail({ job, onClose, isSaved, toggleSave }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(event) => event.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>X</button>

        <div className="modal-header">
          <div className="company-logo-lg">
            {job.logo ? <img src={job.logo} alt={`${job.company} logo`} /> : job.company[0]}
          </div>
          <div>
            <h2>{job.title}</h2>
            <p>{job.company}</p>
          </div>
        </div>

        <div className="modal-meta">
          <span>Location: {job.location}</span>
          <span>Type: {job.type}</span>
          <span>Salary: {job.salary}</span>
          <span>Role: {job.role}</span>
        </div>

        <div className="modal-section">
          <h3>Description</h3>
          <p>{job.description}</p>
        </div>

        <div className="modal-section">
          <h3>Experience Required</h3>
          <p>{job.experience}</p>
        </div>

        <div className="modal-section">
          <h3>Skills Required</h3>
          <div className="skills-tags">
            {job.skills.map((skill) => <span key={skill} className="skill-tag">{skill}</span>)}
          </div>
        </div>

        <div className="modal-actions">
          <a href={job.applyLink} target="_blank" rel="noreferrer" className="apply-btn">
            Apply Now
          </a>
          <a href={job.linkedInAlertLink} target="_blank" rel="noreferrer" className="linkedin-btn">
            LinkedIn Alert
          </a>
          <button className="save-btn-lg" onClick={() => toggleSave(job.id)}>
            {isSaved ? 'Saved' : 'Save Job'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobDetail;
