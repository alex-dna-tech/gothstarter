# GoTH Starter
- **Go** language
- **T**ailwind CSS Framework
- **H**TMX JS Framework

## Requirements
- Install [Go](https://go.dev/doc/install)
- Install [NodeJS](https://nodejs.org/en/download/package-manager)
- Optional [GNU Make](https://www.gnu.org/software/make/)
- Optional: [Docker Install](https://docs.docker.com/engine/install/)

## Go language components
- [Go Fiber](https://docs.gofiber.io/api/fiber) Express inspired web Framework 
- [TEMPL](https://templ.guide/) - build HTML with Go
- [SQLC](https://github.com/sqlc-dev/sqlc) - generates type-safe code from SQL
- [Golang-Migrate](https://github.com/golang-migrate/migrate) - database migrations

## Tailwind components
- [daisyUI](https://daisyui.com/components/)

## Quickstart
- Use `make` to run build target in `Makefile`. Run `DB_STRING=sqlite3://gothbin-prod.db gothbin` binary and open http://127.0.0.1:3000 in your browser to see production ready application.
- Use `make dev` to run application in development mode. Open http://127.0.0.1:7331 in your browser to development environment.
- Run `docker-copmose up -d` to start up containers. 

## Development
http://localhost:8800/?sqlite=&username=&db=%2Fdata%2Fgothbin-prod.db

