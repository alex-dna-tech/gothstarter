-- users
CREATE TABLE IF NOT EXISTS users (
  email      varchar(255)    NOT NULL UNIQUE,
  username   varchar(255)    NOT NULL,
  password   varchar(255)    NOT NULL,
  created_at timestamp DEFAULT NOW(),
  updated_at timestamp,
  id         BIGSERIAL PRIMARY KEY
);

