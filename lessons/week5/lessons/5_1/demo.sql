
-- Create a table
CREATE TABLE melons (
  id SERIAL PRIMARY KEY,
  melon_type VARCHAR(30),
  name VARCHAR(30),
  price FLOAT,
  seedless BOOLEAN
  );

--   inserting into melons table 
INSERT INTO melons (melon_type, name, price, seedless)
VALUES ('Musk', 'Honeydew', 1, False)

-- select all the melons from the table
SELECT * FROM melons;

-- insert many melons 
INSERT INTO melons(melon_type, name, price, seedless)
VALUES('Musk', 'Casaba', 2.5, False),
        ('Musk', 'Cantaloupe', 0.99, False),
        ('Musk', 'Persian Melon', 3, False),
        ('Musk', 'Christmas Melon', 5.5, False),
        ('Musk', 'Armenian Cucumber', 4.5, False),
        ('Hybrid', 'Galia', 3.75, False),
        ('Winter', 'Winter Melon', 0.99, True),
        ('Musk', 'Canary', 1.5, False),
        ('Musk', 'Hami', 2.75, True),
        ('Watermelon', 'Densuke', 250, False),
        ('Watermelon', 'Ali Baba', 2.5, False),
        ('Watermelon', 'Ancient', 3, False),
        ('Watermelon', 'Arkansas Black', 4, False),
        ('Watermelon', 'Dixie Queen', 2, False),
        ('Watermelon', 'Blacktail Mountain', 2.75, True),
        ('Watermelon', 'Carolina Cross 180', 4.25, False),
        ('Watermelon', 'Charleston Gray', 2, False),
        ('Watermelon', 'Chris Cross', 2.5, False),
        ('Watermelon', 'Desert King', 2, False),
        ('Watermelon', 'Congo', 2, False),
        ('Watermelon', 'Crimson Sweet', 1.75, False);

-- Select only the price and name coloms
SELECT name, price FROM melons

-- Select the names from melons where the type is watermelon and seedless is true 
SELECT name FROM melons
WHERE melon_type = 'Watermelon'
AND seedless = True;

-- all of the melons whose price is more then $3
SELECT * FROM melons
WHERE price > 3;

-- get all the melons and group by melon type 
SELECT melon_type, COUNT(*) FROM melons
GROUP BY melon_type
ORDER BY count;

-- get seedless melons and their count with an avg price 
SELECT seedless, COUNT(seedless), AVG(price)
FROM melons
GROUP BY seedless;

-- select all the melons who name is not watermelon 
SELECT * FROM melons
WHERE melon_type != 'Watermelon'
ORDER BY name;

--get 5 of all the melons starting with the 5th result 
-- SELECT * FROM melons OFFSET 5 LIMIT 5;

-- update the melons seedless to true where the type is Musk 
UPDATE melons 
SET seedless = True
WHERE melon_type = 'Musk';
-- Delete melons who id is greater then 3 
DELETE FROM melons
WHERE id < 3;