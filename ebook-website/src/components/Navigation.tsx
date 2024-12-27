import React from "react";
import { Link } from "react-router-dom";

/**
 * Navigation component for the website.
 * This component renders the main navigation bar, including the logo,
 * navigation links, and a responsive toggle for smaller screens.
 *
 * @author Michael Adesina <uniquecyborg@gmail.com>
 * @version 1.0.0 
 * @returns {JSX.Element} The Navigation component.
 */
const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img
            src="/images/logo.png"
            alt="Website Logo"
            title="Homepage"
            style={{ width: 225 }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link fw-semi-bold">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/details" className="nav-link fw-semi-bold">
                Details
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-link btn btn-outline-light fw-semibold px-4 mx-4"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;