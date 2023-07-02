import React from "react";
import "./Style.css";
export interface editShow {
  editShow: string | undefined;
  func: () => void;
}
const DeleteAccaunt = ({ editShow, func }: editShow) => {
  return (
    <div
      className="name-change-box"
      id={editShow && editShow === "delete-accaunt" ? "edit-name-show" : ""}
    >
      <div className="change-name-text">Delete Accaunt</div>
      <div className="change-name-input-box">
        <span>Reason why you are deleting your accaunt</span>
        <textarea />
      </div>
      <div className="change-name-button-box ">
        <button className="save">Delete</button>
        <button className="cancle" onClick={() => func()}>
          Cancele
        </button>
      </div>
    </div>
  );
};

export default DeleteAccaunt;
