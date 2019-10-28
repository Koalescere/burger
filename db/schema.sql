-- Drops the burgers_db if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Creates the "burgers_db" database --
CREATE DATABASE burgers_db;

-- Makes it so all of the following code will affect burgers_db --
USE burgers_db;

-- Creates the table "burgers" within burgers_db --
CREATE TABLE burgers (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- Makes a varchar column called "burger_name" which cannot contain null --
  burger_name varchar(255) NOT NULL,
  -- Makes a boolean column called "has_pet" which cannot contain null --
  devoured BOOLEAN DEFAULT false,
  
  -- Sets id as this table's primary key which means all data contained within it will be unique --
  PRIMARY KEY (id)
);

-- Creates new rows containing data in all named columns --
INSERT INTO burger (name, has_pet, pet_name, pet_age)
VALUES ("Ahmed", true, "Rockington", 100);

INSERT INTO burgers (burger_named, devoured) VALUES ("backyarder", FALSE);
INSERT INTO burgers (burger_named, devoured) VALUES ("widowmaker", FALSE);
INSERT INTO burgers (burger_named, devoured) VALUES ("bo_burger", FALSE);
INSERT INTO burgers (burger_named, devoured) VALUES ("california_burger", FALSE);
INSERT INTO burgers (burger_named, devoured) VALUES ("dirty_hipster", FALSE);
INSERT INTO burgers (burger_named, devoured) VALUES ("nobodys_burger", FALSE);
INSERT INTO burgers (burger_named, devoured) VALUES ("koko_chicken_burger", FALSE);
INSERT INTO burgers (burger_named, devoured) VALUES ("royal_with_cheese", FALSE);


