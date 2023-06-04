const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  route: {
    type: String,
    default: true,
    // required: true,
  },
  latitude: {
    type: Number,
    // required: true,
    default: true,
  },
  longitude: {
    type: Number,
    // required: true,
    default: true,
  },
  // address: {
  //   type: String,
  //   // required: true,
  //   default: true,
  // },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    // required: true,
    ref: "User",
  },
  // createdAt: {
  //   type: Date,
  //   required: true,
  //   default: Date.now(),
  // },
});

module.exports = mongoose.model("Location", locationSchema);
