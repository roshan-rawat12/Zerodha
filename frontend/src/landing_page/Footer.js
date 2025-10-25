import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container border-top pt-5">
        <div className="row">
          {/* Logo & Copyright */}
          <div className="col-md-4 text-center text-md-start">
            <img
              src="media/images/logo.svg"
              className="footer-logo"
              alt="Company Logo"
            />
            <p className="mt-3 text-muted">
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          {/* Company Links */}
          <div className="col-md-2">
            <h6 className="fw-bold">Company</h6>
            <ul className="footer-links">
              <li><a href="#">About</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Referral Programme</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Zerodha.tech</a></li>
              <li><a href="#">Press & Media</a></li>
              <li><a href="#">Zerodha Cares (CSR)</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="col-md-2">
            <h6 className="fw-bold">Support</h6>
            <ul className="footer-links">
              <li><a href="#">Contact</a></li>
              <li><a href="#">Support Portal</a></li>
              <li><a href="#">Z-Connect Blog</a></li>
              <li><a href="#">List of Charges</a></li>
              <li><a href="#">Downloads & Resources</a></li>
            </ul>
          </div>

          {/* Account Links */}
          <div className="col-md-2">
            <h6 className="fw-bold">Account</h6>
            <ul className="footer-links">
              <li><a href="#">Open an Account</a></li>
              <li><a href="#">Fund Transfer</a></li>
              <li><a href="#">60-Day Challenge</a></li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="footer-disclaimer mt-5">
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.: INZ000031633.
            CDSL: Depository services through Zerodha Securities Pvt. Ltd. – SEBI Registration
            no.: IN-DP-100-2015. Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX:
            46025 – SEBI Registration no.: INZ000038238.
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES portal.
            Mandatory details: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy grievance redressal.
          </p>
          <p>
            Investments in securities market are subject to market risks; read all related
            documents carefully before investing.
          </p>
          <p>
            "Prevent unauthorized transactions in your account. Update your mobile numbers/
            email IDs with your stock brokers. Receive transaction details from the exchange
            via SMS/email at the end of the day."
          </p>
        </div>
      </div>

      {/* Embedded CSS */}
      <style>
        {`
          .footer {
            background-color: #FAFAFA;
            padding: 50px 0;
          }

          .footer-logo {
            width: 50%;
            transition: transform 0.3s ease-in-out;
          }

          .footer-logo:hover {
            transform: scale(1.05);
          }

          .footer-links {
            list-style: none;
            padding: 0;
          }

          .footer-links li {
            margin-bottom: 8px;
          }

          .footer-links a {
            text-decoration: none;
            color: #6c757d;
            transition: color 0.3s ease-in-out;
          }

          .footer-links a:hover {
            color: #007bff;
          }

          .footer-disclaimer {
            font-size: 14px;
            color: #6c757d;
            line-height: 1.6;
            text-align: center;
          }

          @media (max-width: 768px) {
            .footer .col-md-2, .footer .col-md-4 {
              text-align: center;
              margin-bottom: 20px;
            }

            .footer-logo {
              width: 70%;
            }
          }
        `}
      </style>
    </footer>
  );
}

export default Footer;
