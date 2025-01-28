//go:build sqlite || sqlite3 || (!postgresql && !postgres && !mysql && !mariadb)

package store

import (
	"database/sql"
	"log"

	_ "modernc.org/sqlite"
)

func NewStore(dbstr string) Store {
	dbs, err := urlParse(dbstr)
	if err != nil {
		log.Fatal(err)
	}

	db, err := sql.Open("sqlite", dbs.Host)
	if err != nil {
		log.Fatal(err)
	}

	return &store{db: db}
}
