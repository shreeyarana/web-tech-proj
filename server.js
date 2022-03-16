require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const photosSwitch = require("./Switch/api/photos");
const authSwitch = require("./Switch/api/auth");
const userSwitch = require("./Switch/api/user");
const commentSwitch = require("./Switch/api/comments");

//use bodyparser
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb", extended: true }));

//use cors
app.use(cors());

//connect to MongoDB
mongoose
  .connect(process.env.mongoDBURLDEV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api/v1/auth", authSwitch);
app.use("/api/v1/user", userSwitch);
app.use("/api/v1/photos", photosSwitch);
app.use("/api/v1/photos/:id/comments", commentSwitch);

//serve static assets if we are in production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is starting at PORT ${PORT}`);
});
