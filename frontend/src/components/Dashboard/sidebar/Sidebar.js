import React from "react";
import logo from "../../../images/logo.jpg";
// import cross from "../Assets/c ross.png";
import "./Sidebar.css";
// import { ImCross } from "react-icons/im";
import { NavLink, useNavigate } from "react-router-dom";
import { FaRoute } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { logout } from "../../../actions/userActions";

// import { FaUser } from "react-icons/fa";
// import UserBusRoutes from "../Pages/UserBusRoutes";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
    window.location.reload(false);
  };

  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>SBM</h1>
        </div>
        <i
          className="fa fa-times"
          // src={cross}
          id="sidebarIcon"
          onClick={() => closeSidebar()}
          alt="cross"
        ></i>
      </div>

      {/* <ImCross /> */}
      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <NavLink to={"/userlogin/dashboard"}>
            <a href="#">Dashboard</a>
          </NavLink>
        </div>
        <h2>Profile</h2>

        <div className="sidebar__link">
          <i className="fa fa-user-secret"></i>
          <NavLink className="navlink" to={"/userlogin/profile"}>
            <a href="#">User Profile</a>
          </NavLink>
        </div>
        {/* <div className="sidebar__link">
          <i className="fa fa-wrench"></i>
          <a href="#">Settings</a>
        </div> */}

        <h2>Bus Location</h2>
        <div className="sidebar__link">
          <IoLocationSharp className="react-icon" />
          <NavLink className="navlink" to={"/userlogin/location"}>
            <a href="#">Current Location</a>
          </NavLink>
        </div>
        <h2>Route Details</h2>
        {/* <div className="sidebar__link">
          <FaUser className="react-icon" /> 
          <a href="#">User Bus Route</a>
        </div> */}
        <div className="sidebar__link">
          <FaRoute className="react-icon" />
          <NavLink className="navlink" to={"/userlogin/userbusroute"}>
            <a href="#">All Routes</a>
          </NavLink>
        </div>
        {/* <div className="sidebar__logout">
        </div> */}
        <div className="sidebar__logout">
          <i className="fa fa-wrench"></i>
          {/* <NavLink to={"/profilesetting"}> */}
            <a href="#">Settings</a>
          {/* </NavLink> */}
          <i className="red-icon fa fa-power-off"></i>
          <a href="#" onClick={logoutHandler}>
            Log Out
          </a>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
