import React from "react";
import bus from "../../images/bus1.png";
// import "../style.css";
import "./RouteHeader.css";

const RouteHeader = () => {
  return (
    // <div1 className="route">
    <div className="container-fluid about-container">
      <h2>Bus Routes</h2>

      <div className="grid-container">
        <div className="grid-item routeItem">
          <a href={require("./ROUTE1.pdf")} target="blank">
            <button>
              <img src={bus} alt="" />
            </button>
            <h3>Route 1</h3>
          </a>
        </div>
        <div className="grid-item routeItem">
          <a href={require("./ROUTE1.pdf")} target="blank">
            <button>
              <img src={bus} alt="" />
            </button>
            <h3>Route 2</h3>
          </a>
        </div>
        <div className="grid-item routeItem">
          <a href={require("./ROUTE1.pdf")} target="blank">
            <button>
              <img src={bus} alt="" />
            </button>
            <h3>Route 3</h3>
          </a>
        </div>
        <div className="grid-item routeItem">
          <a href={require("./ROUTE1.pdf")} target="blank">
            <button>
              <img src={bus} alt="" />
            </button>
            <h3>Route 4</h3>
          </a>
        </div>
        <div className="grid-item routeItem">
          <a href={require("./ROUTE1.pdf")} target="blank">
            <button>
              <img src={bus} alt="" />
            </button>
            <h3>Route 5</h3>
          </a>
        </div>
        <div className="grid-item routeItem">
          <a href={require("./ROUTE1.pdf")} target="blank">
            <button>
              <img src={bus} alt="" />
            </button>
            <h3>Route 6</h3>
          </a>
        </div>
      </div>

      {/* 
        <div className="grid-container">
          <div className="grid-item routeItem">
            <a href={require("./ROUTE1.pdf")} target="blank">
              <button>
                <img src={bus} alt="" />
              </button>
            </a>
          </div>
          <div className="grid-item routeItem">
        <a href={require("./ROUTE2.pdf")} target="blank">
              <button>
                <img src={bus} alt="" />
              </button>
            </a>
          </div>
          <div className="grid-item routeItem">
            <a href={require("./ROUTE1.pdf")} target="blank">
              <button>
                <img src={bus} alt="" />
              </button>
            </a>
          </div>
          <div className="grid-item routeItem">

            <a href={require("./ROUTE2.pdf")} target="blank">
              <button>
                <img src={bus} alt="" />
              </button>
            </a>
          </div>
          <div className="grid-item routeItem">
            <a href={require("./ROUTE1.pdf")} target="blank">
              <button>
                <img width={"40rem"} src={bus} alt="" />
              </button>
            </a>
          </div>
          <div className="grid-item routeItem">
            <a href={require("./ROUTE2.pdf")} target="blank">
              <button>
                <img width={"40rem"} src={bus} alt="" />
              </button>
            </a>
          </div>
        </div> */}
    </div>
    // </div1
  );
};

export default RouteHeader;
