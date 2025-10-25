import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-md-5 p-3">
        {/* Text Section */}
        <div className="col-md-6 col-12 p-md-5 p-3 text-md-start text-center">
          <h1 className="fs-2 fw-bold mb-4">Trust with confidence</h1>

          <h2 className="fs-4 fw-semibold">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.
          </p>

          <h2 className="fs-4 fw-semibold">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High-quality apps that you use at your pace, the way you like.
          </p>

          <h2 className="fs-4 fw-semibold">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-4 fw-semibold">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions but actively help you do better with your
            money.
          </p>
        </div>

        {/* Image Section */}
        <div className="col-md-6 col-12 p-md-5 p-3 text-center">
          <img
            src="media/images/ecosystem.png"
            style={{ width: "90%" }}
            className="mx-auto d-block img-fluid"
            alt="Zerodha ecosystem"
          />

          {/* Links Section */}
          <div className="mt-4">
            <a href="#" className="btn btn-primary mx-2">
              Explore our products <i className="fa fa-long-arrow-right"></i>
            </a>
            <a href="#" className="btn btn-outline-primary mx-2">
              Try Kite demo <i className="fa fa-long-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
