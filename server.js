const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Welcome to My Web Engineering Project!");
});

app.get("/about", (req, res) => {
  res.send("This is the About page.");
});

app.get("/contact", (req, res) => {
  res.send("This is the Contact page.");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
