------ CREATE USER TABLE ------
CREATE TABLE user_tbl(
  id INTEGER not null,
  username varchar(30) not null,
  parent_id integer not null,
  CONSTRAINT user_primary PRIMARY KEY (id)
);

----- INSERT VALUE TO USER TABLE -----
INSERT INTO user_tbl (id,username ,parent_id) VALUES
  (1, 'Ali',2),
  (2, 'Budi',0),
  (3, 'Cecep',1);

----- Query to find parent name -----
SELECT
    user.id,
    user.username,
    parent.username as parent
from
    user_tbl as user
left join
    user_tbl as parent
on
    user.parent_id = parent.id
order by
    user.id asc
