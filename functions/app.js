require("dotenv").config();
const express = require("express");
const serverless = require("serverless-http");
const mongoose = require("mongoose");
const routes = require("../routes/allRoutes");
const app = express();
const path = require("path");
const ejs = require("ejs");

app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

const mongoString = process.env.DATABASE_URL;
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on("error", (error) => {
  console.log(error);
});

app.listen(process.env.PORT || 8000, () => {
  console.log("http://localhost:8000");
});

app.use(routes);
module.exports.handler = serverless(app);
