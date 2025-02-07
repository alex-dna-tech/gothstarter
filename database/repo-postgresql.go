//go:build postgresql || postgres

package repo

import (
	"context"
	"log"

	"github.com/jackc/pgx/v5"
)

func NewDB(dbstr string) *pgx.Conn {
	dbs, err := urlParse(dbstr)
	if err != nil {
		log.Fatal(err)
	}

	db, err := pgx.Connect(context.Background(), dbs.String())
	if err != nil {
		log.Fatal(err)
	}

	return db
}
