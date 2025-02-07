package server

import (
	"context"
	"fmt"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"

	repo "alex-dna-tech/goth/database"
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
		ctx, cancel := context.WithTimeout(context.Background(), 1*time.Second)
		defer cancel()
		search := repo.ActiveSearchProductParams{
			ProductName:  "%Bob%",
			CategoryName: "%Bob%",
			SupplierName: "%Bob%",
		}
		products, err := repo.New(s.DB).ActiveSearchProduct(ctx, search)
		if err != nil {
			return err
		}

		fmt.Printf("products = %+v\n", products)

		// var pTab []templ.Component
		// for p, _ := range products {
		// 	pTab = append(pTab, )
		//
		// }

		return handlers.Render(c, pages.Contacts("Contacts Page", ""))
	})
	base.Get("/active-search", handlers.ActiveSearch)

	// Messages
	msg := s.Group("/messages")
	msg.Post("/", func(c *fiber.Ctx) error {
		return handlers.Render(c, components.Message("Form message"))
	})
	msg.Put("/", func(c *fiber.Ctx) error {
		return handlers.Render(c, components.Message("Message Send"))
	})

	// Hello
	s.Get("/hello/:name?", func(c *fiber.Ctx) error {
		name := c.Params("name")
		c.Locals("name", name)
		if name == "" {
			name = "World!"
		}
		return handlers.Render(c, pages.Hello("Hello world", name))
	})

	s.Get("/health", s.healthHandler)
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

func NotFoundRoute(app *fiber.App) {
	app.Use(func(c *fiber.Ctx) error {
		c.Response().SetStatusCode(fiber.StatusNotFound)
		return handlers.Render(c, pages.NotFound("Not Found"))
	})
}

func (s *FiberServer) healthHandler(c *fiber.Ctx) error {
	return c.JSON(fiber.Map{})
}
