import React from "react";

function Hero() {
  return (
    <div className="container hero-container">
      {/* Header Section */}
      <div className="row p-5 mt-5 border-bottom text-center">
        <h1 className="hero-title">Pricing</h1>
        <h3 className="text-muted mt-3 fs-5">
          Free equity investments and flat ₹20 intraday & F&O trades
        </h3>
      </div>

      {/* Pricing Cards Section */}
      <div className="row p-5 mt-5 text-center">
        {/* Card 1 - Equity Delivery */}
        <div className="col-md-4 p-4">
          <img src="media/images/pricingEquity.svg" alt="Equity Delivery" className="pricing-icon"/>
          <h2 className="fs-4 mt-3">Free Equity Delivery</h2>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.
          </p>
        </div>

        {/* Card 2 - Intraday & F&O Trades */}
        <div className="col-md-4 p-4">
          <img src="media/images/intradayTrades.svg" alt="Intraday Trades" className="pricing-icon"/>
          <h2 className="fs-4 mt-3">Intraday and F&O Trades</h2>
          <p className="text-muted">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodities.
          </p>
        </div>

        {/* Card 3 - Free Mutual Funds */}
        <div className="col-md-4 p-4">
          <img src="media/images/pricingEquity.svg" alt="Mutual Funds" className="pricing-icon"/>
          <h2 className="fs-4 mt-3">Free Direct MF</h2>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
          </p>
        </div>
      </div>

      {/* Embedded CSS for Styling */}
      <style>
        {`
          .hero-container {
            margin-top: 50px;
          }

          .hero-title {
            font-weight: 600;
            color: #333;
          }

          .pricing-icon {
            width: 60px;
            height: auto;
          }

          @media (max-width: 768px) {
            .pricing-icon {
              width: 50px;
            }

            .fs-4 {
              font-size: 18px;
            }

            .text-muted {
              font-size: 14px;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Hero;
