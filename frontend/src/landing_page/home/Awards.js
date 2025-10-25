import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 col-12 text-center p-md-5 p-3">
          <img 
            src="media/images/largestBroker.svg" 
            className="img-fluid mx-auto d-block"
            alt="Largest Broker in India"
          />
        </div>

        {/* Text Section */}
        <div className="col-md-6 col-12 p-md-5 p-3 text-md-start text-center">
          <h1 className="fw-bold mb-4">Largest stock broker in India</h1>
          <p className="text-muted lh-lg">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          {/* List Items */}
          <div className="row">
            <div className="col-6">
              <ul className="list-unstyled">
                <li>✅ Futures and Options</li>
                <li>✅ Commodity derivatives</li>
                <li>✅ Currency derivatives</li>
              </ul>
            </div>
            <div className="col-6">
              <ul className="list-unstyled">
                <li>✅ Stocks & IPOs</li>
                <li>✅ Direct mutual funds</li>
                <li>✅ Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>

          {/* Press Logos Image */}
          <img 
            src="media/images/pressLogos.png" 
            className="img-fluid mt-4 mx-auto d-block"
            style={{ width: "90%" }}
            alt="Press Mentions"
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
