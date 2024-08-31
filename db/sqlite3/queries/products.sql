-- products
-- name: GetProductByID :one
SELECT * FROM products
WHERE id = ? LIMIT 1;

-- name: GetProductByTitle :many
SELECT * FROM products
WHERE title  LIKE ?;

-- name: ListProducts :many
SELECT * FROM products
ORDER BY title;

-- name: CreateProduct :one
INSERT INTO products (
  title, description, amount
) VALUES (
  ?, ?, ?
)
RETURNING *;

-- name: UpdateProduct :exec
UPDATE products
SET 
title = ?,
description = ?,
amount = ?
WHERE id = ?;

-- name: DeleteProduct :exec
DELETE FROM products
WHERE id = ?;

