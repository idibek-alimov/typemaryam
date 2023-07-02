import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { BsPerson, BsFillPersonFill } from "react-icons/bs";

const Login = () => {
  let navigate = useNavigate();
  return (
    // <button
    //   className="login_button"
    //   onClick={(event) => {
    //     navigate("login");
    //   }}
    // >
    <div className="login-div">
      <BsFillPersonFill
        className="login-button"
        onClick={(event) => {
          navigate("login");
        }}
      />
      <span>login</span>
    </div>
  );
};
export default Login;
