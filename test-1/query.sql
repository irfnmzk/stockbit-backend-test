------ CREATE USER TABLE ------
CREATE TABLE tb_user(
  id INTEGER not null,
  username varchar(30) not null,
  parent_id integer not null,
  CONSTRAINT user_primary PRIMARY KEY (id)
);

----- INSERT VALUE TO USER TABLE -----
INSERT INTO user (id,username ,parent_id) VALUES
  (1, 'Ali',2),
  (2, 'Budi',0),
  (3, 'Cecep',1);

----- Query to find parent name -----
