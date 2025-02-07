//go:build sqlite || sqlite3 || (!postgresql && !postgres && !mysql && !mariadb)

package repo

import (
	"database/sql"
	"log"

	_ "modernc.org/sqlite"
)

func NewDB(dbstr string) *sql.DB {
	dbs, err := urlParse(dbstr)
	if err != nil {
		log.Fatal(err)
	}

	db, err := sql.Open("sqlite", dbs.Host)
	if err != nil {
		log.Fatal(err)
	}

	return db
}
