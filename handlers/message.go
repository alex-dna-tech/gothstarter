package handlers

import (
	"github.com/gofiber/fiber/v2"

	"alex-dna-tech/goth/views/components"
)

func MessageRoutes(app *fiber.App) {
	msg := app.Group("/messages")
	msg.Post("/", func(c *fiber.Ctx) error {
		return Render(c, components.Message("Form message"))
	})
	msg.Put("/", func(c *fiber.Ctx) error {
		return Render(c, components.Message("Message Send"))
	})
}
