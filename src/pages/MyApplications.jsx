
import { useState } from 'react';
import { Link } from 'react-router-dom';

function MyApplications() {
  const [applications] = useState(() => {
    const storedApplications = localStorage.getItem('applications');

    return storedApplications
      ? JSON.parse(storedApplications)
      : [];
  });

  return (
    <div className="container py-4 py-md-5">

      {/* Page Heading */}
      <div className="mb-4">
        <h1 className="fw-bold">My Applications</h1>

        <p className="text-muted">
          Track and review the jobs you have applied for.
        </p>
      </div>

      {/* Application Count */}
      <div className="card shadow-sm p-3 mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h6 className="text-muted mb-1">
              Total Applications
            </h6>

            <h3 className="fw-bold mb-0">
              {applications.length}
            </h3>
          </div>

          <span className="badge bg-primary p-2">
            Applications
          </span>
        </div>
      </div>

      {/* Empty State */}
      {applications.length === 0 ? (
        <div className="text-center py-5">
          <h4 className="fw-bold">No applications yet!</h4>

          <p className="text-muted">
            You haven't applied for any jobs yet.
            Start exploring opportunities today.
          </p>

          <Link to="/jobs" className="btn btn-primary mt-2">
            Find Jobs
          </Link>
        </div>
      ) : (

        /* Application Cards */
        <div className="row">

          {applications.map((application) => (
            <div
              className="col-12 col-md-6 mb-4"
              key={application.id}
            >
              <div className="card h-100 p-3 p-md-4 shadow-sm">

                <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
                  <span className="badge bg-success p-2">
                    Application Submitted
                  </span>

                  <small className="text-muted mt-2 mt-sm-0">
                    {application.appliedAt}
                  </small>
                </div>

                <h5 className="fw-bold">
                  {application.jobTitle}
                </h5>

                <p className="text-muted mb-3">
                  {application.company}
                </p>

                <hr />

                <h6 className="fw-bold mb-3">
                  Applicant Information
                </h6>

                <p className="mb-2">
                  <strong>Name:</strong> {application.name}
                </p>

                <p className="mb-2">
                  <strong>Email:</strong> {application.email}
                </p>

                <p className="mb-2">
                  <strong>Experience:</strong> {application.experience}
                </p>

                <div className="mt-auto pt-3">
                  <Link
                    to={`/jobs/${application.jobId}`}
                    className="btn btn-outline-primary w-100"
                  >
                    View Job Details
                  </Link>
                </div>

              </div>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default MyApplications;

