import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 col-12 text-center p-3">
          <img 
            src="media/images/education.svg" 
            className="img-fluid mx-auto d-block" 
            style={{ width: "70%" }} 
            alt="Stock Market Education"
          />
        </div>

        {/* Text Section */}
        <div className="col-md-6 col-12 text-md-start text-center p-4">
          <h1 className="fw-bold mb-3 fs-2">Free and open market education</h1>
          <p className="text-muted lh-lg">
            Varsity, the largest online stock market education book in the world,
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" className="btn btn-primary mt-2">
            Varsity <i className="fa fa-long-arrow-right"></i>
          </a>

          <p className="text-muted mt-4 lh-lg">
            TradingQ&A, the most active trading and investment community in
            India for all your market-related queries.
          </p>
          <a href="#" className="btn btn-outline-primary mt-2">
            TradingQ&A <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
