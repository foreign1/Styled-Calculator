// Imports
const express = require("express");
const app = express();
const port = 5000;

// Static Files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));

// Set View's
app.set("views", "./views");
app.set("view engine", "ejs");

// Navigation
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/app", (req, res) => {
  res.sendFile(__dirname + "/public/css/app.css");
});

app.get("/about", (req, res) => {
  res.sendFile(
    __dirname + "/views/about.html",
    __dirname + "/public/css/styles.css",
    __dirname + "/public/js/main.js"
  );
});

app.listen(port, () => console.info(`App listening on port ${port}`));
