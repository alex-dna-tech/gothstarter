CREATE TABLE IF NOT EXISTS categories (      
    category_name VARCHAR(255) NOT NULL,
    description TEXT,
    category_id INTEGER PRIMARY KEY AUTOINCREMENT
);

INSERT INTO categories VALUES('Beverages','Soft drinks, coffees, teas, beers, and ales',1);
INSERT INTO categories VALUES('Condiments','Sweet and savory sauces, relishes, spreads, and seasonings',2);
INSERT INTO categories VALUES('Confections','Desserts, candies, and sweet breads',3);
INSERT INTO categories VALUES('Dairy Products','Cheeses',4);
INSERT INTO categories VALUES('Grains/Cereals','Breads, crackers, pasta, and cereal',5);
INSERT INTO categories VALUES('Meat/Poultry','Prepared meats',6);
INSERT INTO categories VALUES('Produce','Dried fruit and bean curd',7);
INSERT INTO categories VALUES('Seafood','Seaweed and fish',8);
