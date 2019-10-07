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
  const queryString = `INSERT INTO movies (title, releaseDate, posterPath, overview, watched) VALUES (${db.escape(
    req.title
  )}, ${db.escape(req.releaseDate)}, ${db.escape(req.posterPath)}, ${db.escape(
    req.overview
  )}, ${db.escape(req.watched)});`;
  db.query(queryString, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      results;
    }
  });
};

module.exports = {
  getAllMovies: getAllMovies,
  postToMovies: postToMovies
};
