import React from "react";
import "./Style.css";
export interface editShow {
  editShow: string | undefined;
  func: () => void;
}
const ChangeEmail = ({ editShow, func }: editShow) => {
  return (
    <div
      className="name-change-box"
      id={editShow && editShow === "edit-email" ? "edit-name-show" : ""}
    >
      <div className="change-name-text">Change email</div>
      <div className="change-name-input-box">
        <span>Email</span>
        <input />
      </div>
      <div className="change-name-button-box ">
        <button className="save">Save</button>
        <button className="cancle" onClick={() => func()}>
          Cancele
        </button>
      </div>
    </div>
  );
};

export default ChangeEmail;
