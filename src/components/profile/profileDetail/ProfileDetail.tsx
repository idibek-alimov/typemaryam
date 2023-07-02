import React, { useState, useEffect } from "react";
import "./ProfileDetail.css";
import { useAppSelector } from "../../../store/hooks";
import { MdEdit, MdOutlineRadioButtonUnchecked } from "react-icons/md";
import ChangeName from "./editData/ChangeName";
import ChangeEmail from "./editData/ChangeEmail";
import ChangePhone from "./editData/ChangePhone";
import DeleteAccaunt from "./editData/DeleteAccaunt";

interface PersonalInfoInterface {
  name: string;
  email: string;
  phone_number: string;
  gender: string;
}

export interface TitleTextProp {
  title: string;
  text: string;
  URL: string;
  oldValue: string;
}

const ProfileDetail = () => {
  const [personalInfo, setPersonalInfor] = useState<PersonalInfoInterface>({
    name: "",
    email: "",
    phone_number: "",
    gender: "",
  });
  const [editShow, setEditShow] = useState("");
  const [titleText, setTitleText] = useState<TitleTextProp>({
    title: "",
    text: "",
    URL: "",
    oldValue: "",
  });
  const credentials = useAppSelector((state) => state.user);
  console.log(credentials);
  const EmptyEditShow = () => {
    setEditShow("");
  };

  useEffect(() => {
    if (editShow === "edit-email") {
      setTitleText({
        title: "Email",
        text: "email",
        URL: "/api/user/user/email/change",
        oldValue: credentials.email,
      });
    } else if (editShow === "edit-name") {
      setTitleText({
        title: "Name",
        text: "name",
        URL: "/api/user/user/name/change",
        oldValue: credentials.name ? credentials.name : "",
      });
    } else if (editShow === "edit-phone") {
      setTitleText({
        title: "Phone",
        text: "phone",
        URL: "/api/user/user/phone/change",
        oldValue: credentials.phoneNumber,
      });
    } else if (editShow === "edit-address") {
      setTitleText({
        title: "Address",
        text: "address",
        URL: "/api/user/user/address/change",
        oldValue: credentials.address,
      });
    }

    // switch (editShow) {
    //   case "edit-email":
    //     setTitleText({ title: "Email", text: "email", url: "email" });
    //   case "edit-name":
    //       setTitleText({ title: "Name", text: "name", url: "name" });
    //   case "edit-phone":
    //       setTitleText({ title: "Phone", text: "phone", url: "phone" });
    // }
  }, [editShow]);

  const onGenderChooseHandle = (event: React.ChangeEvent<HTMLInputElement>) => {
    let data: PersonalInfoInterface = personalInfo;
    alert(personalInfo.gender);
    if (event.currentTarget.name === "male") {
      //        let data:PersonalInfoInterface = personalInfo;
      personalInfo.gender = "male";
      setPersonalInfor(personalInfo);
    } else if (event.currentTarget.name === "female") {
      personalInfo.gender = "female";
      setPersonalInfor(personalInfo);
    }
    alert(personalInfo.gender);
  };

  return (
    <div className="profile-detail-div">
      <div className="profile-detail-box">
        <div className="personal-info">
          <div className="info-top">
            <img
              src={"../profile.jpg"}
              alt="tshirt5.jpg"
              className="profile-pic"
            />
            <span className="info-username">
              {credentials
                ? credentials.username?.toUpperCase()
                : "Username not provided"}
            </span>
            <div
              className="name-edit-icon"
              onClick={() => setEditShow("edit-name")}
            >
              <MdEdit />
            </div>
          </div>
          <div className="info-bottom">
            <div className="bottom-item">
              <span>Email</span>
              <div>
                {credentials.email && credentials.email.length > 0
                  ? credentials.email
                  : "Not Provided"}
                <div
                  className="name-edit-icon"
                  onClick={() => setEditShow("edit-email")}
                >
                  <MdEdit />
                </div>
              </div>
            </div>
            <div className="bottom-item">
              <span>Phone</span>
              <div>
                {credentials.phoneNumber && credentials.phoneNumber.length > 0
                  ? credentials.phoneNumber
                  : "Not Provided"}
                <div
                  className="name-edit-icon"
                  onClick={() => setEditShow("edit-phone")}
                >
                  <MdEdit />
                </div>
              </div>
            </div>
            <div className="bottom-item">
              <span>Address</span>
              <div>
                {credentials.address && credentials.address.length > 0
                  ? credentials.address
                  : "Not Provided"}
                <div
                  className="name-edit-icon"
                  onClick={() => setEditShow("edit-address")}
                >
                  <MdEdit />
                </div>
              </div>
            </div>
            <div className="bottom-item">
              <span>Gender</span>

              <div className="gender-box">
                <div className="gender-item">
                  <input
                    className="gender-choose"
                    type="radio"
                    name="gender"
                    id="male"
                    onChange={() => {
                      let data: PersonalInfoInterface = personalInfo;
                      data.gender = "male";
                      setPersonalInfor(data);
                      console.log(personalInfo);
                    }}
                  />
                  <span>Male</span>
                </div>
                <div className="gender-item">
                  <input
                    className="gender-choose"
                    type="radio"
                    name="gender"
                    id="female"
                    onChange={() => {
                      let data: PersonalInfoInterface = personalInfo;
                      data.gender = "female";
                      setPersonalInfor(data);
                      console.log(personalInfo);
                    }}
                  />
                  <span>Female</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="the-line"></div>
        <div className="delete-accaunt">
          <div className="info-top">
            <span>Delete Accaunt</span>
          </div>
          <div className="info-bottom">
            <span>
              With deleting accaunt the rest of the information will be deleted
            </span>
            <div onClick={() => setEditShow("delete-accaunt")}>
              Delete accaunt
            </div>
          </div>
        </div>
      </div>
      <div
        className="back-grey"
        id={editShow ? "show" : ""}
        onClick={() => setEditShow("")}
      ></div>
      <ChangeName
        editShow={editShow}
        func={EmptyEditShow}
        title={titleText.title}
        text={titleText.text}
        URL={titleText.URL}
        oldValue={titleText.oldValue}
      />
      {/* <ChangeEmail editShow={editShow} func={EmptyEditShow} />
      <ChangePhone editShow={editShow} func={EmptyEditShow} />
      <DeleteAccaunt editShow={editShow} func={EmptyEditShow} /> */}
    </div>
  );
};

export default ProfileDetail;
