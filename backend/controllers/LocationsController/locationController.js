const asyncHandler = require("express-async-handler");
const Location = require("../../models/locationModel");

const getAllLocations = asyncHandler(async (req, res) => {
  const allLocations = await Location.find({});
  res.status(200).json({ allLocations });
});

const addLocationsData = asyncHandler(async (req, res) => {
  const { route, latitude, longitude, address } = req.body;

  // const allLocations = await Location.create({
  //   route,
  //   latitude,
  //   longitude,
  //   address,
  // });

  // if (Location) {
  //   res.status(201).json({
  //     _id: Location._id,
  //     route: Location.route,
  //     latitude: Location.latitude,
  //     longitude: Location.longitude,
  //     address: Location.address,
  //   });
  // } else {
  //   res.status(400);
  //   throw new Error("Failed to post location");
  // }

  if (!route || !latitude || !longitude) {
    res.status(400);
    throw new Error("Location not tracking");
  } else {
    const location = new Location({
      route,
      latitude,
      longitude,
      // address,
    });

    const addLocation = await location.save();
    res.status(201).json(addLocation);
  }
});

const location1 = asyncHandler(async (req, res) => {
  const allLocations = await Location.find({ route: "route_4" });
  res.status(200).json({ allLocations });
});

module.exports = {
  getAllLocations,
  location1,
  addLocationsData,
};
