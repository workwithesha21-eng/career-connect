
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { jobs } from '../data/jobs';

function Jobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobType, setJobType] = useState('All');

  // Load saved jobs from browser storage
  const [savedJobIds, setSavedJobIds] = useState(() => {
    const storedJobs = localStorage.getItem('savedJobIds');
    return storedJobs ? JSON.parse(storedJobs) : [];
  });

  // Save updated job IDs whenever the list changes
  useEffect(() => {
    localStorage.setItem(
      'savedJobIds',
      JSON.stringify(savedJobIds)
    );
  }, [savedJobIds]);

  // Search and filter jobs
  const filteredJobs = jobs.filter((job) => {
    const search = searchTerm.toLowerCase();

    const matchesSearch =
      job.title.toLowerCase().includes(search) ||
      job.company.toLowerCase().includes(search) ||
      job.location.toLowerCase().includes(search) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(search)
      );

    const matchesType =
      jobType === 'All' || job.type === jobType;

    return matchesSearch && matchesType;
  });

  // Save or remove a job
  function handleSaveJob(jobId) {
    if (savedJobIds.includes(jobId)) {
      setSavedJobIds(
        savedJobIds.filter((id) => id !== jobId)
      );
    } else {
      setSavedJobIds([...savedJobIds, jobId]);
    }
  }

  return (
    <div className="container py-4 py-md-5">

      {/* Page Heading */}
      <div className="mb-4">
        <h1 className="fw-bold">Explore Job Opportunities</h1>

        <p className="text-muted">
          Discover your next career opportunity with leading companies.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="row mb-4">

        <div className="col-12 col-md-8 mb-3">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search jobs, companies, locations or skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="col-12 col-md-4 mb-3">
          <select
            className="form-select form-select-lg"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          >
            <option value="All">All Job Types</option>
            <option value="Full Time">Full Time</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

      </div>

      {/* Job Count */}
      <div className="d-flex justify-content-between flex-wrap mb-4">

        <p className="text-muted mb-0">
          Showing {filteredJobs.length} job(s)
        </p>

        <p className="text-primary fw-semibold mb-0">
          Saved Jobs: {savedJobIds.length}
        </p>

      </div>

      {/* Job Listings */}
      <div className="row">

        {filteredJobs.map((job) => (

          <div
            className="col-12 col-sm-6 col-lg-4 mb-4"
            key={job.id}
          >

            <div className="card h-100 p-3 shadow-sm">

              <div className="card-body d-flex flex-column">

                <span className="badge bg-primary-subtle text-primary align-self-start mb-3">
                  {job.type}
                </span>

                <h5 className="fw-bold">
                  {job.title}
                </h5>

                <p className="text-muted mb-2">
                  {job.company}
                </p>

                <p className="text-secondary">
                  📍 {job.location}
                </p>

                <p className="fw-semibold text-success">
                  Salary: {job.salary}
                </p>

                <p className="text-muted">
                  {job.description}
                </p>

                <h6 className="fw-bold mt-2">
                  Required Skills
                </h6>

                <div className="d-flex flex-wrap gap-2 mb-3">

                  {job.skills.map((skill) => (
                    <span
                      key={skill}
                      className="badge bg-light text-primary border p-2"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

                {/* Save Job Button */}
                <button
                  type="button"
                  className={`btn mb-2 ${
                    savedJobIds.includes(job.id)
                      ? 'btn-success'
                      : 'btn-outline-success'
                  }`}
                  onClick={() => handleSaveJob(job.id)}
                >
                  {savedJobIds.includes(job.id)
                    ? '✓ Saved'
                    : '♡ Save Job'}
                </button>

                {/* View Details Button */}
                <Link
                  to={`/jobs/${job.id}`}
                  className="btn btn-outline-primary mt-auto"
                >
                  View Details
                </Link>

              </div>
            </div>
          </div>

        ))}

        {/* No Jobs Found */}
        {filteredJobs.length === 0 && (

          <div className="col-12 text-center py-5">

            <h4>No jobs found</h4>

            <p className="text-muted">
              Try changing your search or job type.
            </p>

            <button
              className="btn btn-primary"
              onClick={() => {
                setSearchTerm('');
                setJobType('All');
              }}
            >
              Reset Filters
            </button>

          </div>

        )}

      </div>
    </div>
  );
}

export default Jobs;





