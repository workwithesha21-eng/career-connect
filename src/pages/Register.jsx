
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleRegister(e) {
    e.preventDefault();

    if (password.length < 6) {
      alert('Password must contain at least 6 characters.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    alert('Registration successful!');

    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  }

  return (
    <div className="container py-4 py-md-5">

      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-5">

          <div className="card p-3 p-md-4 shadow-sm">

            <div className="card-body">

              {/* Registration Heading */}
              <div className="text-center mb-4">

                <span className="badge bg-primary-subtle text-primary mb-3">
                  CAREERCONNECT
                </span>

                <h2 className="fw-bold">
                  Create Account
                </h2>

                <p className="text-muted">
                  Join CareerConnect and discover new opportunities.
                </p>

              </div>

              <hr className="mb-4" />

              {/* Registration Form */}
              <form onSubmit={handleRegister}>

                <div className="mb-3">
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

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Email Address
                  </label>

                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    Password
                  </label>

                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Minimum 6 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    minLength={6}
                    required
                  />

                  <small className="text-muted">
                    Password must contain at least 6 characters.
                  </small>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    Confirm Password
                  </label>

                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Re-enter your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-100"
                >
                  Create Account
                </button>

              </form>

              {/* Login Link */}
              <div className="text-center mt-4">

                <p className="text-muted mb-0">
                  Already have an account?{' '}

                  <Link
                    to="/login"
                    className="fw-semibold text-primary"
                  >
                    Login here
                  </Link>
                </p>

              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Register;

