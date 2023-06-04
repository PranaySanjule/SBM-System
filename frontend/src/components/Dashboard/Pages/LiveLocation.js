import { useState } from "react";
import "../../../style.css";
import Navbar from "../../../components/Dashboard/navbar/Navbar";
import Sidebar from "../../../components/Dashboard/sidebar/Sidebar";
import Map from "../../../components/Dashboard/Components/MapIntegration/Map";

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
      {/* <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} /> */}
      {/* <RouteMain /> */}
      <Map />
      {/* <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} /> */}
    </div>
  );
};

export default UserBusRoutes;
