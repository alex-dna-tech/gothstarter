package handlers

import (
	"github.com/gofiber/fiber/v2"
)

// APIResponse handle api status
func APIResponse(c *fiber.Ctx) error {
	return c.JSON(
		fiber.Map{
			"status":  "success",
			"message": "Hello i'm ok!",
			"data":    nil,
		})
}
