import React from "react";
import LoginModal from "../components/Authentication/LoginModal";
import Navbar from "../components/MainComponents/Navbar";

const Login = () => {
  return (
    <>
      <div class="login-page">
        <Navbar />
        <LoginModal />
      </div>
    </>
  );
};

export default Login;
