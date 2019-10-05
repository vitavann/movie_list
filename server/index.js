const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const db = require("../database/index.js");
const dbMethods = require("../database/dbMethods.js");
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/movies", (req, res) => dbMethods.getAllMovies(req, res));

app.post("/movie", (req, res) => dbMethods.postToMovies(req, res));

app.listen(port, () => console.log(`App listening on ${port}`));
