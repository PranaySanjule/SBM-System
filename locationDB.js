require("dotenv").config();
const connectDB = require("./backend/config/db");
const Location = require("./backend/models/locationModel");

const LocationJson = require("./backend/location.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Location.create(LocationJson);
    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

start();
