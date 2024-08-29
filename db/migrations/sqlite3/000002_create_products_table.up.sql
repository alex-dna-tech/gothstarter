-- products
CREATE TABLE IF NOT EXISTS products (
  title         text    NOT NULL,
  description   text    NOT NULL,
  amount        text    NOT NULL,
  created_at    timestamp DEFAULT CURRENT_TIMESTAMP,
  updated_at    timestamp,
  id            integer PRIMARY KEY
);
