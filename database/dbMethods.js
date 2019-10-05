const db = require("./index.js");

// get/fetch method
const getAllMovies = (req, res) => {
  const queryString = `SELECT * FROM movies;`;
  db.query(queryString, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results);
    }
  });
};

// post method
const postToMovies = (req, res) => {
  console.log("request body:", req);
  const queryString = `INSERT INTO movies (title) VALUES (${req.body.title});`;
  db.query(queryString, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results);
    }
  });
};

module.exports = {
  getAllMovies: getAllMovies,
  postToMovies: postToMovies
};
