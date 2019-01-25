DROP DATABASE IF EXISTS burgers_db;

-- Create burgers database. 
CREATE DATABASE burgers_db;

USE burgers_db;

-- Table for holding burgers.
CREATE TABLE burgers (
    id INT(10) NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT false,
    PRIMARY KEY(id)
);