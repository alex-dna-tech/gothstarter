package handlers

import "github.com/gofiber/fiber/v2"

func APIRoutes(app *fiber.App) {
	api := app.Group("/api/v1")
	api.Get("/", APIResponse)
}

// APIResponse handle api status
func APIResponse(c *fiber.Ctx) error {
	return c.JSON(
		fiber.Map{
			"status":  "success",
			"message": "Hello i'm ok!",
			"data":    nil,
		})
}
