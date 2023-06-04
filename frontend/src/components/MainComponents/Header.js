import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <section class="main-head">
        <div className="first-half">
          <div className="surface"></div>
          <div className="bus1">
            <img src={require("../../images/bus1.png")} />
          </div>
          <div className="bus2">
            <img src={require("../../images/bus.png")} />
          </div>
        </div>
        <div class="second-half">
          <h1>Smart Bus Management System</h1>
          <p class="main-data">
            Track Live Location | Get Routes | Get User Details
          </p>
          <NavLink to={"/login"}>
            <button class="explore">Explore &rarr;</button>
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default Header;
