import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={styles.navbar}>
      <div className="container p-2 d-flex justify-content-between align-items-center">
        
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            className="img-fluid"
            style={styles.logo}
            alt="Logo"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={styles.toggler}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav text-center">
            {[
              { path: "/signup", label: "Signup" },
              { path: "/about", label: "About" },
              { path: "/product", label: "Product" },
              { path: "/pricing", label: "Pricing" },
              { path: "/support", label: "Support" },
            ].map((item, index) => (
              <li className="nav-item" key={index}>
                <Link className="nav-link" to={item.path} style={styles.navLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    background: "#FFF",
    transition: "all 0.3s ease-in-out",
    padding: "10px 20px",
  },
  logo: {
    width: "120px",
    transition: "transform 0.3s ease-in-out",
  },
  toggler: {
    border: "none",
    outline: "none",
  },
  navLink: {
    fontWeight: "bold",
    color: "#333",
    padding: "10px 15px",
    transition: "color 0.3s ease-in-out, transform 0.3s ease-in-out",
  },
};

export default Navbar;
