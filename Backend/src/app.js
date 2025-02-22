const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

//routes
const aiRoute = require("./routes/ai-route");
const userRoute = require("./routes/user-routes");

//Database connection
mongoose
  .connect("mongodb://localhost:27017/ai-resume-builder", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error(err));

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.get("/", function (req, res) {
  return res.json({ message: "Hello sirr" });
});

app.use("/user", userRoute);
app.use("/ai", aiRoute);

module.exports = app;
