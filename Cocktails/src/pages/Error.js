import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="error-page section">
      <div className="error-container">
        <h1 className="section-title">Idhar Kuch nah hai wapas chaliye</h1>
        <Link to="/" className="btn btn-primary">
          Back To Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
