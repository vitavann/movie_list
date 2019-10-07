const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const db = require("../database/index.js");
const dbMethods = require("../database/dbMethods.js");
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "../client/dist")));
app.use(bodyParser.json());

app.get("/movies", (req, res) => dbMethods.getAllMovies(req, res));

app.post("/movie", (req, res) => {
  // console.log("req", req.body);
  // console.log("res", res.body);
  // console.log("res", res);
  req.body.forEach(movie => dbMethods.postToMovies(movie, res));
});

app.listen(port, () => console.log(`App listening on ${port}`));
//console log values her ....
// check if an array of objects come thorugh with the req.in the post. if so, then interate on it so it postToMovies req.body.forEach(movie => postToMovies(movie)) then look in dbMethods and console.log the post method.
