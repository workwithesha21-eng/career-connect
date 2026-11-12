
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(e) {
    e.preventDefault();

    if (!email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    alert('Login form submitted successfully!');
  }

  return (
    <div className="container py-4 py-md-5">

      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-5">

          <div className="card p-3 p-md-4 shadow-sm">

            <div className="card-body">

              {/* Login Heading */}
              <div className="text-center mb-4">

                <span className="badge bg-primary-subtle text-primary mb-3">
                  CAREERCONNECT
                </span>

                <h2 className="fw-bold">
                  Welcome Back!
                </h2>

                <p className="text-muted">
                  Login to your CareerConnect account
                </p>

              </div>

              <hr className="mb-4" />

              {/* Login Form */}
              <form onSubmit={handleLogin}>

                <div className="mb-4">

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

                <div className="mb-4">

                  <label className="form-label fw-semibold">
                    Password
                  </label>

                  <input
                    type="password"
                    className="form-control form-control-lg"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />

                </div>

                <button
                  className="btn btn-primary btn-lg w-100"
                  type="submit"
                >
                  Login
                </button>

              </form>

              {/* Register Link */}
              <div className="text-center mt-4">

                <p className="text-muted mb-0">
                  Don't have an account?{' '}

                  <Link
                    to="/register"
                    className="fw-semibold text-primary"
                  >
                    Register here
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

export default Login;


