//go:build dev
// +build dev

package main

import (
	"time"

	"github.com/gofiber/fiber/v2"
)

const ENV = "dev"

func initConf() fiber.Config {
	return fiber.Config{
		Prefork: false,
	}
}

func initApp(conf fiber.Config) *fiber.App {
	app := fiber.New(conf)
	app.Static("/public", "./public", fiber.Static{
		CacheDuration: 1 * time.Nanosecond,
	})
	return app
}
