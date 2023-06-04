import React from "react";
import Footer from "../components/MainComponents/Footer";
import Navbar from "../components/MainComponents/Navbar";
import LocationHeader from "../components/Location_Page/LocationHeader";
// import Maplocation from "../components/Maplocation"

const Location = () => {
  return (
    <>
      <Navbar />
      {/* <Maplocation /> */}
      <LocationHeader />
      <Footer />
    </>
  );
};

export default Location;
