// Package server provides ...
package server

import (
	"github.com/gofiber/fiber/v2"

	db "alex-dna-tech/goth/database"
)

type FiberServer struct {
	*fiber.App
	db db.Store
}

func New(conf fiber.Config, dbstr string, mnt ...func(*fiber.App)) *FiberServer {
	server := &FiberServer{
		App: fiber.New(conf),
		db:  db.NewStore(dbstr),
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
