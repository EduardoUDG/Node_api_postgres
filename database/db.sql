
CREATE DATABASE todo;

CREATE TABLE tasks(
    id SERIAL PRIMARY KEY,
    description VARCHAR(200),
    status BOOLEAN
);

INSERT INTO tasks (description, status) VALUES('Make to dinner', false);

INSERT INTO tasks (description, status) VALUES('Clean my room', false);