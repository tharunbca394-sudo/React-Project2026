import React from 'react';
import JobCard from './JobCard';
 
function JobList({ jobs, onSelect, savedJobs, toggleSave, title = 'Jobs Found' }) {
  return (
    <div className="job-list">
      <h2 className="results-count">{jobs.length} {title}</h2>
      <div className="job-grid">
        {jobs.map(job => (
          <JobCard
            key={job.id}
            job={job}
            onSelect={onSelect}
            isSaved={savedJobs.includes(job.id)}
            toggleSave={toggleSave}
          />
        ))}
      </div>
    </div>
  );
}
export default JobList;
