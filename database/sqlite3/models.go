//go:build sqlite || sqlite3 || (!postgresql && !postgres && !mysql && !mariadb)

// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.28.0

package store

import (
	"database/sql"
	"time"
)

type Category struct {
	CategoryName string         `json:"category_name"`
	Description  sql.NullString `json:"description"`
	CategoryID   int64          `json:"category_id"`
}

type Customer struct {
	CustomerName string         `json:"customer_name"`
	ContactName  sql.NullString `json:"contact_name"`
	Address      sql.NullString `json:"address"`
	City         string         `json:"city"`
	Postalcode   sql.NullString `json:"postalcode"`
	Country      string         `json:"country"`
	CustomerID   int64          `json:"customer_id"`
}

type Employee struct {
	LastName   string         `json:"last_name"`
	FirstName  string         `json:"first_name"`
	Birthdate  time.Time      `json:"birthdate"`
	Photo      sql.NullString `json:"photo"`
	Notes      sql.NullString `json:"notes"`
	EmployeeID int64          `json:"employee_id"`
}

type Order struct {
	CustomerID sql.NullInt64 `json:"customer_id"`
	EmployeeID sql.NullInt64 `json:"employee_id"`
	Orderdate  sql.NullTime  `json:"orderdate"`
	ShipperID  sql.NullInt64 `json:"shipper_id"`
	OrderID    int64         `json:"order_id"`
}

type OrderDetail struct {
	OrderdetailID int64         `json:"orderdetail_id"`
	OrderID       sql.NullInt64 `json:"order_id"`
	ProductID     sql.NullInt64 `json:"product_id"`
	Quantity      sql.NullInt64 `json:"quantity"`
}

type Product struct {
	ProductName string          `json:"product_name"`
	SupplierID  sql.NullInt64   `json:"supplier_id"`
	CategoryID  sql.NullInt64   `json:"category_id"`
	Unit        sql.NullString  `json:"unit"`
	Price       sql.NullFloat64 `json:"price"`
	ProductID   int64           `json:"product_id"`
}

type Shipper struct {
	ShipperName string `json:"shipper_name"`
	Phone       string `json:"phone"`
	ShipperID   int64  `json:"shipper_id"`
}

type Supplier struct {
	SupplierName string         `json:"supplier_name"`
	ContactName  sql.NullString `json:"contact_name"`
	Address      string         `json:"address"`
	City         string         `json:"city"`
	Postalcode   sql.NullString `json:"postalcode"`
	Country      string         `json:"country"`
	Phone        string         `json:"phone"`
	SupplierID   int64          `json:"supplier_id"`
}
