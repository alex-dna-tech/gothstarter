// Package handlers
package handlers

import (
	"strings"

	"alex-dna-tech/goth/views/pages"

	"github.com/a-h/templ"
	"github.com/gofiber/fiber/v2"
)

func BaseRoutes(app *fiber.App) {
	app.Get("/", func(c *fiber.Ctx) error {
		return Render(c, pages.Index("Home Page"))
	})
	app.Get("/about", func(c *fiber.Ctx) error {
		return Render(c, pages.About("About Page"))
	})
	app.Get("/contacts", func(c *fiber.Ctx) error {
		return Render(c, pages.Contacts("Contacts Page"))
	})
}

func NotFoundRoutes(app *fiber.App) {
	app.Use(func(c *fiber.Ctx) error {
		c.Response().SetStatusCode(fiber.StatusNotFound)
		return Render(c, pages.NotFound("Not Found"))
	})
}

func Render(c *fiber.Ctx, component templ.Component) error {
	c.Set("Content-Type", "text/html")

	if strings.HasPrefix(c.App().Config().AppName, "DEV") {
		c.Set("Cache-Control", "no-store")
	}

	return component.Render(c.Context(), c.Response().BodyWriter())
}
