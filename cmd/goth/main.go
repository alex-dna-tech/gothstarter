package main

import (
	"alex-dna-tech/goth/views/pages"
	"flag"
	"log"
	"log/slog"
	"net/http"
	"os"

	"github.com/a-h/templ"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/adaptor"
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

	logger := slog.New(slog.NewJSONHandler(os.Stdout, nil))
	app := fiber.New(fiber.Config{
		Prefork: !*dev,
	})

	app.Use(frec.New(), helmet.New(), flog.New())

	// TODO: embedding
	app.Static("/public", "./public")
	app.Get("/", func(c *fiber.Ctx) error {
		return Render(c, pages.Index("Home Page "))
	})

	app.Use(NotFoundMiddleware)
	logger.Info("Server listening on port: " + *port)
	log.Fatal(app.Listen(*port))
}

func NotFoundMiddleware(c *fiber.Ctx) error {
	return Render(c, pages.NotFound("Not Found"), templ.WithStatus(http.StatusNotFound))
}

func Render(c *fiber.Ctx, component templ.Component, options ...func(*templ.ComponentHandler)) error {
	componentHandler := templ.Handler(component)
	for _, o := range options {
		o(componentHandler)
	}

	if *dev {
		c.Request().Header.Add("Cache-Control", "no-cache")
	}

	return adaptor.HTTPHandler(componentHandler)(c)
}
