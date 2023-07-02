import React from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <button className="signup_button" onClick={() => navigate("signup")}>
      Signup
    </button>
  );
};
export default Signup;
