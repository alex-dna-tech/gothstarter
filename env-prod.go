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

// Mount static as embed in production middleware
func staticFS(app *fiber.App) {
	sub, err := fs.Sub(embedDirStatic, "public")
	if err != nil {
		panic(err)
	}
	app.Use("/public", filesystem.New(filesystem.Config{
		Root:   http.FS(sub),
		Browse: true,
	}))
}

func initConf() fiber.Config {
	return fiber.Config{
		Prefork: true,
	}
}
