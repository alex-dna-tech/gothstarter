//go:build sqlite3 || (!sqlite3 && !mysql && !posgresql)
// +build sqlite3 !sqlite3,!mysql,!posgresql

package main

import (
	"database/sql"

	sqlite3_db "alex-dna-tech/goth/db/sqlite3"

	_ "github.com/mattn/go-sqlite3"
)

const DB_TYPE = "sqlite3"

func initDB(s string) (*sqlite3_db.Queries, error) {
	db, err := sql.Open(DB_TYPE, s)
	if err != nil {
		return nil, err
	}

	return sqlite3_db.New(db), nil
}
