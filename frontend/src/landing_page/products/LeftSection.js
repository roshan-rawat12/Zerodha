import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Left: Product Image */}
        <div className="col-md-6 text-center">
          <img
            src={imageURL}
            alt={productName}
            className="img-fluid"
            style={{ maxHeight: "350px", borderRadius: "10px" }}
          />
        </div>

        {/* Right: Product Info */}
        <div className="col-md-6 p-4">
          <h1 className="fw-bold">{productName}</h1>
          <p className="text-muted">{productDescription}</p>

          {/* Buttons */}
          <div className="d-flex gap-3 mt-3">
            <a href={tryDemo} className="btn btn-primary">
              Try Demo
            </a>
            <a href={learnMore} className="btn btn-outline-secondary">
              Learn More
            </a>
          </div>

          {/* App Store Badges */}
          <div className="d-flex gap-3 mt-4">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Get it on Google Play"
                className="store-badge"
              />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="Download on the App Store"
                className="store-badge"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Embedded CSS */}
      <style>
        {`
          .store-badge {
            height: 50px;
            transition: transform 0.3s ease;
          }
          .store-badge:hover {
            transform: scale(1.1);
          }
        `}
      </style>
    </div>
  );
}

export default LeftSection;
