import React from 'react';

function SearchFilter({ search, setSearch, filters, setFilters, jobs, activeTab }) {
  const roles = [...new Set(jobs.map((job) => job.role))];
  const locations = [...new Set(jobs.map((job) => job.location))];
  const types = activeTab === 'internship'
    ? ['Full-Time', 'Part-Time', 'Remote', 'Hybrid']
    : [...new Set(jobs.map((job) => job.type))];

  const handleFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const clearFilters = () => {
    setFilters({ role: activeTab === 'internship' ? 'Internship' : '', location: '', type: '' });
    setSearch('');
  };

  return (
    <div className="search-filter-container">
      <div className="search-bar">
        <span className="search-icon">Search</span>
        <input
          type="text"
          placeholder="Search jobs, companies, skills..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div className="filters">
        {activeTab !== 'internship' && (
          <select value={filters.role} onChange={(event) => handleFilter('role', event.target.value)}>
            <option value="">All Roles</option>
            {roles.map((role) => <option key={role} value={role}>{role}</option>)}
          </select>
        )}

        <select value={filters.location} onChange={(event) => handleFilter('location', event.target.value)}>
          <option value="">All Locations</option>
          {locations.map((location) => <option key={location} value={location}>{location}</option>)}
        </select>

        <select value={filters.type} onChange={(event) => handleFilter('type', event.target.value)}>
          <option value="">{activeTab === 'internship' ? 'All Internship Types' : 'All Types'}</option>
          {types.map((type) => <option key={type} value={type}>{type}</option>)}
        </select>

        {activeTab === 'internship' && (
          <div className="internship-tabs">
            {types.map((type) => (
              <button
                key={type}
                className={`internship-type ${filters.type === type ? 'active' : ''}`}
                onClick={() => handleFilter('type', type)}
              >
                {type}
              </button>
            ))}
          </div>
        )}

        <button className="clear-btn" onClick={clearFilters}>Clear</button>
      </div>
    </div>
  );
}

export default SearchFilter;
