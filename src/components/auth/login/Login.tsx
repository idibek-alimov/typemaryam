import React, { useState } from "react";
import "./Login.css";
import { AuthData } from "../../../extra/types/AuthData";
import { url } from "../../../extra/axios";
import axios from "axios";
import { URLSearchParams } from "url";
import { convertCompilerOptionsFromJson } from "typescript";
import { useAppDispatch } from "../../../store/hooks";
import { addToken } from "../../../store/features/token/tokenSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useAppDispatch();
  const [authData, setAuthData] = useState<AuthData>({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const onSubmitHandle = () => {
    const qs = require("qs");
    axios
      .post(url + "/api/user/authenticate", authData) //qs.stringify(authData))
      .then((response) => {
        dispatch(addToken(response.data));
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="login-page-div">
      <div className="login-box-wrapper">
        <div className="login-box">
          <span className="login-logo">maryam</span>
          <form
            className="login-form"
            onSubmit={(event) => {
              event.preventDefault();
              onSubmitHandle();
            }}
          >
            <div id="login">Login</div>
            <div id="log-box">
              <span>Username</span>
              <input
                type="text"
                name="username"
                value={authData.username}
                onChange={(event) => {
                  event.preventDefault();
                  setAuthData({ ...authData, username: event.target.value });
                }}
              />
            </div>
            <div id="log-box">
              <span>Password</span>
              <input
                type="password"
                name="password"
                value={authData.password}
                onChange={(event) => {
                  event.preventDefault();
                  setAuthData({ ...authData, password: event.target.value });
                }}
              />
            </div>
            <div className="login-submit-button-box">
              <button className="login-submit-button" type="submit">
                submit
              </button>
            </div>
          </form>
        </div>
        <div className="new-to-box">
          <div className="new-to">
            <hr className="before" />
            <span>new to Maryam?</span>
            <hr className="before" />
          </div>
          <div className="sign-up-ref">
            <button
              className="sign-up-ref-button"
              onClick={(event) => {
                navigate("/signup");
              }}
            >
              create your new accaunt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
