import React from "react";
import hello from "../../Assets/avtar.svg";

import "./ProfileMain.css";
import { useSelector } from "react-redux";
const UserMain = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <main>
      <div className="main__container">
        {/* <div className="profile-card"> */}
        <div className="profile-data">
        <img className="profile-logo" src={hello} alt="hello" />
          <p>
            <b>Name :</b> {userInfo.name}
          </p>
          <p>
            <b>Email :</b> {userInfo.email}
          </p>
          <p>
            <b>Route :</b> {userInfo.route}
          </p>
        </div>
      </div>
      {/* </div> */}
    </main>
  );
};

export default UserMain;
