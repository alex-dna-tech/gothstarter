//go:build postgresql || postgres

package store

import (
	"context"
	"log"

	"github.com/jackc/pgx/v5"
)

func NewStore(dbstr string) Store {
	dbs, err := urlParse(dbstr)
	if err != nil {
		log.Fatal(err)
	}

	db, err := pgx.Connect(context.Background(), dbs.String())
	if err != nil {
		log.Fatal(err)
	}

	return &store{db: db}
}
