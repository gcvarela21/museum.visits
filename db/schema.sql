
CREATE DATABASE museum_visits_db;
USE museum_visits_db;

CREATE TABLE museums
(
	id int NOT NULL AUTO_INCREMENT,
	place varchar(255) NOT NULL,
	visited BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);