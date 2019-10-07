
DROP DATABASE IF EXISTS moviedatabase;
CREATE DATABASE moviedatabase;

USE moviedatabase;

DROP table movies;

CREATE TABLE movies (
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR
(100),
  releaseDate VARCHAR
(100),
  posterPath VARCHAR
(100),
  overview VARCHAR
(1000),
  watched BOOLEAN NOT NULL
);
