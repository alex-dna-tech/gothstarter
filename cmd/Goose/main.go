package main

import (
	"context"
	"fmt"
	"log"
	"os"

	"github.com/jmoiron/sqlx"
	"github.com/joho/godotenv"
	_ "github.com/lib/pq"

	"github.com/pressly/goose/v3"
)

func init() {
	if err := godotenv.Load(); err != nil {
		log.Fatal(err)
	}
}

func main() {

	if len(os.Args) < 2 {
		log.Fatal("need to specify a command")
	}

	dbstring := fmt.Sprintf("postgres://%s:%s@%s/%s?sslmode=disable",
		os.Getenv("DB_USERNAME"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_HOST"),
		os.Getenv("DATABASE"))

	db, err := sqlx.Connect("postgres", dbstring)

	if err != nil {
		log.Fatalf("goose: failed to open DB: %v\n", err)
	}

	defer func() {
		if err := db.Close(); err != nil {
			log.Fatalf("goose: failed to close DB: %v\n", err)
		}
	}()

	ctx := context.Background()

	if err := goose.RunContext(ctx, os.Args[1], db.DB, "sql", os.Args[2:]...); err != nil {
		log.Fatalf("goose %v: %v", os.Args[1], err)
	}
}
