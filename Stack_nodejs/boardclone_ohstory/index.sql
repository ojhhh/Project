show databases;

use ohstoryBoard;

show tables;
select * from board;
desc board;
drop table board;

create table board (
  id INT AUTO_INCREMENT,
  user_id VARCHAR(20),
  title VARCHAR(30),
  content VARCHAR(200),
  category VARCHAR(20),
  date DATE DEFAULT(current_time),
  likes INT default 0,
  comment VARCHAR(100),
  src VARCHAR(200),
  PRIMARY KEY(id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

create table users (
  user_id VARCHAR(20),
  user_pw VARCHAR(200),
  refresh VARCHAR(200),
  PRIMARY KEY (user_id)
);
insert into users (user_id, user_pw) VALUES ('test',"test");
insert into users (user_id, user_pw) VALUES ('jsuser',"jsuser");
insert into users (user_id, user_pw) VALUES ('dba',"dba");

insert into board (user_id, title, content, category, comment, src) values ('test', '[Nodejs] project','Nodejs toy project','Nodejs', json_array('hello','world'), 'https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_1280.png'); 

update users SET refresh = "aa" where user_id = "aa";
use ohstoryBoard;
select * from board;
select * from users;