import React from "react";

const Routeanimation = () => {
  return (
    <>
      <div className="bus-animation">
        <video id="bg-video" autoPlay loop muted playsInline controls>
          <source src={require("../../videos/busroute.mp4")} type="video/mp4" />
        </video>
      </div>
    </>
  );
};

export default Routeanimation;
