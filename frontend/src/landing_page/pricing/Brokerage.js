import React from "react";

function Brokerage() {
  return (
    <div className="container brokerage-container">
      {/* Section Container */}
      <div className="row p-5 mt-5 text-center border-top">
        {/* Brokerage Calculator Section */}
        <div className="col-md-8 p-4 text-md-start">
          <a href="#" className="brokerage-link">
            <h3 className="fs-5">Brokerage Calculator</h3>
          </a>
          <ul className="brokerage-list">
            <li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>Physical copies of contract notes, if required, shall be charged ₹20 per contract note. Courier charges apply.</li>
            <li>For NRI account (non-PIS), 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
            <li>For NRI account (PIS), 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
            <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20.</li>
          </ul>
        </div>

        {/* List of Charges Section */}
        <div className="col-md-4 p-4">
          <a href="#" className="brokerage-link">
            <h3 className="fs-5">List of Charges</h3>
          </a>
        </div>
      </div>

      {/* Embedded CSS for Styling */}
      <style>
        {`
          .brokerage-container {
            margin-top: 50px;
          }

          .brokerage-link {
            text-decoration: none;
            color: #007bff;
            transition: color 0.3s ease-in-out;
          }

          .brokerage-link:hover {
            color: #0056b3;
            text-decoration: underline;
          }

          .brokerage-list {
            text-align: left;
            line-height: 2;
            font-size: 14px;
            padding-left: 20px;
            color: #555;
          }

          @media (max-width: 768px) {
            .brokerage-list {
              font-size: 12px;
              text-align: center;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Brokerage;
