import React from "react";

function Team() {
  return (
    <div className="container team-container">
      {/* Section Heading */}
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center team-heading">People</h1>
      </div>

      {/* Team Member Section */}
      <div className="row p-3 text-muted team-content">
        {/* Image Section */}
        <div className="col-md-6 p-3 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            className="team-image"
            alt="Nithin Kamath"
          />
          <h4 className="mt-4">Nithin Kamath</h4>
          <h6 className="text-primary">Founder, CEO</h6>
        </div>

        {/* Description Section */}
        <div className="col-md-6 p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p><strong>Playing basketball is his zen.</strong></p>
          <p>
            Connect on 
            <a href="#" className="team-link"> Homepage</a> / 
            <a href="#" className="team-link"> TradingQnA</a> /  
            <a href="#" className="team-link"> Twitter</a>
          </p>
        </div>
      </div>

      {/* Embedded CSS for styling */}
      <style>
        {`
          .team-container {
            margin-top: 50px;
          }

          .team-heading {
            font-size: 2em;
            font-weight: bold;
            color: #333;
          }

          .team-content {
            font-size: 1.1em;
            line-height: 1.8;
          }

          .team-image {
            width: 50%;
            border-radius: 50%;
            border: 4px solid #ddd;
            transition: transform 0.3s ease-in-out;
          }

          .team-image:hover {
            transform: scale(1.05);
          }

          .team-link {
            color: #007bff;
            text-decoration: none;
            transition: color 0.3s ease-in-out;
          }

          .team-link:hover {
            color: #0056b3;
            text-decoration: underline;
          }

          @media (max-width: 768px) {
            .team-content {
              text-align: center;
              flex-direction: column;
            }

            .team-image {
              width: 70%;
            }

            .team-heading {
              font-size: 1.6em;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Team;
