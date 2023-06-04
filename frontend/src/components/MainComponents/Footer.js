import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer class="bg-dark tex-white pt-5 pb-4">
        <div class="container text-center text-md-left">
          <div class="row text-center text-md-left">
            <div class="col-md-6 col-lg-6 col-xl-3 mx-auto mt-3">
              <div class="section">
                <h1 class="text-uppercase mb-4 font-weight-bold text-warning">
                  ADDRESS
                </h1>
                <p>
                  <GoLocation /> St. Vincent Pallotti College of Engineering &
                  Technology, Gavsi Manapur, Wardha Road, Nagpur, Maharashtra
                  India, - Pin : 441108
                </p>
              </div>
            </div>
            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <div class="section">
                <h1 class="text-uppercase mb-4 font-weight-bold text-warning">
                  Useful Links
                </h1>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/userlogin/location">Location</NavLink>
                </li>
                <li>
                  <NavLink to="/userlogin/userbusroute">Routes</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </div>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
              <div class="section">
                <h1 class="text-uppercase mb-4 font-weight-bold text-warning">
                  Contact
                </h1>
                <p>
                  <AiFillHome /> Nagpur-441108, MH, India
                </p>
                <p>
                  <MdEmail /> info@stvincentngp.edu.in
                </p>
                <p>
                  <BsFillTelephoneFill /> tel: +91 9423683433
                </p>
              </div>
            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 g-map">
              <h1 class="text-uppercase mb-4 font-weight-bold text-warning">
                Map View
              </h1>
              <div class="row">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.699591752758!2d79.04554451472428!3d21.0046757939764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bdc6b03bfded%3A0x51964eb66fa3ec5e!2sSt.%20Vincent%20Pallotti%20College%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1679236316099!5m2!1sen!2sin"
                  width="400"
                  height="300"
                  style={{ border: "0" }}
                  allowfullscreen="true"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <hr className="divider mb-2" />

          <div class="row align-items-center">
            <div class="col-md-7 col-lg-8 copyright">
              <p>Copyright © 2023&nbsp; &nbsp; </p>
              <p class="sbm text-warning"> SBM</p>
            </div>

            <div class="col-md-5 col-lg-4">
              <div class="text-center text-md-right socials">
                <ul class="list-unstyled list-inline">
                  <li class="list-inline-item">
                    <a href="#" class="btn-floating btn-sm text-white social">
                      <FaFacebook />
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="btn-floating btn-sm text-white social">
                      <FaLinkedin />
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="btn-floating btn-sm text-white social">
                      <SiGmail />
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a href="#" class="btn-floating btn-sm text-white social">
                      <BsGithub />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
