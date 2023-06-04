import React from "react";
import { NavLink } from "react-router-dom";

const Removepage = () => {
  return (
    <>
      <div class="cross-icon">
        <NavLink to="/">
          <img src={require("../images/cross.png")} alt="logo" />
        </NavLink>
      </div>
    </>
  );
};

export default Removepage;
