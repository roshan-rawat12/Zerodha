import React from "react";

function Hero() {
  return (
    <div className="container border-bottom mb-5">
      <div className="text-center mt-5 p-3">
        <h1 className="hero-title">Technology</h1>
        <h3 className="text-muted mt-3 fs-4">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="mt-3 mb-5">
          Check out our{" "}
          <a href="#" className="hero-link">
            investment offerings{" "}
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>

      {/* Embedded CSS for better styling */}
      <style>
        {`
          .hero-title {
            font-weight: 600;
            color: #333;
          }

          .hero-link {
            text-decoration: none;
            font-weight: 500;
            color: #007bff;
            transition: color 0.3s ease;
          }

          .hero-link:hover {
            color: #0056b3;
          }
        `}
      </style>
    </div>
  );
}

export default Hero;
