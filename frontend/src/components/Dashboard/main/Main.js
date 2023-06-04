import React from "react";
import hello from "../Assets/avtar.svg";
import "./Main.css";
import Chart from "../charts/Chart";
import { useSelector } from "react-redux";
import dashboardImg from "../../../images/surface.jpg";

const Main = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    <main>
      <div className="main__container">
        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <u>
              <h1>Welcome, {userInfo.name}</h1>
            </u>
          </div>
        </div>
        <div className="container-fluid dashboard-banner">
          <img src={dashboardImg} alt="" />
        </div>
        <br />

        
      </div>
    </main>
  );
};

export default Main;
