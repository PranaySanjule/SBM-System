import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import BusRoutes from "./Pages/BusRoutes";
import Contact from "./Pages/Contact";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import { ToastContainer } from "react-toastify";
import Userlogin from "./Pages/Userlogin";
import Location from "./components/Dashboard/Pages/UserLocation";
import PrivateRoute from "./PrivateRoutes/PrivateRoute";
import UserBusRoutes from "./components/Dashboard/Pages/UserBusRoutes";
import UserProfile from "./components/Dashboard/Pages/UserProfile";
import Location1 from "./components/Dashboard/Pages/LiveLocation";
import ProfileSetting from "./Pages/ProfileSetting"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route path="/routes" element={<BusRoutes />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/location" element={<Location />} /> */}
          {/* <Route path="/userlogin" element={<Userlogin />} /> */}

          <Route path="/userlogin" element={<PrivateRoute />}>
            <Route path="dashboard" element={<Userlogin />} />
          </Route>
          <Route path="/userlogin" element={<PrivateRoute />}>
            <Route path="location" element={<Location />} />
          </Route>
          {/* <Route path="/userlogin" element={<PrivateRoute />}>
            <Route path="routes" element={<BusRoutes />} />
          </Route> */}
          <Route path="/userlogin" element={<PrivateRoute />}>
            <Route path="userbusroute" element={<UserBusRoutes />} />
          </Route>
          <Route path="/userlogin" element={<PrivateRoute />}>
            <Route path="profile" element={<UserProfile />} />
          </Route>
          <Route path="/userlogin" element={<PrivateRoute />}>
            <Route path="live-location1" element={<Location1 />} />
          </Route>
          <Route path="/settting" element={<PrivateRoute />}>
            <Route path="profilesetting" element={<ProfileSetting />} />
          </Route>

          {/* <Route path="/location" component={Location}></Route> */}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;
