//go:build dev
// +build dev

package main

import (
	"time"

	"github.com/gofiber/fiber/v2"
)

const ENV = "dev"

// Mount static dev middleware
func staticFS(app *fiber.App) {
	app.Static("/public", "./public", fiber.Static{
		CacheDuration: 1 * time.Nanosecond,
	})
}

func initConf() fiber.Config {
	return fiber.Config{
		Prefork: false,
	}
}
