import React from "react";
import bus from "../../images/bus2.jpg";
// import "../style.css";
import "./LocationHeader.css";

const RouteHeader = () => {
  return (
    // <div className="route">
    <div className="container-fluid location-container">
      <h2>Bus Routes</h2>

      <div className="grid-container">
        <div className="grid-item locationItem">
          <a href="/userlogin/live-location1" target="blank">
            <button>
              <img src={bus} alt="" />
            </button>
            <h3>Track Bus No. 0706</h3>
          </a>
        </div>
        <div className="grid-item locationItem">
          <a href="" target="blank">
            <button>
              <img src={bus} alt="" />
            </button>
            <h3>Track Bus No. 0705</h3>
          </a>
        </div>
        <div className="grid-item locationItem">
          <a href="" target="blank">
            <button>
              <img src={bus} alt="" />
            </button>
            <h3>Track Bus No. 0683</h3>
          </a>
        </div>
        <div className="grid-item locationItem">
          <a href="" target="blank">
            <button>
              <img src={bus} alt="" />
            </button>
            <h3>Track Bus No. 0684</h3>
          </a>
        </div>
        <div className="grid-item locationItem">
          <a href="" target="blank">
            <button>
              <img src={bus} alt="" />
            </button>
            <h3>Track Bus No. 0802</h3>
          </a>
        </div>
        <div className="grid-item locationItem">
          <a href="" target="blank">
            <button>
              <img src={bus} alt="" />
            </button>
            <h3>Track Bus No. 0642</h3>
          </a>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default RouteHeader;
