package api

import (
	"strings"

	"alex-dna-tech/goth/views/pages"

	"github.com/a-h/templ"
	"github.com/gofiber/fiber/v2"
)

func Render(c *fiber.Ctx, component templ.Component) error {
	c.Set("Content-Type", "text/html")

	if strings.HasPrefix(c.App().Config().AppName, "DEV") {
		c.Set("Cache-Control", "no-store")
	}

	return component.Render(c.Context(), c.Response().BodyWriter())
}

func ActiveSearch(c *fiber.Ctx) error {
	search := strings.ToLower(strings.TrimSpace(c.FormValue("active-search-example")))

	return Render(c, pages.ActiveSearchTableRows(search))
}
