import React from "react";

function Pricing() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-md-6 col-12 text-md-start text-center p-md-5 p-3">
          <h1 className="fw-bold mb-3 fs-2">Unbeatable pricing</h1>
          <p className="text-muted lh-lg">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="btn btn-primary mt-3">
            See Pricing <i className="fa fa-long-arrow-right"></i>
          </a>
        </div>

        {/* Right Section - Pricing Boxes */}
        <div className="col-md-6 col-12">
          <div className="row text-center">
            <div className="col-md-6 col-12 p-3">
              <div className="border rounded-3 shadow-sm p-4">
                <h1 className="fw-bold text-primary">₹0</h1>
                <p className="text-muted">
                  Free equity delivery and <br /> direct mutual funds
                </p>
              </div>
            </div>
            <div className="col-md-6 col-12 p-3">
              <div className="border rounded-3 shadow-sm p-4">
                <h1 className="fw-bold text-primary">₹20</h1>
                <p className="text-muted">Intraday and F&O</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
