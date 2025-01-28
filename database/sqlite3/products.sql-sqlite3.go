//go:build sqlite || sqlite3 || (!postgresql && !postgres && !mysql && !mariadb)

// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.28.0
// source: products.sql

package store

import (
	"context"
	"database/sql"
)

const activeSearchProduct = `-- name: ActiveSearchProduct :many
SELECT p.product_name, c.category_name, s.supplier_name, p.unit, p.price FROM products p
  JOIN categories c ON p.category_id = c.category_id
  JOIN suppliers s ON p.supplier_id = s.supplier_id 
  WHERE p.product_name LIKE '%?%'
    OR c.category_name LIKE '%?%'
    OR s.supplier_name LIKE '%?%'
  ORDER BY product_id
`

type ActiveSearchProductRow struct {
	ProductName  string          `json:"product_name"`
	CategoryName string          `json:"category_name"`
	SupplierName string          `json:"supplier_name"`
	Unit         sql.NullString  `json:"unit"`
	Price        sql.NullFloat64 `json:"price"`
}

func (q *Queries) ActiveSearchProduct(ctx context.Context) ([]ActiveSearchProductRow, error) {
	rows, err := q.db.QueryContext(ctx, activeSearchProduct)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []ActiveSearchProductRow
	for rows.Next() {
		var i ActiveSearchProductRow
		if err := rows.Scan(
			&i.ProductName,
			&i.CategoryName,
			&i.SupplierName,
			&i.Unit,
			&i.Price,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const createProduct = `-- name: CreateProduct :one
INSERT INTO products (
  product_name, supplier_id, category_id, unit, price
  ) VALUES (
    ?, ?, ?, ?, ?
  )
  RETURNING product_name, supplier_id, category_id, unit, price, product_id
`

type CreateProductParams struct {
	ProductName string          `json:"product_name"`
	SupplierID  sql.NullInt64   `json:"supplier_id"`
	CategoryID  sql.NullInt64   `json:"category_id"`
	Unit        sql.NullString  `json:"unit"`
	Price       sql.NullFloat64 `json:"price"`
}

func (q *Queries) CreateProduct(ctx context.Context, arg CreateProductParams) (Product, error) {
	row := q.db.QueryRowContext(ctx, createProduct,
		arg.ProductName,
		arg.SupplierID,
		arg.CategoryID,
		arg.Unit,
		arg.Price,
	)
	var i Product
	err := row.Scan(
		&i.ProductName,
		&i.SupplierID,
		&i.CategoryID,
		&i.Unit,
		&i.Price,
		&i.ProductID,
	)
	return i, err
}

const deleteProductByID = `-- name: DeleteProductByID :exec
DELETE FROM products
  WHERE product_id = ?
`

func (q *Queries) DeleteProductByID(ctx context.Context, productID int64) error {
	_, err := q.db.ExecContext(ctx, deleteProductByID, productID)
	return err
}

const listProducts = `-- name: ListProducts :many
SELECT product_name, supplier_id, category_id, unit, price, product_id FROM products
  ORDER BY product_name
`

func (q *Queries) ListProducts(ctx context.Context) ([]Product, error) {
	rows, err := q.db.QueryContext(ctx, listProducts)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []Product
	for rows.Next() {
		var i Product
		if err := rows.Scan(
			&i.ProductName,
			&i.SupplierID,
			&i.CategoryID,
			&i.Unit,
			&i.Price,
			&i.ProductID,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const readProductByID = `-- name: ReadProductByID :one
SELECT product_name, supplier_id, category_id, unit, price, product_id FROM products
  WHERE product_id = ? LIMIT 1
`

func (q *Queries) ReadProductByID(ctx context.Context, productID int64) (Product, error) {
	row := q.db.QueryRowContext(ctx, readProductByID, productID)
	var i Product
	err := row.Scan(
		&i.ProductName,
		&i.SupplierID,
		&i.CategoryID,
		&i.Unit,
		&i.Price,
		&i.ProductID,
	)
	return i, err
}

const readProductByTitle = `-- name: ReadProductByTitle :many
SELECT product_name, supplier_id, category_id, unit, price, product_id FROM products
  WHERE product_name  LIKE ?
`

func (q *Queries) ReadProductByTitle(ctx context.Context, productName string) ([]Product, error) {
	rows, err := q.db.QueryContext(ctx, readProductByTitle, productName)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []Product
	for rows.Next() {
		var i Product
		if err := rows.Scan(
			&i.ProductName,
			&i.SupplierID,
			&i.CategoryID,
			&i.Unit,
			&i.Price,
			&i.ProductID,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Close(); err != nil {
		return nil, err
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const updateProductByID = `-- name: UpdateProductByID :exec
UPDATE products 
  SET 
    product_name = ?, 
    supplier_id = ?, 
    category_id = ?, 
    unit = ?, 
    price = ? 
  WHERE product_id = ?
`

type UpdateProductByIDParams struct {
	ProductName string          `json:"product_name"`
	SupplierID  sql.NullInt64   `json:"supplier_id"`
	CategoryID  sql.NullInt64   `json:"category_id"`
	Unit        sql.NullString  `json:"unit"`
	Price       sql.NullFloat64 `json:"price"`
	ProductID   int64           `json:"product_id"`
}

func (q *Queries) UpdateProductByID(ctx context.Context, arg UpdateProductByIDParams) error {
	_, err := q.db.ExecContext(ctx, updateProductByID,
		arg.ProductName,
		arg.SupplierID,
		arg.CategoryID,
		arg.Unit,
		arg.Price,
		arg.ProductID,
	)
	return err
}
