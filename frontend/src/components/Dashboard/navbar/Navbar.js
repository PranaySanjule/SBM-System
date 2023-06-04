import "./Navbar.css";
import avatar from "../../../components/Dashboard/Assets/avtar.svg";
import Dropdown from "react-bootstrap/Dropdown";
import ProfileModal from "../Miscellaneous/ProfileModal";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// import { useHistory } from "react-router-dom";
// import { Menu, MenuButton } from "@chakra-ui/react";
// import { ChevronDownIcon } from "@chakra-ui/icons";
// import { Button } from "@chakra-ui/button";
// import { Avatar } from "@chakra-ui/avatar";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  // const { user } = ChatState();
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
    // history.push("/");
  };
  // const history = useHistory();

  return (
    <nav className="navbar-dashboard">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars"></i>
      </div>
      <div className="navbar__left">
        {/* <a href="#">Subscribers</a> */}
        {/* <a href="#">Video Management</a> */}
        <a href="/">Home</a>
        <a className="active_link" href="#">
          Admin
        </a>
      </div>
      <div className="navbar__right">
        <a href="#">
          <i className="fa fa-search"></i>
        </a>
        <a className="profile">
          <Dropdown>
            <Dropdown.Toggle
              className="profile"
              variant="light"
              id="dropdown-basic"
            >
              <img width="30px" src={avatar} alt="avatar" />
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark" className="dropdown" size="lg">
              <ProfileModal>
                <Dropdown.Item size="lg" href="action-1">
                  Profile
                </Dropdown.Item>
              </ProfileModal>
              <Dropdown.Divider />
              <Dropdown.Item size="lg" onClick={logoutHandler} active>
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
