-- name: ListProducts :many
SELECT * FROM products
  ORDER BY product_name;

-- name: CreateProduct :one
INSERT INTO products (
  product_name, supplier_id, category_id, unit, price
  ) VALUES (
    ?, ?, ?, ?, ?
  )
  RETURNING *;

-- name: ReadProductByID :one
SELECT * FROM products
  WHERE product_id = ? LIMIT 1;

-- name: ReadProductByTitle :many
SELECT * FROM products
  WHERE product_name  LIKE ?;

-- name: UpdateProductByID :exec
UPDATE products 
  SET 
    product_name = ?, 
    supplier_id = ?, 
    category_id = ?, 
    unit = ?, 
    price = ? 
  WHERE product_id = ?;

-- name: DeleteProductByID :exec
DELETE FROM products
  WHERE product_id = ?;

-- name: ActiveSearchProduct :many
SELECT p.product_name, c.category_name, s.supplier_name, p.unit, p.price FROM products p
  JOIN categories c ON p.category_id = c.category_id
  JOIN suppliers s ON p.supplier_id = s.supplier_id 
  WHERE p.product_name LIKE '%?%'
    OR c.category_name LIKE '%?%'
    OR s.supplier_name LIKE '%?%'
  ORDER BY product_id;

