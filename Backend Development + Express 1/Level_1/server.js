//step1: create a folder
//step2: move into that folder
//step3: npm init -y
//step4: open folder using VSCode
//step5: npm i express
//step6: create server.js

//Server Instantiate
const express = require("express");
const app = express();

//used to parse req.body in express -> PUT or POST
const bodyParser = require("body-parser");

//specifically parse JSON data & add it to the request.Body object
app.use(bodyParser.json());

//activate the server on 3000 port
app.listen(8000, () => {
  console.log("Server Started at port no. 8000");
});

//Routes
app.get("/", (request, response) => {
  response.send("hello Jee , kaise ho saare");
});

app.post("/api/cars", (request, response) => {
  const { name, brand } = request.body;
  console.log(name);
  console.log(brand);
  response.send("Car Submitted Successfully.");
});

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/Cars", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((error) => {
    console.log("Recieved an error");
  });
