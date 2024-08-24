// Package handlers
package handlers

import (
	"net/http"
	"strings"

	"alex-dna-tech/goth/views/pages"

	"github.com/a-h/templ"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/adaptor"
)

func Setup(app *fiber.App, dev *bool) {

	app.Get("/", func(c *fiber.Ctx) error {
		return Render(c, pages.Index("Home Page"))
	})

	app.Get("/api", Hello)

	/* Page Not Found Management */
	app.Use(func(c *fiber.Ctx) error {
		return Render(c, pages.NotFound("Not Found"), templ.WithStatus(http.StatusNotFound))
	})
}

func Render(c *fiber.Ctx, component templ.Component, options ...func(*templ.ComponentHandler)) error {
	componentHandler := templ.Handler(component)
	for _, o := range options {
		o(componentHandler)
	}

	if strings.HasPrefix(c.App().Config().AppName, "DEV") {
		c.Request().Header.Add("Cache-Control", "no-cache")
	}

	return adaptor.HTTPHandler(componentHandler)(c)
}
