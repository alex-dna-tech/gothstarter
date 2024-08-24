package main

import (
	"flag"
	"log"

	"alex-dna-tech/goth/handlers"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/helmet"

	flog "github.com/gofiber/fiber/v2/middleware/logger"
	frec "github.com/gofiber/fiber/v2/middleware/recover"
)

var (
	port = flag.String("port", ":3000", "Port to listen on")
	dev  = flag.Bool("dev", false, "Enable Development Mode")
)

func main() {
	flag.Parse()
	conf := fiber.Config{
		Prefork: !*dev,
	}
	if *dev {
		conf.AppName = "DEV-GOTH"
	}

	app := fiber.New(conf)

	app.Use(frec.New(), helmet.New(), flog.New())

	// TODO: embedding
	app.Static("/public", "./public")
	handlers.Setup(app, dev)

	log.Println("Server listening on port: " + *port)
	log.Fatal(app.Listen(*port))
}
