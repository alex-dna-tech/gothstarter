CREATE TABLE IF NOT EXISTS products (      
    product_name VARCHAR(255) NOT NULL,
    supplier_id INTEGER,
    category_id INTEGER,
    unit VARCHAR(255),
    price NUMERIC DEFAULT 0,
    product_id INTEGER PRIMARY KEY AUTOINCREMENT,
	FOREIGN KEY (category_id) REFERENCES categories (category_id),
	FOREIGN KEY (supplier_id) REFERENCES suppliers (supplier_id)
);

INSERT INTO products VALUES('Chais',1,1,'10 boxes x 20 bags',18.00,1);
INSERT INTO products VALUES('Chang',1,1,'24 - 12 oz bottles',19.00,2);
INSERT INTO products VALUES('Aniseed Syrup',1,2,'12 - 550 ml bottles',10.00,3);
INSERT INTO products VALUES('Chef Anton''s Cajun Seasoning',2,2,'48 - 6 oz jars',22.00,4);
INSERT INTO products VALUES('Chef Anton''s Gumbo Mix',2,2,'36 boxes',21.35,5);
INSERT INTO products VALUES('Grandma''s Boysenberry Spread',3,2,'12 - 8 oz jars',25.00,6);
INSERT INTO products VALUES('Uncle Bob''s Organic Dried Pears',3,7,'12 - 1 lb pkgs.',30.00,7);
INSERT INTO products VALUES('Northwoods Cranberry Sauce',3,2,'12 - 12 oz jars',40.00,8);
INSERT INTO products VALUES('Mishi Kobe Niku',4,6,'18 - 500 g pkgs.',97.00,9);
INSERT INTO products VALUES('Ikura',4,8,'12 - 200 ml jars',31.00,10);
INSERT INTO products VALUES('Queso Cabrales',5,4,'1 kg pkg.',21.00,11);
INSERT INTO products VALUES('Queso Manchego La Pastora',5,4,'10 - 500 g pkgs.',38.00,12);
INSERT INTO products VALUES('Konbu',6,8,'2 kg box',6.00,13);
INSERT INTO products VALUES('Tofu',6,7,'40 - 100 g pkgs.',23.25,14);
INSERT INTO products VALUES('Genen Shouyu',6,2,'24 - 250 ml bottles',15.50,15);
INSERT INTO products VALUES('Pavlova',7,3,'32 - 500 g boxes',17.45,16);
INSERT INTO products VALUES('Alice Mutton',7,6,'20 - 1 kg tins',39,17);
INSERT INTO products VALUES('Carnarvon Tigers',7,8,'16 kg pkg.',62.50,18);
INSERT INTO products VALUES('Teatime Chocolate Biscuits',8,3,'10 boxes x 12 pieces',9.20,19);
INSERT INTO products VALUES('Sir Rodney''s Marmalade',8,3,'30 gift boxes',81.00,20);
INSERT INTO products VALUES('Sir Rodney''s Scones',8,3,'24 pkgs. x 4 pieces',10.00,21);
INSERT INTO products VALUES('Gustaf''s Knäckebröd',9,5,'24 - 500 g pkgs.',21.00,22);
INSERT INTO products VALUES('Tunnbröd',9,5,'12 - 250 g pkgs.',9.00,23);
INSERT INTO products VALUES('Guaraná Fantástica',10,1,'12 - 355 ml cans',4.50,24);
INSERT INTO products VALUES('NuNuCa Nuß-Nougat-Creme',11,3,'20 - 450 g glasses',14.00,25);
INSERT INTO products VALUES('Gumbär Gummibärchen',11,3,'100 - 250 g bags',31.23,26);
INSERT INTO products VALUES('Schoggi Schokolade',11,3,'100 - 100 g pieces',43.90,27);
INSERT INTO products VALUES('Rössle Sauerkraut',12,7,'25 - 825 g cans',45.60,28);
INSERT INTO products VALUES('Thüringer Rostbratwurst',12,6,'50 bags x 30 sausgs.',123.79,29);
INSERT INTO products VALUES('Nord-Ost Matjeshering',13,8,'10 - 200 g glasses',25.89,30);
INSERT INTO products VALUES('Gorgonzola Telino',14,4,'12 - 100 g pkgs',12.50,31);
INSERT INTO products VALUES('Mascarpone Fabioli',14,4,'24 - 200 g pkgs.',32.00,32);
INSERT INTO products VALUES('Geitost',15,4,'500 g',2.50,33);
INSERT INTO products VALUES('Sasquatch Ale',16,1,'24 - 12 oz bottles',14.00,34);
INSERT INTO products VALUES('Steeleye Stout',16,1,'24 - 12 oz bottles',18.00,35);
INSERT INTO products VALUES('Inlagd Sill',17,8,'24 - 250 g jars',19.00,36);
INSERT INTO products VALUES('Gravad lax',17,8,'12 - 500 g pkgs.',26.00,37);
INSERT INTO products VALUES('Côte de Blaye',18,1,'12 - 75 cl bottles',263.50,38);
INSERT INTO products VALUES('Chartreuse verte',18,1,'750 cc per bottle',18.00,39);
INSERT INTO products VALUES('Boston Crab Meat',19,8,'24 - 4 oz tins',18.40,40);
INSERT INTO products VALUES('Jack''s New England Clam Chowder',19,8,'12 - 12 oz cans',9.65,41);
INSERT INTO products VALUES('Singaporean Hokkien Fried Mee',20,5,'32 - 1 kg pkgs.',14.00,42);
INSERT INTO products VALUES('Ipoh Coffee',20,1,'16 - 500 g tins',46.00,43);
INSERT INTO products VALUES('Gula Malacca',20,2,'20 - 2 kg bags',19.45,44);
INSERT INTO products VALUES('Røgede sild',21,8,'1k pkg.',9.50,45);
INSERT INTO products VALUES('Spegesild',21,8,'4 - 450 g glasses',12.00,46);
INSERT INTO products VALUES('Zaanse koeken',22,3,'10 - 4 oz boxes',9.50,47);
INSERT INTO products VALUES('Chocolade',22,3,'10 pkgs.',12.75,48);
INSERT INTO products VALUES('Maxilaku',23,3,'24 - 50 g pkgs.',20.00,49);
INSERT INTO products VALUES('Valkoinen suklaa',23,3,'12 - 100 g bars',16.25,50);
INSERT INTO products VALUES('Manjimup Dried Apples',24,7,'50 - 300 g pkgs.',53.00,51);
INSERT INTO products VALUES('Filo Mix',24,5,'16 - 2 kg boxes',7.00,52);
INSERT INTO products VALUES('Perth Pasties',24,6,'48 pieces',32.80,53);
INSERT INTO products VALUES('Tourtière',25,6,'16 pies',7.45,54);
INSERT INTO products VALUES('Pâté chinois',25,6,'24 boxes x 2 pies',24.00,55);
INSERT INTO products VALUES('Gnocchi di nonna Alice',26,5,'24 - 250 g pkgs.',38.00,56);
INSERT INTO products VALUES('Ravioli Angelo',26,5,'24 - 250 g pkgs.',19.50,57);
INSERT INTO products VALUES('Escargots de Bourgogne',27,8,'24 pieces',13.25,58);
INSERT INTO products VALUES('Raclette Courdavault',28,4,'5 kg pkg.',55.00,59);
INSERT INTO products VALUES('Camembert Pierrot',28,4,'15 - 300 g rounds',34.00,60);
INSERT INTO products VALUES('Sirop d''érable',29,2,'24 - 500 ml bottles',28.50,61);
INSERT INTO products VALUES('Tarte au sucre',29,3,'48 pies',49.30,62);
INSERT INTO products VALUES('Vegie-spread',7,2,'15 - 625 g jars',43.90,63);
INSERT INTO products VALUES('Wimmers gute Semmelknödel',12,5,'20 bags x 4 pieces',33.25,64);
INSERT INTO products VALUES('Louisiana Fiery Hot Pepper Sauce',2,2,'32 - 8 oz bottles',21.05,65);
INSERT INTO products VALUES('Louisiana Hot Spiced Okra',2,2,'24 - 8 oz jars',17.00,66);
INSERT INTO products VALUES('Laughing Lumberjack Lager',16,1,'24 - 12 oz bottles',14.00,67);
INSERT INTO products VALUES('Scottish Longbreads',8,3,'10 boxes x 8 pieces',12.50,68);
INSERT INTO products VALUES('Gudbrandsdalsost',15,4,'10 kg pkg.',36.00,69);
INSERT INTO products VALUES('Outback Lager',7,1,'24 - 355 ml bottles',15.00,70);
INSERT INTO products VALUES('Fløtemysost',15,4,'10 - 500 g pkgs.',21.50,71);
INSERT INTO products VALUES('Mozzarella di Giovanni',14,4,'24 - 200 g pkgs.',34.80,72);
INSERT INTO products VALUES('Röd Kaviar',17,8,'24 - 150 g jars',15.00,73);
INSERT INTO products VALUES('Longlife Tofu',4,7,'5 kg pkg.',10.00,74);
INSERT INTO products VALUES('Rhönbräu Klosterbier',12,1,'24 - 0.5 l bottles',7.75,75);
INSERT INTO products VALUES('Lakkalikööri',23,1,'500 ml',18.00,76);
INSERT INTO products VALUES('Original Frankfurter grüne Soße',12,2,'12 boxes',13.00,77);
