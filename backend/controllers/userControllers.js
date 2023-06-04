const asyncHandler = require("express-async-handler");
const generateToken = require("../config/generateToken");
const User = require("../models/userModel");


const allUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.send(users);
});

// <---------------------------- Register User Logic ---------------------------->
const registerUser = asyncHandler(async (req, res) => {
  const { name, route, email, password } = req.body;

  if (!name || !route || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all the Fields");
  }

  // Check User Already exits or not
  const userExits = await User.findOne({ email });

  if (userExits) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    route,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      route: user.route,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to Create the User");
  }
});

// <----------------------------#######################---------------------------->

// Authentication of User Logic
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      route: user.route,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Failed to Create the User");
  }
});

const getAllUser = asyncHandler(async (req, res) => {
  try {
    const allRegisterUser = await User.find();
    res.send({ status: "ok", data: allRegisterUser });
  } catch (error) {
    console.log(error);
  }
});

module.exports = { registerUser, authUser, getAllUser, allUsers };
