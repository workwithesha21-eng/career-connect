
import { Link } from 'react-router-dom';

function Companies() {
  const companies = [
    {
      id: 1,
      name: 'Google',
      location: 'Bangalore',
      industry: 'Technology',
      description:
        'Explore opportunities in software development, frontend engineering and more.',
      initial: 'G'
    },
    {
      id: 2,
      name: 'Infosys',
      location: 'Chennai',
      industry: 'IT Services',
      description:
        'Discover careers in software development, consulting and technology.',
      initial: 'I'
    },
    {
      id: 3,
      name: 'TCS',
      location: 'Hyderabad',
      industry: 'IT Services',
      description:
        'Find opportunities in web development, engineering and IT services.',
      initial: 'T'
    }
  ];

  return (
    <div className="container py-4 py-md-5">

      {/* Page Heading */}
      <div className="mb-5">
        <span className="badge bg-primary-subtle text-primary mb-3">
          EXPLORE EMPLOYERS
        </span>

        <h1 className="fw-bold">
          Top Companies
        </h1>

        <p className="text-muted">
          Discover leading companies and find opportunities
          that match your career goals.
        </p>
      </div>

      {/* Company Cards */}
      <div className="row">

        {companies.map((company) => (
          <div
            className="col-12 col-sm-6 col-lg-4 mb-4"
            key={company.id}
          >

            <div className="card h-100 p-3 shadow-sm">

              <div className="card-body d-flex flex-column">

                {/* Company Initial */}
                <div
                  className="bg-primary text-white rounded d-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: '60px',
                    height: '60px',
                    fontSize: '26px',
                    fontWeight: 'bold'
                  }}
                >
                  {company.initial}
                </div>

                {/* Company Information */}
                <h4 className="fw-bold">
                  {company.name}
                </h4>

                <span className="badge bg-primary-subtle text-primary align-self-start mb-3">
                  {company.industry}
                </span>

                <p className="text-secondary mb-2">
                  📍 {company.location}
                </p>

                <p className="text-muted">
                  {company.description}
                </p>

                {/* Explore Button */}
                <Link
                  to="/jobs"
                  className="btn btn-outline-primary w-100 mt-auto"
                >
                  Explore Jobs
                </Link>

              </div>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Companies;

