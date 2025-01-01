//go:build prod || (!dev && !prod)
// +build prod !dev,!prod

package main

import (
	"embed"
	"io/fs"
	"net/http"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/filesystem"
)

const ENV = "prod"

//go:embed public
var embedDirStatic embed.FS

func initConf() fiber.Config {
	return fiber.Config{
		Prefork: true,
	}
}

func initApp(conf fiber.Config) *fiber.App {
	sub, err := fs.Sub(embedDirStatic, "public")
	if err != nil {
		panic(err)
	}
	app := fiber.New(conf)
	app.Use("/public", filesystem.New(filesystem.Config{
		Root:   http.FS(sub),
		Browse: true,
	}))
	return app
}
