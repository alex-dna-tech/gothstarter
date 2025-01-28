package server

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"

	"alex-dna-tech/goth/server/handlers"
	"alex-dna-tech/goth/views/components"
	"alex-dna-tech/goth/views/pages"
)

func (s *FiberServer) RegisterRoutes() {
	// Base root
	base := s.Group("")
	base.Get("/", func(c *fiber.Ctx) error {
		return handlers.Render(c, pages.Index("Home Page"))
	})
	base.Get("/about", func(c *fiber.Ctx) error {
		return handlers.Render(c, pages.About("About Page", c.Query("active-search-example")))
	})
	base.Get("/contacts", func(c *fiber.Ctx) error {
		return handlers.Render(c, pages.Contacts("Contacts Page"))
	})
	base.Get("/active-search", handlers.ActiveSearch)

	// API
	api := s.Group("/api/v1")
	api.Get("/", handlers.APIResponse)

	s.Get("/health", s.healthHandler)

	// Messages
	msg := s.Group("/messages")
	msg.Post("/", func(c *fiber.Ctx) error {
		return handlers.Render(c, components.Message("Form message"))
	})
	msg.Put("/", func(c *fiber.Ctx) error {
		return handlers.Render(c, components.Message("Message Send"))
	})

	s.Get("/hello/:name?", func(c *fiber.Ctx) error {
		name := c.Params("name")
		c.Locals("name", name)
		if name == "" {
			name = "World!"
		}
		return handlers.Render(c, pages.Hello("Hello world", name))
	})
}

// Apply CORS middleware
func (s *FiberServer) RegisterCORS() {
	s.Use(cors.New(cors.Config{
		AllowOrigins:     "*",
		AllowMethods:     "GET,POST,PUT,DELETE,OPTIONS,PATCH",
		AllowHeaders:     "Accept,Authorization,Content-Type",
		AllowCredentials: false, // credentials require explicit origins
		MaxAge:           300,
	}))

}

func NotFoundRutes(app *fiber.App) {
	app.Use(func(c *fiber.Ctx) error {
		c.Response().SetStatusCode(fiber.StatusNotFound)
		return handlers.Render(c, pages.NotFound("Not Found"))
	})
}

func (s *FiberServer) healthHandler(c *fiber.Ctx) error {
	return c.JSON(s.db.Health())
}
