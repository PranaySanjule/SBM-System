import React from "react";
import image from "../../images/logo.jpg";
import guideImage from "../../images/vaibhav_deshpande_sir.jpg";
import memberimage from "../../images/user.png";
import { BsLinkedin, BsFacebook } from "react-icons/bs";
import "./aboutmain.css";
import Card from "react-bootstrap/Card";
import pranay from "../../images/Pranay_Sanjule.png";
import rutvik from "../../images/Rutvik_Raut.png";
import rishikesh from "../../images/Rishikesh_Nandankar2.jpg";
import priti from "../../images/Priti_Deo.jpg";

const AboutMain = () => {
  return (
    <div className="about-us">
      <div className="container-fluid about-container">
        <div className="row">
          <div className="flex">
            <h2>About Us</h2>
            <p>
              Smart Bus Management System (SBM) is an analysis-based React
              script project which aims to develop an application that helps in
              providing easy facilities to Students and Parents. This project is
              Dynamic in nature and updates the location of the bus after every
              thirty seconds. It is actually a React script that uses various
              React modules. This project is developed to help the Bus
              administration department of various schools and offices. This
              project has immense scope for development in the future.
            </p>
            <div className="social-links">
              <a href="">
                <BsFacebook className="links" />
              </a>
              <a href="">
                <BsLinkedin className="links" />
              </a>
            </div>
          </div>

          <div className="flex">
            <img width="500px" src={image} />
          </div>
        </div>
      </div>

      <div className="container-fuild guide-card">
        <div className="card-cont">
          <Card className="card1" style={{ width: "30rem" }}>
            <h3>Project Guide</h3>
            <Card.Img variant="top" src={guideImage} />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>
                <p>Prof. Vaibhav Deshpande</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="container-fluid team-cards">
        <div className="team-head">
          <h3>Team Members</h3>
        </div>
        <div className="main-cards">
          <Card className="card1" style={{ width: "30rem" }}>
            <Card.Img variant="top" src={priti} />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>
                <p>Miss. Priti Deo</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card1" style={{ width: "30rem" }}>
            <Card.Img variant="top" src={rishikesh} />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>
                <p>Mr. Rishikesh Nandankar</p>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="card1" style={{ width: "30rem" }}>
            <Card.Img variant="top" src={rutvik} />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>
                <p>Mr. Rutvik Raut</p>
              </Card.Text>
            </Card.Body>
          </Card>

          <Card className="card1" style={{ width: "30rem" }}>
            <Card.Img variant="top" src={pranay} />
            <Card.Body>
              {/* <Card.Title>Card Title</Card.Title> */}
              <Card.Text>
                <p>Mr. Pranay Sanjule</p>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutMain;
