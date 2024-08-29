-- products
-- name: GetProduct :one
SELECT * FROM products
WHERE id = ? LIMIT 1;

-- name: ListProducts :many
SELECT * FROM products
ORDER BY productame;

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

