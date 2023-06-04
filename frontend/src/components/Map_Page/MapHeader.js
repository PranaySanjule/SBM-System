import React, { useEffect } from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import "./MapHeader.css";
import { useDispatch, useSelector } from "react-redux";
import { listCoordinates } from "../../actions/locationActions";
import { useNavigate } from "react-router-dom";
// import { all } from "axios";

function MapHeader() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const locations = useSelector((state) => state.locations);
  // const { loading, allLocations, error } = locations;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  // console.log(data.latitude);

  useEffect(() => {
    dispatch(listCoordinates());
    if (!userInfo) {
      navigate("/");
    }
  }, [dispatch, navigate, userInfo]);

  const containerStyle = {
    width: "145rem",
    height: "70rem",
  };

  const center = {
    lat: 21.004490494020047,
    lng: 79.04762590723657,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyC-dFHYjTqEVLndbN2gdvXsx09jfJHmNc8",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(
    function callback(map) {
      // This is just an example of getting and using the map instance!!! don't just blindly copy!
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);

      setMap(map);
    },
    [setMap]
  );

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="container-fluid map-cont">
      {/* {locations?.map((allLocations) => ( */}
      <GoogleMap
        className="map"
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}

        <Marker
          position={{ lat: 21.004490494020047, lng: 79.04762590723657 }}
          icon={require("../../images/marker.png")}
          className="marker"
        />
        <></>
      </GoogleMap>
      {/* ))} */}
    </div>
  ) : (
    <></>
  );
}

export default React.memo(MapHeader);
