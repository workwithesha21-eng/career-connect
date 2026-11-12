
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { jobs } from '../data/jobs';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  function handleSearch() {
    const results = jobs.filter((job) => {
      return (
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        job.location.toLowerCase().includes(location.toLowerCase())
      );
    });

    setFilteredJobs(results);
  }

  function handleReset() {
    setSearchTerm('');
    setLocation('');
    setFilteredJobs(jobs);
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="container-fluid bg-primary text-white text-center py-5">
        <div className="container py-4">
          <span className="badge bg-light text-primary mb-3">
            YOUR NEXT CAREER STARTS HERE
          </span>

          <h1 className="display-4 fw-bold">
            Find Your Dream Job
          </h1>

          <p className="lead mt-3 mb-4">
            Discover exciting opportunities and take the next step
            towards building your career.
          </p>

          {/* Responsive Search Section */}
          <div className="row justify-content-center">
            <div className="col-12 col-md-5 col-lg-4 mb-2">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Job title or skills"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="col-12 col-md-4 col-lg-3 mb-2">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="col-12 col-md-3 col-lg-2 mb-2">
              <button
                className="btn btn-light text-primary fw-bold w-100 btn-lg"
                onClick={handleSearch}
              >
                Search Jobs
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
          <div>
            <h2 className="fw-bold mb-1">Featured Jobs</h2>
            <p className="text-muted mb-0">
              Explore opportunities from leading companies.
            </p>
          </div>

          <Link to="/jobs" className="btn btn-outline-primary mt-2">
            View All Jobs
          </Link>
        </div>

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

                  <h5 className="fw-bold">{job.title}</h5>

                  <p className="text-muted mb-2">
                    {job.company}
                  </p>

                  <p className="text-secondary">
                    📍 {job.location}
                  </p>

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

          {filteredJobs.length === 0 && (
            <div className="col-12 text-center py-4">
              <h5>No jobs found</h5>

              <p className="text-muted">
                Try searching with a different job title or location.
              </p>

              <button
                className="btn btn-primary"
                onClick={handleReset}
              >
                Show All Jobs
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;
