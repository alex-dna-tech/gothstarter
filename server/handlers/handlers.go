// Package handlers provides ...
package handlers

import (
	"strings"
	"time"

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
	time.Sleep(500 * time.Millisecond)
	search := strings.ToLower(strings.TrimSpace(c.FormValue("active-search-example")))

	out := make([]templ.Component, 0, len(pages.ActiveSearchTableData))

	for _, rowData := range pages.ActiveSearchTableData {
		if search == "" || (strings.Contains(strings.ToLower(rowData.FirstName), search) ||
			strings.Contains(strings.ToLower(rowData.LastName), search) ||
			strings.Contains(strings.ToLower(rowData.Email), search)) {
			out = append(out, pages.ActiveSearchTableRow(
				rowData.FirstName, rowData.LastName, rowData.Email))
		}
	}

	return Render(c, pages.ActiveSearchTableRows(out))
}
