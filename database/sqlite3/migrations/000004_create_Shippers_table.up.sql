CREATE TABLE IF NOT EXISTS shippers (
    shipper_name VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    shipper_id INTEGER PRIMARY KEY AUTOINCREMENT
);

INSERT INTO shippers VALUES('Speedy Express', '(503) 555-9831',1);
INSERT INTO shippers VALUES('United Package', '(503) 555-3199',2);
INSERT INTO shippers VALUES('Federal Shipping', '(503) 555-9931',3);
