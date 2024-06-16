package db

import (
	"fmt"

	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
)

var db *sqlx.DB

func InitDb(username, password, database string) {

	d, err := sqlx.Connect("postgres", fmt.Sprintf("postgres://%s:%s@localhost:5432/%s?sslmode=disable", username, password, database))

	if err != nil {
		panic(err)
	}

	err = d.Ping()

	if err != nil {
		panic(err)
	}

	db = d

}

func GetDb() *sqlx.DB {
	return db
}
