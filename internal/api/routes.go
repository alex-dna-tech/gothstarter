package api

import (
	"context"
	"fmt"
	"time"

	"github.com/gofiber/fiber/v2"

	repo "alex-dna-tech/goth/database"
	"alex-dna-tech/goth/views/components"
	"alex-dna-tech/goth/views/pages"
)

func (s *FiberServer) RegisterRoutes() {
	// Base root
	base := s.Group("")
	base.Get("/", func(c *fiber.Ctx) error {
		return Render(c, pages.Index("Home Page"))
	})
	base.Get("/about", func(c *fiber.Ctx) error {
		return Render(c, pages.About("About Page", c.Query("active-search-example")))
	})

	base.Get("/contacts", func(c *fiber.Ctx) error {
		return Render(c, pages.Contacts("Contacts Page", c))
	})

	base.Get("/products", func(c *fiber.Ctx) error {
		ctx, cancel := context.WithTimeout(context.Background(), 1*time.Second)
		defer cancel()
		search := repo.ActiveSearchProductParams{
			ProductName:  "%Bob%",
			CategoryName: "%Bob%",
			SupplierName: "%Bob%",
		}
		res, err := repo.New(s.DB).ActiveSearchProduct(ctx, search)
		if err != nil {
			return err
		}

		// products := make([]templ.Component, 0, len(res))
		for k, v := range res {
			fmt.Printf("k = %+v\n", k)
			fmt.Printf("v = %+v\n", v)
		}

		// var pTab []templ.Component
		// for p, _ := range products {
		// 	pTab = append(pTab, )
		//
		// }

		return Render(c, pages.Products("Products Page", ""))
	})
	base.Get("/active-search", ActiveSearch)

	// Messages
	msg := s.Group("/messages")
	msg.Post("/", func(c *fiber.Ctx) error {
		return Render(c, components.Message("Form message"))
	})
	msg.Put("/", func(c *fiber.Ctx) error {
		return Render(c, components.Message("Message Send"))
	})

	// Hello
	s.Get("/hello/:name?", func(c *fiber.Ctx) error {
		name := c.Params("name")
		c.Locals("name", name)
		if name == "" {
			name = "World!"
		}
		return Render(c, pages.Hello("Hello world", name))
	})

}

func NotFoundRoute(app *fiber.App) {
	app.Use(func(c *fiber.Ctx) error {
		c.Response().SetStatusCode(fiber.StatusNotFound)
		return Render(c, pages.NotFound("Not Found"))
	})
}
