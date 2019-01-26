DROP DATABASE IF EXISTS burgers_db;

-- Create burgers database. 
CREATE DATABASE burgers_db;

USE burgers_db;

-- Table for holding burgers.
CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id)
);