const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
  getRegisterUser,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// router.route("/").get(protect, allUsers);
router.route("/").post(registerUser); 
router.route("/getAllUser").post(registerUser).get(protect, allUsers);
router.post("/login", authUser);
// router.route("/").get(getRegisterUser).get(protect, allUsers);
// router.get("/getAllUser", getRegisterUser);

module.exports = router;
