package main

import (
	"errors"
	"flag"
	"log"
	"os"
	"strings"

	"alex-dna-tech/goth/handlers"

	helmet "github.com/gofiber/fiber/v2/middleware/helmet"
	flog "github.com/gofiber/fiber/v2/middleware/logger"
	frec "github.com/gofiber/fiber/v2/middleware/recover"
)

var (
	port = flag.String("port", ":3000", "Port to listen on")
)

// Build required tags argument, by default 'go build -tags "prod sqlite3" .'
func main() {
	flag.Parse()

	s := os.Getenv("DB_STRING")
	dbs, err := parseDBString(s)
	if err != nil {
		log.Fatalf("'DB_STRING' environment variable required, error: %v", err)
	}

	initDB(dbs[1])

	conf := initConf()
	conf.AppName = strings.ToUpper(ENV+"-"+DB_TYPE) + "-GOTH"

	app := initApp(conf)
	app.Use(frec.New(), helmet.New(), flog.New())

	handlers.BaseRoutes(app)
	handlers.HelloRoutes(app)
	handlers.MessageRoutes(app)
	handlers.APIRoutes(app)
	handlers.NotFoundRoutes(app)

	log.Println("Server listening on port: " + *port)
	log.Fatal(app.Listen(*port))
}

func parseDBString(s string) ([]string, error) {
	if s == "" {
		return nil, errors.New("string cannot be empty")
	}

	dbs := strings.Split(s, "://")
	if len(dbs) != 2 {
		return nil, errors.New("wrong db string format")
	}

	switch dbs[0] {
	case "sqlite", "sqlite3":
		dbs[0] = "sqlite"
	case "postgresql", "postgres":
		dbs[0] = "postgresql"
	case "mysql", "mariadb":
		dbs[0] = "mysql"
	default:
		return nil, errors.New("unsuported database type")
	}

	return dbs, nil
}
