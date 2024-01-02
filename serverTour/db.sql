CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    status VARCHAR(255)
);

CREATE TABLE reviews (
    id SERIAL PRIMARY KEY,
    rate INT,
    name VARCHAR(255),
    text VARCHAR(1000),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);