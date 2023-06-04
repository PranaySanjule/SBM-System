import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import navlogo from "../../images/nav-logo.png";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <section className="navbar-bg">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container">
            <NavLink to={"/"}>
              <a class="navbar-brand" href="#">
                <img className="main-logo" src={navlogo} alt="logo" />
              </a>
            </NavLink>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShow(!show)}
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class={`collapse navbar-collapse ${show ? "show" : ""}`}>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li>
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="nav-link"
                    to="/userlogin/location"
                  >
                    Location
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/userlogin/userbusroute"
                  >
                    Routes
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
              <form class="d-flex" role="search">
                <div className="signup-modal">
                  <NavLink to="/signup">
                    <button type="button" class="btn-style">
                      Sign Up
                    </button>
                  </NavLink>
                </div>
                <NavLink to="/login">
                  <button type="button" class="btn-style">
                    Log In
                  </button>
                </NavLink>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
