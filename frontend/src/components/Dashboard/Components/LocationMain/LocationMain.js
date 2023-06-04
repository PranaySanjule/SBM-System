import React from "react";
import "./LocationMain.css";
import { useSelector } from "react-redux";
import LocationHeader from "../../../Location_Page/LocationHeader";
const UserMain = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <main>
      <div className="main__container">
        <div className="loc_div">

        <LocationHeader />
        </div>
      </div>
    </main>
  );
};

export default UserMain;
