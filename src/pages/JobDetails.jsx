
import { Link, useParams } from 'react-router-dom';
import { jobs } from '../data/jobs';

function JobDetails() {
  const { id } = useParams();

  const job = jobs.find((job) => job.id === Number(id));

  if (!job) {
    return (
      <div className="container text-center py-5">
        <h2>Job Not Found!</h2>
        <p className="text-muted">
          The job you are looking for does not exist.
        </p>
        <Link to="/jobs" className="btn btn-primary">
          Back to Jobs
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-4 py-md-5">

      <Link
        to="/jobs"
        className="text-decoration-none text-primary"
      >
        ← Back to Jobs
      </Link>

      <div className="row justify-content-center mt-3">
        <div className="col-12 col-lg-10">

          <div className="card shadow-sm p-2 p-md-4">
            <div className="card-body">

              {/* Job Header */}
              <span className="badge bg-primary-subtle text-primary mb-3">
                {job.type}
              </span>

              <h1 className="fw-bold mb-2">
                {job.title}
              </h1>

              <h5 className="text-muted mb-4">
                {job.company}
              </h5>

              <hr />

              {/* Job Information */}
              <div className="row my-4">

                <div className="col-12 col-sm-4 mb-3">
                  <p className="text-muted mb-1">Location</p>
                  <h6>📍 {job.location}</h6>
                </div>

                <div className="col-12 col-sm-4 mb-3">
                  <p className="text-muted mb-1">Salary</p>
                  <h6>{job.salary}</h6>
                </div>

                <div className="col-12 col-sm-4 mb-3">
                  <p className="text-muted mb-1">Job Type</p>
                  <h6>{job.type}</h6>
                </div>

              </div>

              <hr />

              {/* Job Description */}
              <h4 className="fw-bold mt-4">
                Job Description
              </h4>

              <p className="text-secondary">
                {job.description}
              </p>

              {/* Required Skills */}
              <h4 className="fw-bold mt-4">
                Required Skills
              </h4>

              <div className="d-flex flex-wrap gap-2 mt-3">
                {job.skills.map((skill) => (
                  <span
                    key={skill}
                    className="badge bg-light text-primary border p-2"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Apply Button */}
              <div className="mt-4 mt-md-5">
                <Link
                  to={`/apply/${job.id}`}
                  className="btn btn-primary btn-lg w-100 w-sm-auto"
                >
                  Apply Now
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default JobDetails;

