import React from "react";
import { Link } from "react-router-dom";

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
                className="nav-link fw-semi-bold btn btn-outline-light px-4 mx-4"
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
