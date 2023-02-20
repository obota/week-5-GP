var http = require("http");
const express = require("express");
const mongoose = require("mongoose");
const app = express();

//CONNECT TO MONGO DB
mongoose.connect(
  "mongodb+srv://obota:BNXxQWmLkxu4RLh4@moringacluster.bulbv0v.mongodb.net/test",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Successfuly connected to MongoDB");
    }
  }
);

//CONNECT TO NODE JS
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write(req.url);
    res.end(
      "Your node server is running on port 7,000. We are cruising nicely"
    );
  })
  .listen(7000);
//display connection on terminal
console.log("Server running on port 7,000");
