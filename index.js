const express = require("express");
const app = express();
const port = 3040;
const router = require("./config/routes");

const setUpDB = require("./config/database");
const cors = require("cors");

//app.use(cors());

var corsOptions = {
  exposedHeaders: ["content-Type", "x-auth"]
};

app.use(cors(corsOptions));

// app.use("/uploads", express.static("uploads"));
app.use("/uploads", express.static("uploads"));
app.use(express.json());
app.use(express.static("public"));
app.use(express.static("files"));
app.use("/", router);
setUpDB();
app.listen(port, () => {
  console.log("listening to port", port);
});
