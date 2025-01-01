package db

import (
	"context"
	"database/sql"

	_ "github.com/mattn/go-sqlite3"
)

type DBTX interface {
	ExecContext(context.Context, string, ...interface{}) (sql.Result, error)
	PrepareContext(context.Context, string) (*sql.Stmt, error)
	QueryContext(context.Context, string, ...interface{}) (*sql.Rows, error)
	QueryRowContext(context.Context, string, ...interface{}) *sql.Row
}

func new(db DBTX) *Queries {
	return &Queries{db: db}
}

func New(dbType, dbURI string) (*Queries, *sql.DB, error) {
	// refer https://github.com/go-sql-driver/mysql#dsn-data-source-name for details
	// dsn := "user:pass@tcp(127.0.0.1:3306)/dbname?charset=utf8mb4&parseTime=True&loc=Local"

	db, err := sql.Open("sqlite3", "./sqlite.db")
	if err != nil {
		return nil, nil, err
	}
	return new(db), db, nil
}

type Queries struct {
	db DBTX
}

func (q *Queries) WithTx(tx *sql.Tx) *Queries {
	return &Queries{
		db: tx,
	}
}
