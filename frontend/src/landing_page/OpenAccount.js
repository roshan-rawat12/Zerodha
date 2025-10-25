import React from "react";

function OpenAccount() {
  return (
    <div className="container p-5 mb-5 text-center">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="mt-5 fw-bold">Open a Zerodha account</h1>
          <p className="text-muted fs-5">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.
          </p>
          <button
            className="btn btn-primary fs-5 px-4 py-2 mt-3 mx-auto d-block w-50 w-md-25"
          >
            Sign up Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
