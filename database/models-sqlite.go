//go:build sqlite || sqlite3 || (!postgresql && !postgres && !mysql && !mariadb)

// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.28.0

package repo

import (
	"database/sql"
	"time"
)

type Category struct {
	CategoryName string
	Description  sql.NullString
	CategoryID   int64
}

type Customer struct {
	CustomerName string
	ContactName  sql.NullString
	Address      sql.NullString
	City         string
	Postalcode   sql.NullString
	Country      string
	CustomerID   int64
}

type Employee struct {
	LastName   string
	FirstName  string
	Birthdate  time.Time
	Photo      sql.NullString
	Notes      sql.NullString
	EmployeeID int64
}

type Order struct {
	CustomerID sql.NullInt64
	EmployeeID sql.NullInt64
	Orderdate  sql.NullTime
	ShipperID  sql.NullInt64
	OrderID    int64
}

type OrderDetail struct {
	OrderdetailID int64
	OrderID       sql.NullInt64
	ProductID     sql.NullInt64
	Quantity      sql.NullInt64
}

type Product struct {
	ProductName string
	SupplierID  sql.NullInt64
	CategoryID  sql.NullInt64
	Unit        sql.NullString
	Price       sql.NullFloat64
	ProductID   int64
}

type Shipper struct {
	ShipperName string
	Phone       string
	ShipperID   int64
}

type Supplier struct {
	SupplierName string
	ContactName  sql.NullString
	Address      string
	City         string
	Postalcode   sql.NullString
	Country      string
	Phone        string
	SupplierID   int64
}
