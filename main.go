package main

import (
	"embed"
	"flag"
	"io/fs"
	"log"
	"net/http"

	"alex-dna-tech/goth/handlers"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/filesystem"
	"github.com/gofiber/fiber/v2/middleware/helmet"

	flog "github.com/gofiber/fiber/v2/middleware/logger"
	frec "github.com/gofiber/fiber/v2/middleware/recover"
)

var (
	port = flag.String("port", ":3000", "Port to listen on")
	dev  = flag.Bool("dev", false, "Enable Development Mode")
)

//go:embed public
var embedDirStatic embed.FS

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

	if *dev {
		app.Static("/public", "./public")
	} else {

		sub, err := fs.Sub(embedDirStatic, "public")
		if err != nil {
			panic(err)
		}

		app.Use("/public", filesystem.New(filesystem.Config{
			Root:   http.FS(sub),
			Browse: true,
		}))
	}
	handlers.Setup(app, dev)

	log.Println("Server listening on port: " + *port)
	log.Fatal(app.Listen(*port))
}
