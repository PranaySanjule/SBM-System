import React from "react";
import SignupModal from "../components/Authentication/SignupModal";
import Navbar from "../components/MainComponents/Navbar";
// import Removepage from "../components/Removepage";

const Signup = () => {
  return (
    <>
      {/* <Removepage /> */}
      <div class="signup-page">
        <Navbar />
        <SignupModal />
      </div>
    </>
  );
};

export default Signup;
