import React from "react";
import "./Style.css";
import { useAppDispatch } from "../../../../store/hooks";
import { removeToken } from "../../../../store/features/token/tokenSlice";
import { useNavigate } from "react-router-dom";
export interface editShow {
  editShow: string | undefined;
  func: () => void;
}
const LogOut = ({ editShow, func }: editShow) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onLogOutHandle = () => {
    dispatch(removeToken());
    navigate("/");
    window.location.reload();
  };
  return (
    <div
      className="name-change-box"
      id={editShow && editShow === "log-out" ? "edit-name-show" : ""}
    >
      <div className="change-name-text">Log Out</div>
      <div className="change-name-input-box">
        <span>Are you fucking sure you want to log out</span>
        <textarea />
      </div>
      <div className="change-name-button-box ">
        <button className="save" onClick={onLogOutHandle}>
          Delete
        </button>
        <button className="cancle" onClick={() => func()}>
          Cancele
        </button>
      </div>
    </div>
  );
};

export default LogOut;
