const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const locationRoutes = require("./routes/locationRoutes");
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorMiddleWare");

dotenv.config();

connectDB();
const app = express();

app.use(express.json()); //to accept json data

// app.get("/", (req, res) => {
//   res.send("API is Running Successfully");
// });

app.use("/api/location", locationRoutes);

app.use("/api/user", userRoutes);
app.use("/api/getallusers", userRoutes);

// app.get("api/getAllUser", async (req, res) => {
//     try {
//         const allUser = await User.find({});
//         res.send({ status: "ok", data: allUser });
//     } catch (error) {
//         console.log(error);
//     }
// })

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 7000;

app.listen(`${PORT}`, console.log(`server started on port ${PORT}`));
