// Package server provides ...
package api

import (
	"database/sql"
	"log"
	"os"
	"strings"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"

	repo "alex-dna-tech/goth/database"
)

type FiberServer struct {
	*fiber.App
	DB *sql.DB
}

func New(conf fiber.Config, mnt ...func(*fiber.App)) *FiberServer {
	// Required environment variables
	env, ok := os.LookupEnv("ENV")
	if !ok {
		env = "prod"
	}

	dbStr, ok := os.LookupEnv("DB_STRING")
	if !ok {
		log.Fatal("DB_STRING environment required")
	}

	dbEngine := strings.Split(dbStr, "://")[0]
	conf.AppName = strings.ToUpper(env+"-"+dbEngine) + "-GOTH"

	server := &FiberServer{
		App: fiber.New(conf),
		DB:  repo.NewDB(dbStr),
	}

	if len(mnt) > 0 {
		server.Mount(mnt...)
	}
	return server
}

func (s *FiberServer) Mount(m ...func(*fiber.App)) {
	for _, f := range m {
		f(s.App)
	}
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
