
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { jobs } from '../data/jobs';

function Apply() {
  const { id } = useParams();

  const selectedJob = jobs.find(
    (job) => job.id === Number(id)
  );

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [experience, setExperience] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const existingApplications = JSON.parse(
      localStorage.getItem('applications') || '[]'
    );

    const newApplication = {
      id: Date.now(),
      jobId: selectedJob.id,
      jobTitle: selectedJob.title,
      company: selectedJob.company,
      name,
      email,
      experience,
      appliedAt: new Date().toLocaleDateString()
    };

    existingApplications.push(newApplication);

    localStorage.setItem(
      'applications',
      JSON.stringify(existingApplications)
    );

    alert('Your application has been submitted successfully!');

    setName('');
    setEmail('');
    setExperience('');
  }

  if (!selectedJob) {
    return (
      <div className="container text-center py-5">
        <h2>Job Not Found!</h2>

        <p className="text-muted">
          The job you are trying to apply for does not exist.
        </p>

        <Link to="/jobs" className="btn btn-primary">
          Back to Jobs
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-4 py-md-5">

      <div className="row justify-content-center">
        <div className="col-12 col-md-9 col-lg-7">

          <div className="card shadow-sm p-3 p-md-4">

            {/* Form Heading */}
            <div className="card-body">

              <span className="badge bg-primary-subtle text-primary mb-3">
                JOB APPLICATION
              </span>

              <h2 className="fw-bold mb-2">
                Apply for {selectedJob.title}
              </h2>

              <p className="text-muted mb-3">
                {selectedJob.company} | {selectedJob.location}
              </p>

              <p className="text-secondary">
                Fill in your details below to submit your application.
              </p>

              <hr className="my-4" />

              {/* Application Form */}
              <form onSubmit={handleSubmit}>

                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Full Name
                  </label>

                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Email Address
                  </label>

                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Experience
                  </label>

                  <select
                    className="form-select form-select-lg"
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    required
                  >
                    <option value="">Select your experience</option>
                    <option value="Fresher">Fresher</option>
                    <option value="0-1 Years">0-1 Years</option>
                    <option value="1-3 Years">1-3 Years</option>
                    <option value="3+ Years">3+ Years</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-100"
                >
                  Submit Application
                </button>

              </form>

              <div className="text-center mt-4">
                <Link
                  to={`/jobs/${selectedJob.id}`}
                  className="text-decoration-none"
                >
                  ← Back to Job Details
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Apply;



