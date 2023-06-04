import React from "react";
// import hello from "../../Assets/avtar.svg";

import "./Setting.css";
import { useSelector } from "react-redux";
const Setting = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <main>
      <div className="main__container">
        
      </div>
    </main>
  );
};

export default Setting;
