const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;