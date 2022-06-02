const express = require("express");
const { rmSync } = require("fs");
const path = require("path");

const app = express();
const port = 8050;

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/files/index.html"));
});

app.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname, "/files/about.html"));
});

app.get("/contact", function (req, res) {
  res.sendFile(path.join(__dirname, "/files/contact-me.html"));
});

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/files/404.html"));
});

app.listen(port, () => {
  console.log("running app..");
});
