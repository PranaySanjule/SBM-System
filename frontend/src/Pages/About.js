import React from "react";
import Navbar from "../components/MainComponents/Navbar";
import Footer from "../components/MainComponents/Footer";
import AboutMain from "../components/About_Page/AboutMain";
// import Header from '../components/Header';

const About = () => {
  return (
    <>
      <Navbar />
      <AboutMain />
      {/* <Header /> */}
      <Footer />
    </>
  );
};

export default About;
