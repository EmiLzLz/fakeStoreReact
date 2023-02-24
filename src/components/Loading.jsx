import React from "react";
import arrow from "../assets/images/up-arrow.png"

function Loading() {
  return (
    <div className="loading w-100 vh-100 py-5 d-flex flex-column align-items-center">
      <div className="ilustration w-100 d-flex align-items-center justify-content-center py-4">
        <img src={arrow} alt="arrow" className="arrow"/>
        <img src={arrow} alt="arrow" className="arrow"/>
      </div>
      <div className="message">
        <p className="fs-1 text-center">
          Please, select a category to see the products
        </p>
      </div>
    </div>
  );
}

export default Loading;
