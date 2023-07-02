import React from "react";
import { Link } from "react-router-dom";

import "./Logo.css";

const Logo = () => {
  return (
    <div className="logo">
      <Link className="logo-link" to="/">
        <h1>maryam</h1>
      </Link>
    </div>
  );
};

export default Logo;
