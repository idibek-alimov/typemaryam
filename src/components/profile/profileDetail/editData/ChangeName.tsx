import React, { useState } from "react";
import "./Style.css";
import Axios, { url } from "../../../../extra/axios";
import { useAppDispatch } from "../../../../store/hooks";
import { addUser } from "../../../../store/features/user/userSlice";
export interface editShow {
  editShow: string | undefined;
  title: string;
  text: string;
  URL: string;
  oldValue: string;
  func: () => void;
}
const ChangeName = ({
  editShow,
  func,
  title,
  text,
  URL,
  oldValue,
}: editShow) => {
  const [textString, setTextString] = useState({ text: oldValue });
  const dispatch = useAppDispatch();

  let axios = Axios();
  const onSubmitHandle = () => {
    axios
      .post(url + URL, textString)
      .then((res) => {
        axios.get(url + "/api/user/user/current").then((res) => {
          dispatch(addUser(res.data));
          setTextString({ text: "" });
          func();
        });
      })
      .catch((err) => console.log(err));
  };
  return (
    <div
      className="name-change-box"
      id={editShow && editShow.length > 0 ? "edit-name-show" : ""}
    >
      <div className="change-name-text">{title}</div>
      <div className="change-name-input-box">
        <span>{text}</span>
        <input
          value={textString.text}
          onChange={(event) => {
            setTextString({ text: event.target.value });
            oldValue = "";
          }}
        />
      </div>
      <div className="change-name-button-box ">
        <button className="save" onClick={onSubmitHandle}>
          Save
        </button>
        <button className="cancle" onClick={() => func()}>
          Cancle
        </button>
      </div>
    </div>
  );
};

export default ChangeName;
