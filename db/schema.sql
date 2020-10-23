DROP DATABASE IF EXISTS spotify_tops;

CREATE DATABASE spotify_tops;

USE spotify_tops;

CREATE TABLE tops (
  user_id INT AUTO_INCREMENT,
  artists_all JSON,
  artists_month JSON,
  songs_all JSON,
  songs_month JSON,
  PRIMARY KEY (user_id)
)
