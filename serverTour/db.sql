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


-- CREATE TABLE tours (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255) NOT NULL,
--     from_location VARCHAR(255) NOT NULL,
--     to_location VARCHAR(255) NOT NULL,
--     price Integer,
--     description VARCHAR(255),
--     company VARCHAR(255),
--     from_address VARCHAR(255),
--     from_date VARCHAR(255),
--     from_time VARCHAR(255),
--     to_date VARCHAR(255),
--     to_time VARCHAR(255),
-- 	transport VARCHAR(255)
-- );

-- CREATE TABLE booked_tours (
--     id SERIAL PRIMARY KEY,
--     user_id INTEGER REFERENCES users(id),
--     tour_id INTEGER REFERENCES tours(id)
   
-- );




-- CREATE TABLE transport (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255) NOT NULL,
--     description VARCHAR(255),
--     capacity INTEGER,
--     tour_id INTEGER REFERENCES tours(id)
-- );



-- CREATE TABLE cities (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255) NOT NULL,
-- 	cities_id INTEGER REFERENCES tours(id)
-- );







-- CREATE TABLE companies (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255) NOT NULL,
--     address VARCHAR(255),
--     phone_number VARCHAR(20),
--     email VARCHAR(255),
-- 	companies_id INTEGER REFERENCES tours(id)
-- );




-- CREATE TABLE ratings (
--     id SERIAL PRIMARY KEY,
--     tour_id INTEGER REFERENCES tours(id),
--     rating INTEGER,
--     comment VARCHAR(255)
-- );