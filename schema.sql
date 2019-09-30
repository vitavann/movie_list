DROP DATABASE IF EXISTS movie_list;
CREATE DATABASE movie_list;
USE movie_list;

CREATE TABLE movies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100)
);

INSERT INTO movies (title) values ('Mean Girls', 'Hackers', 'The Grey', 'Sunshine', 'Ex Machina' )