
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { jobs } from '../data/jobs';

function SavedJobs() {
  const [savedJobIds, setSavedJobIds] = useState(() => {
    const storedJobs = localStorage.getItem('savedJobIds');

    return storedJobs ? JSON.parse(storedJobs) : [];
  });

  const savedJobs = jobs.filter((job) =>
    savedJobIds.includes(job.id)
  );

  function handleRemove(jobId) {
    const updatedJobs = savedJobIds.filter(
      (id) => id !== jobId
    );

    setSavedJobIds(updatedJobs);

    localStorage.setItem(
      'savedJobIds',
      JSON.stringify(updatedJobs)
    );
  }

  function handleClearAll() {
    const confirmClear = window.confirm(
      'Are you sure you want to remove all saved jobs?'
    );

    if (confirmClear) {
      setSavedJobIds([]);
      localStorage.removeItem('savedJobIds');
    }
  }

  return (
    <div className="container py-4 py-md-5">

      {/* Page Heading */}
      <div className="d-flex justify-content-between align-items-center flex-wrap mb-4">

        <div>
          <h1 className="fw-bold">My Saved Jobs</h1>

          <p className="text-muted mb-0">
            Keep track of opportunities you are interested in.
          </p>
        </div>

        {savedJobs.length > 0 && (
          <button
            className="btn btn-outline-danger mt-3 mt-md-0"
            onClick={handleClearAll}
          >
            Clear All
          </button>
        )}

      </div>

      {/* Saved Jobs Counter */}
      <div className="card shadow-sm p-3 mb-4">
        <h6 className="text-muted mb-1">
          Total Saved Jobs
        </h6>

        <h3 className="fw-bold mb-0">
          {savedJobs.length}
        </h3>
      </div>

      {/* Empty State */}
      {savedJobs.length === 0 ? (

        <div className="text-center py-5">

          <h4 className="fw-bold">
            No saved jobs yet!
          </h4>

          <p className="text-muted">
            Browse available opportunities and save the jobs you like.
          </p>

          <Link to="/jobs" className="btn btn-primary mt-2">
            Browse Jobs
          </Link>

        </div>

      ) : (

        /* Saved Job Cards */
        <div className="row">

          {savedJobs.map((job) => (
            <div
              className="col-12 col-sm-6 col-lg-4 mb-4"
              key={job.id}
            >

              <div className="card h-100 p-3 shadow-sm">

                <div className="card-body d-flex flex-column">

                  <span className="badge bg-primary align-self-start mb-3">
                    {job.type}
                  </span>

                  <h5 className="fw-bold">
                    {job.title}
                  </h5>

                  <p className="text-muted mb-2">
                    {job.company}
                  </p>

                  <p className="text-secondary mb-2">
                    📍 {job.location}
                  </p>

                  <p className="text-success fw-semibold">
                    Salary: {job.salary}
                  </p>

                  <div className="mt-auto">

                    <Link
                      to={`/jobs/${job.id}`}
                      className="btn btn-outline-primary w-100 mb-2"
                    >
                      View Details
                    </Link>

                    <button
                      className="btn btn-outline-danger w-100"
                      onClick={() => handleRemove(job.id)}
                    >
                      Remove Saved Job
                    </button>

                  </div>

                </div>
              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default SavedJobs;

