import { useState } from "react";
import "../../../style.css";
import Navbar from "../../../components/Dashboard/navbar/Navbar";
import Sidebar from "../../../components/Dashboard/sidebar/Sidebar";
import LocationMain from "../../../components/Dashboard/Components/LocationMain/LocationMain";

const UserLocation = () => {
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
      <LocationMain />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
  );
};

export default UserLocation;
