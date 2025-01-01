package handlers

import (
	"github.com/gofiber/fiber/v2"

	"alex-dna-tech/goth/views/pages"
)

func HelloRoutes(app *fiber.App) {
	app.Get("/hello/:name?", func(c *fiber.Ctx) error {
		name := c.Params("name")
		c.Locals("name", name)
		if name == "" {
			name = "World"
		}
		return Render(c, pages.Hello("Hello world", name))
	})
}
