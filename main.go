package main

import (
	"context"
	"fmt"
	"log"
	"os"
	"os/signal"
	"syscall"
	"time"

	"alex-dna-tech/goth/internal/api"
)

func main() {
	// Start Fiber Server
	conf := initConf()
	server := api.New(conf, staticFS)
	server.RegisterCORS()
	server.RegisterRoutes()

	portAddr := os.Getenv("PORT")
	if portAddr == "" {
		portAddr = ":3000"
	}

	// Create a done channel to signal when the shutdown is complete
	done := make(chan bool, 1)

	go func(portAddr string) {
		err := server.Listen(portAddr)
		if err != nil {
			panic(fmt.Sprintf("http server error: %s", err))
		}
	}(portAddr)

	// Run graceful shutdown in a separate goroutine
	go gracefulShutdown(server, done)

	// Wait for the graceful shutdown to complete
	<-done
	log.Println("Graceful shutdown complete.")
}

func gracefulShutdown(fiberServer *api.FiberServer, done chan bool) {
	ctx, stop := signal.NotifyContext(context.Background(), syscall.SIGINT, syscall.SIGTERM)
	defer stop()

	// Listen for the interrupt signal.
	<-ctx.Done()
	log.Println("shutting down gracefully, press Ctrl+C again to force")

	// The context is used to inform the server it has 5 seconds to finish
	// the request it is currently handling
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	if err := fiberServer.ShutdownWithContext(ctx); err != nil {
		log.Printf("Server forced to shutdown with error: %v", err)
	}
	log.Println("Server exiting")

	// Notify the main goroutine that the shutdown is complete
	done <- true
}
