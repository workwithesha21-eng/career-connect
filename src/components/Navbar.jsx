
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">

        <Link
          className="navbar-brand fw-bold"
          to="/"
          onClick={closeMenu}
        >
          CareerConnect
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <div className="navbar-nav ms-auto">

            <Link className="nav-link" to="/" onClick={closeMenu}>
              Home
            </Link>

            <Link className="nav-link" to="/jobs" onClick={closeMenu}>
              Find Jobs
            </Link>

            <Link className="nav-link" to="/saved-jobs" onClick={closeMenu}>
              Saved Jobs
            </Link>

            <Link className="nav-link" to="/my-applications" onClick={closeMenu}>
              My Applications
            </Link>

            <Link className="nav-link" to="/companies" onClick={closeMenu}>
              Companies
            </Link>

            <Link className="nav-link" to="/login" onClick={closeMenu}>
              Login
            </Link>

            <Link
              to="/register"
              className="btn btn-light ms-lg-2 mt-2 mt-lg-0"
              onClick={closeMenu}
            >
              Register
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;



