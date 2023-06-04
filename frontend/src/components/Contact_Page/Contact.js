import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="container-fluid contact-us">
      <div className="contact-container">
        <div className="inner-cont">
          <div className="contact_firsthalf">
            <h1>Admin Department</h1>
            <p>Name : XYZ</p>
            <p>Contact No : 123456789</p>
            <p>Email : example@gmail.com</p>
          </div>
          
          {/* <hr /> */}
          <div className="contact_secondhalf">
            <h1>Bus Service Provider</h1>
            <p>Name : XYZ</p>
            <p>Contact No : 123456789</p>
            <p>Email : serviceprovider@gmail.com</p>
          </div>
        </div>

        <div className="driver-cont">
          <h1 className="driverhead">Driver Details</h1>
          <div className="container-fluid diversDetails">
            <div className="driver">
              <h3>Admin Department</h3>
              <p>Name : XYZ</p>
              <p>Contact No : 123456789</p>
              <p>Email : example@gmail.com</p>
            </div>
            <hr />
            <div className="driver">
              <h3>Admin Department</h3>
              <p>Name : XYZ</p>
              <p>Contact No : 123456789</p>
              <p>Email : example@gmail.com</p>
            </div>
            <hr />
            <div className="driver">
              <h3>Admin Department</h3>
              <p>Name : XYZ</p>
              <p>Contact No : 123456789</p>
              <p>Email : example@gmail.com</p>
            </div>
            <hr />
            <div className="driver">
              <h3>Admin Department</h3>
              <p>Name : XYZ</p>
              <p>Contact No : 123456789</p>
              <p>Email : example@gmail.com</p>
            </div>
            <hr />
            <div className="driver">
              <h3>Admin Department</h3>
              <p>Name : XYZ</p>
              <p>Contact No : 123456789</p>
              <p>Email : example@gmail.com</p>
            </div>
            <hr />
            <div className="driver">
              <h3>Admin Department</h3>
              <p>Name : XYZ</p>
              <p>Contact No : 123456789</p>
              <p>Email : example@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
