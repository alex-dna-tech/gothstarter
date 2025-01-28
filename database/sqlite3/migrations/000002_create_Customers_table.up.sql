CREATE TABLE IF NOT EXISTS customers (      
    customer_name VARCHAR(255) NOT NULL,
    contact_name VARCHAR(255),
    address VARCHAR(255),
    city VARCHAR(255) NOT NULL,
    postalCode VARCHAR(15),
    country VARCHAR(255) NOT NULL,
    customer_id INTEGER PRIMARY KEY AUTOINCREMENT
);

INSERT INTO customers VALUES('Alfreds Futterkiste','Maria Anders','Obere Str. 57','Berlin','12209','Germany',1);
INSERT INTO customers VALUES('Ana Trujillo Emparedados y helados','Ana Trujillo','Avda. de la Constitución 2222','México D.F.','5021','Mexico',2);
INSERT INTO customers VALUES('Antonio Moreno Taquería','Antonio Moreno','Mataderos 2312','México D.F.','5023','Mexico',3);
INSERT INTO customers VALUES('Around the Horn','Thomas Hardy','120 Hanover Sq.','London','WA1 1DP','UK',4);
INSERT INTO customers VALUES('Berglunds snabbköp','Christina Berglund','Berguvsvägen 8','Luleå','S-958 22','Sweden',5);
INSERT INTO customers VALUES('Blauer See Delikatessen','Hanna Moos','Forsterstr. 57','Mannheim','68306','Germany',6);
INSERT INTO customers VALUES('Blondel père et fils','Frédérique Citeaux','24, place Kléber','Strasbourg','67000','France',7);
INSERT INTO customers VALUES('Bólido Comidas preparadas','Martín Sommer','C/ Araquil, 67','Madrid','28023','Spain',8);
INSERT INTO customers VALUES('Bon app''''','Laurence Lebihans','12, rue des Bouchers','Marseille','13008','France',9);
INSERT INTO customers VALUES('Bottom-Dollar Marketse','Elizabeth Lincoln','23 Tsawassen Blvd.','Tsawassen','T2F 8M4','Canada',10);
INSERT INTO customers VALUES('B''''s Beverages','Victoria Ashworth','Fauntleroy Circus','London','EC2 5NT','UK',11);
INSERT INTO customers VALUES('Cactus Comidas para llevar','Patricio Simpson','Cerrito 333','Buenos Aires','1010','Argentina',12);
INSERT INTO customers VALUES('Centro comercial Moctezuma','Francisco Chang','Sierras de Granada 9993','México D.F.','5022','Mexico',13);
INSERT INTO customers VALUES('Chop-suey Chinese','Yang Wang','Hauptstr. 29','Bern','3012','Switzerland',14);
INSERT INTO customers VALUES('Comércio Mineiro','Pedro Afonso','Av. dos Lusíadas, 23','São Paulo','05432-043','Brazil',15);
INSERT INTO customers VALUES('Consolidated Holdings','Elizabeth Brown','Berkeley Gardens 12 Brewery','London','WX1 6LT','UK',16);
INSERT INTO customers VALUES('Drachenblut Delikatessend','Sven Ottlieb','Walserweg 21','Aachen','52066','Germany',17);
INSERT INTO customers VALUES('Du monde entier','Janine Labrune','67, rue des Cinquante Otages','Nantes','44000','France',18);
INSERT INTO customers VALUES('Eastern Connection','Ann Devon','35 King George','London','WX3 6FW','UK',19);
INSERT INTO customers VALUES('Ernst Handel','Roland Mendel','Kirchgasse 6','Graz','8010','Austria',20);
INSERT INTO customers VALUES('Familia Arquibaldo','Aria Cruz','Rua Orós, 92','São Paulo','05442-030','Brazil',21);
INSERT INTO customers VALUES('FISSA Fabrica Inter. Salchichas S.A.','Diego Roel','C/ Moralzarzal, 86','Madrid','28034','Spain',22);
INSERT INTO customers VALUES('Folies gourmandes','Martine Rancé','184, chaussée de Tournai','Lille','59000','France',23);
INSERT INTO customers VALUES('Folk och fä HB','Maria Larsson','Åkergatan 24','Bräcke','S-844 67','Sweden',24);
INSERT INTO customers VALUES('Frankenversand','Peter Franken','Berliner Platz 43','München','80805','Germany',25);
INSERT INTO customers VALUES('France restauration','Carine Schmitt','54, rue Royale','Nantes','44000','France',26);
INSERT INTO customers VALUES('Franchi S.p.A.','Paolo Accorti','Via Monte Bianco 34','Torino','10100','Italy',27);
INSERT INTO customers VALUES('Furia Bacalhau e Frutos do Mar','Lino Rodriguez','Jardim das rosas n. 32','Lisboa','1675','Portugal',28);
INSERT INTO customers VALUES('Galería del gastrónomo','Eduardo Saavedra','Rambla de Cataluña, 23','Barcelona','8022','Spain',29);
INSERT INTO customers VALUES('Godos Cocina Típica','José Pedro Freyre','C/ Romero, 33','Sevilla','41101','Spain',30);
INSERT INTO customers VALUES('Gourmet Lanchonetes','André Fonseca','Av. Brasil, 442','Campinas','04876-786','Brazil',31);
INSERT INTO customers VALUES('Great Lakes Food Market','Howard Snyder','2732 Baker Blvd.','Eugene','97403','USA',32);
INSERT INTO customers VALUES('GROSELLA-Restaurante','Manuel Pereira','5ª Ave. Los Palos Grandes','Caracas','1081','Venezuela',33);
INSERT INTO customers VALUES('Hanari Carnes','Mario Pontes','Rua do Paço, 67','Rio de Janeiro','05454-876','Brazil',34);
INSERT INTO customers VALUES('HILARIÓN-Abastos','Carlos Hernández','Carrera 22 con Ave. Carlos Soublette #8-35','San Cristóbal','5022','Venezuela',35);
INSERT INTO customers VALUES('Hungry Coyote Import Store','Yoshi Latimer','City Center Plaza 516 Main St.','Elgin','97827','USA',36);
INSERT INTO customers VALUES('Hungry Owl All-Night Grocers','Patricia McKenna','8 Johnstown Road','Cork','','Ireland',37);
INSERT INTO customers VALUES('Island Trading','Helen Bennett','Garden House Crowther Way','Cowes','PO31 7PJ','UK',38);
INSERT INTO customers VALUES('Königlich Essen','Philip Cramer','Maubelstr. 90','Brandenburg','14776','Germany',39);
INSERT INTO customers VALUES('La corne d''''abondance','Daniel Tonini','67, avenue de l''''Europe','Versailles','78000','France',40);
INSERT INTO customers VALUES('La maison d''''Asie','Annette Roulet','1 rue Alsace-Lorraine','Toulouse','31000','France',41);
INSERT INTO customers VALUES('Laughing Bacchus Wine Cellars','Yoshi Tannamuri','1900 Oak St.','Vancouver','V3F 2K1','Canada',42);
INSERT INTO customers VALUES('Lazy K Kountry Store','John Steel','12 Orchestra Terrace','Walla Walla','99362','USA',43);
INSERT INTO customers VALUES('Lehmanns Marktstand','Renate Messner','Magazinweg 7','Frankfurt a.M.','60528','Germany',44);
INSERT INTO customers VALUES('Let''''s Stop N Shop','Jaime Yorres','87 Polk St. Suite 5','San Francisco','94117','USA',45);
INSERT INTO customers VALUES('LILA-Supermercado','Carlos González','Carrera 52 con Ave. Bolívar #65-98 Llano Largo','Barquisimeto','3508','Venezuela',46);
INSERT INTO customers VALUES('LINO-Delicateses','Felipe Izquierdo','Ave. 5 de Mayo Porlamar','I. de Margarita','4980','Venezuela',47);
INSERT INTO customers VALUES('Lonesome Pine Restaurant','Fran Wilson','89 Chiaroscuro Rd.','Portland','97219','USA',48);
INSERT INTO customers VALUES('Magazzini Alimentari Riuniti','Giovanni Rovelli','Via Ludovico il Moro 22','Bergamo','24100','Italy',49);
INSERT INTO customers VALUES('Maison Dewey','Catherine Dewey','Rue Joseph-Bens 532','Bruxelles','B-1180','Belgium',50);
INSERT INTO customers VALUES('Mère Paillarde','Jean Fresnière','43 rue St. Laurent','Montréal','H1J 1C3','Canada',51);
INSERT INTO customers VALUES('Morgenstern Gesundkost','Alexander Feuer','Heerstr. 22','Leipzig','4179','Germany',52);
INSERT INTO customers VALUES('North/South','Simon Crowther','South House 300 Queensbridge','London','SW7 1RZ','UK',53);
INSERT INTO customers VALUES('Océano Atlántico Ltda.','Yvonne Moncada','Ing. Gustavo Moncada 8585 Piso 20-A','Buenos Aires','1010','Argentina',54);
INSERT INTO customers VALUES('Old World Delicatessen','Rene Phillips','2743 Bering St.','Anchorage','99508','USA',55);
INSERT INTO customers VALUES('Ottilies Käseladen','Henriette Pfalzheim','Mehrheimerstr. 369','Köln','50739','Germany',56);
INSERT INTO customers VALUES('Paris spécialités','Marie Bertrand','265, boulevard Charonne','Paris','75012','France',57);
INSERT INTO customers VALUES('Pericles Comidas clásicas','Guillermo Fernández','Calle Dr. Jorge Cash 321','México D.F.','5033','Mexico',58);
INSERT INTO customers VALUES('Piccolo und mehr','Georg Pipps','Geislweg 14','Salzburg','5020','Austria',59);
INSERT INTO customers VALUES('Princesa Isabel Vinhoss','Isabel de Castro','Estrada da saúde n. 58','Lisboa','1756','Portugal',60);
INSERT INTO customers VALUES('Que Delícia','Bernardo Batista','Rua da Panificadora, 12','Rio de Janeiro','02389-673','Brazil',61);
INSERT INTO customers VALUES('Queen Cozinha','Lúcia Carvalho','Alameda dos Canàrios, 891','São Paulo','05487-020','Brazil',62);
INSERT INTO customers VALUES('QUICK-Stop','Horst Kloss','Taucherstraße 10','Cunewalde','1307','Germany',63);
INSERT INTO customers VALUES('Rancho grande','Sergio Gutiérrez','Av. del Libertador 900','Buenos Aires','1010','Argentina',64);
INSERT INTO customers VALUES('Rattlesnake Canyon Grocery','Paula Wilson','2817 Milton Dr.','Albuquerque','87110','USA',65);
INSERT INTO customers VALUES('Reggiani Caseifici','Maurizio Moroni','Strada Provinciale 124','Reggio Emilia','42100','Italy',66);
INSERT INTO customers VALUES('Ricardo Adocicados','Janete Limeira','Av. Copacabana, 267','Rio de Janeiro','02389-890','Brazil',67);
INSERT INTO customers VALUES('Richter Supermarkt','Michael Holz','Grenzacherweg 237','Genève','1203','Switzerland',68);
INSERT INTO customers VALUES('Romero y tomillo','Alejandra Camino','Gran Vía, 1','Madrid','28001','Spain',69);
INSERT INTO customers VALUES('Santé Gourmet','Jonas Bergulfsen','Erling Skakkes gate 78','Stavern','4110','Norway',70);
INSERT INTO customers VALUES('Save-a-lot Markets','Jose Pavarotti','187 Suffolk Ln.','Boise','83720','USA',71);
INSERT INTO customers VALUES('Seven Seas Imports','Hari Kumar','90 Wadhurst Rd.','London','OX15 4NB','UK',72);
INSERT INTO customers VALUES('Simons bistro','Jytte Petersen','Vinbæltet 34','København','1734','Denmark',73);
INSERT INTO customers VALUES('Spécialités du monde','Dominique Perrier','25, rue Lauriston','Paris','75016','France',74);
INSERT INTO customers VALUES('Split Rail Beer & Ale','Art Braunschweiger','P.O. Box 555','Lander','82520','USA',75);
INSERT INTO customers VALUES('Suprêmes délices','Pascale Cartrain','Boulevard Tirou, 255','Charleroi','B-6000','Belgium',76);
INSERT INTO customers VALUES('The Big Cheese','Liz Nixon','89 Jefferson Way Suite 2','Portland','97201','USA',77);
INSERT INTO customers VALUES('The Cracker Box','Liu Wong','55 Grizzly Peak Rd.','Butte','59801','USA',78);
INSERT INTO customers VALUES('Toms Spezialitäten','Karin Josephs','Luisenstr. 48','Münster','44087','Germany',79);
INSERT INTO customers VALUES('Tortuga Restaurante','Miguel Angel Paolino','Avda. Azteca 123','México D.F.','5033','Mexico',80);
INSERT INTO customers VALUES('Tradição Hipermercados','Anabela Domingues','Av. Inês de Castro, 414','São Paulo','05634-030','Brazil',81);
INSERT INTO customers VALUES('Trail''''s Head Gourmet Provisioners','Helvetius Nagy','722 DaVinci Blvd.','Kirkland','98034','USA',82);
INSERT INTO customers VALUES('Vaffeljernet','Palle Ibsen','Smagsløget 45','Århus','8200','Denmark',83);
INSERT INTO customers VALUES('Victuailles en stock','Mary Saveley','2, rue du Commerce','Lyon','69004','France',84);
INSERT INTO customers VALUES('Vins et alcools Chevalier','Paul Henriot','59 rue de l''''Abbaye','Reims','51100','France',85);
INSERT INTO customers VALUES('Die Wandernde Kuh','Rita Müller','Adenauerallee 900','Stuttgart','70563','Germany',86);
INSERT INTO customers VALUES('Wartian Herkku','Pirkko Koskitalo','Torikatu 38','Oulu','90110','Finland',87);
INSERT INTO customers VALUES('Wellington Importadora','Paula Parente','Rua do Mercado, 12','Resende','08737-363','Brazil',88);
INSERT INTO customers VALUES('White Clover Markets','Karl Jablonski','305 - 14th Ave. S. Suite 3B','Seattle','98128','USA',89);
INSERT INTO customers VALUES('Wilman Kala','Matti Karttunen','Keskuskatu 45','Helsinki','21240','Finland',90);
INSERT INTO customers VALUES('Wolski','Zbyszek','ul. Filtrowa 68','Walla','01-012','Poland',91);

