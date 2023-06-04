import { useState } from "react";
import "../../../style.css";
import Navbar from "../../../components/Dashboard/navbar/Navbar";
import Sidebar from "../../../components/Dashboard/sidebar/Sidebar";
import RouteMain from "../../../components/Dashboard/Components/RouteMain/RouteMain";

const UserBusRoutes = () => {
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
      <RouteMain />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default UserBusRoutes;
