import { useState } from "react";
import "../style.css";
import Navbar from "../components/Dashboard/navbar/Navbar";
import Sidebar from "../components/Dashboard/sidebar/Sidebar";
import Main from "../components/Dashboard/main/Main";

const Userlogin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="container-fluid dashboard">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Main />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default Userlogin;
