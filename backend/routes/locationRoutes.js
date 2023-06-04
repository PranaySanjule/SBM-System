const express = require("express");
// const { route } = require("./userRoutes");
const router = express.Router();
const {
  getAllLocations,
  location1,
  addLocationsData,
} = require("../controllers/LocationsController/locationController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getAllLocations);
router.route("/addlocation").post(addLocationsData);
router.route("/:id").get().put().delete();
// router.route("/location1").get(location1);

module.exports = router;
