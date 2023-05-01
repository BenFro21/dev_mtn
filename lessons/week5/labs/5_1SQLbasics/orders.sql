-- Create a table called orders that records: order_id, person_id, product_name, product_price, quantity.
CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    person_id INTEGER,
    product_name VARCHAR(50),
    product_price FLOAT,
    quantity INTEGER
);
-- Add 5 orders to the orders table.
-- Make orders for at least two different people.
-- person_id should be different for different people.
INSERT INTO orders(person_id, product_name, product_price, quantity)
VALUES(21, 'Ben Shoes', 10.50, 5),
(21, 'Ben Pants', 14.50, 6),
(22, 'Dog Toy', 8.50, 8),
(22, 'Dog Leash', 10.0, 6),
(23, 'Food', 18.50, 3);

-- Select all the records from the orders table.
SELECT * FROM orders;
-- Calculate the total number of products ordered.
SELECT COUNT(order_id) FROM orders;

-- Calculate the total order price.
SELECT SUM(product_price * quantity) FROM orders;

-- Calculate the total order price by a single person_id.
SELECT SUM(product_price * quantity) FROM orders WHERE person_id = 21;
