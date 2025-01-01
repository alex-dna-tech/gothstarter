-- products
-- name: GetProductByID :one
SELECT * FROM products
WHERE id = $1 LIMIT 1;

-- name: GetProductByTitle :many
SELECT * FROM products
WHERE title  LIKE $1;

-- name: ListProducts :many
SELECT * FROM products
ORDER BY title;

-- name: CreateProduct :one
INSERT INTO products (
  title, description, amount
) VALUES (
  $1, $2, $3
)
RETURNING *;

-- name: UpdateProduct :exec
UPDATE products
SET 
title = $1,
description = $2,
amount = $3
WHERE id = $4;

-- name: DeleteProduct :exec
DELETE FROM products
WHERE id = $1;

