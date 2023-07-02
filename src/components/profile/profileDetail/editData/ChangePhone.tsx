import React from "react";
import "./Style.css";
export interface editShow {
  editShow: string | undefined;
  func: () => void;
}
const ChangePhone = ({ editShow, func }: editShow) => {
  return (
    <div
      className="name-change-box"
      id={editShow && editShow === "edit-phone" ? "edit-name-show" : ""}
    >
      <div className="change-name-text">Change Phone</div>
      <div className="change-name-input-box">
        <span>Phone</span>
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

export default ChangePhone;
