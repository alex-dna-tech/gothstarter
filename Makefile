NAME = gothbin
BUILD_JS = esbuild assets/main.ts --bundle --outdir=public/
BUILD_CSS = npx tailwindcss -i assets/main.css -o public/main.css

DB_SQLITE3 = sqlite3://sqlite.db
DB_POSTGRES = postgresql://user:password@localhost:5432/fiber_demo?sslmode=disable

DB = $(DB_SQLITE3)
DB_ENGINE = $(word 1,$(subst :, ,$(DB))) 
DB_MIGRATIONS = db/$(DB_ENGINE)/migrations

GIT_COMMIT = $(shell git rev-parse --short HEAD)
GIT_TAG = $(shell git describe --abbrev=0 --tags --always --match "v*")
GIT_IMPORT = alex-dna-tech/gothstarter
BUILD_DATE = $(shell date +%s)
LDFLAGS = -X $(GIT_IMPORT).BuildDate=$(BUILD_DATE) -X $(GIT_IMPORT).GitCommit=$(GIT_COMMIT) -X $(GIT_IMPORT).GitTag=$(GIT_TAG)

GOPATH = $(shell go env GOPATH)

.DEFAULT_GOAL := $(NAME)

# Build
public/main.js: $(GOPATH)/bin/esbuild
	$(BUILD_JS) --minify

public/main.css:
		$(BUILD_CSS)

$(NAME): public/main.js public/main.css
	CGO_ENABLED=0 go build -ldflags "-s -w ${LDFLAGS}" -o $(NAME) main.go

.PHONY: clean
clean:
	rm -rf tmp/ $(NAME) public/main.css public/main.js sqlite.db

# Migrations
.PHONY: migrate-create
migrate-create: $(GOPATH)/bin/migrate
	@ read -p "Create DB table: " T; \
	migrate create -ext "sql" -dir $(DB_MIGRATIONS)/$(DB_ENGINE) -seq "create_"$$T"_table"

.PHONY: migrate-up
migrate-up: $(GOPATH)/bin/migrate
	migrate -database $(DB) -path $(DB_MIGRATIONS)/$(DB_ENGINE) -verbose up

.PHONY: migrate-down
migrate-down: $(GOPATH)/bin/migrate
	migrate -database $(DB) -path $(DB_MIGRATIONS)/$(DB_ENGINE) -verbose down

# Development
.PHONY: dev
dev:
	@ echo "Run dev/watch processes on http://127.0.0.1:7331/, 'Ctrl+C' or 'killall make' to cancel"
	make -j6 dev-sqlc dev-templ dev-air dev-js dev-css dev-reload

.PHONY: dev-sqlc
dev-sqlc: $(GOPATH)/bin/sqlc
	@ echo "-- Watch SQLC"
	air \
  --build.cmd "sqlc generate" \
  --build.bin "true" \
  --build.delay "100" \
	--build.include_dir "db"\
  --build.include_ext "sql"

.PHONY: dev-air
dev-air: $(GOPATH)/bin/air
	@ echo "-- Watch Go Binary"
	air \
  --build.cmd "go build -o ./tmp/main main.go" \
  --build.bin "./tmp/main --dev" \
  --build.delay "100" \
  --build.exclude_regex ".*_test.go" \
  --build.include_dir "db,handlers,views" \
	--build.include_file "main.go" \
  --build.include_ext "go"

.PHONY: dev-css
dev-css:
	@ echo "-- Watch CSS"
	$(BUILD_CSS) --watch

.PHONY: dev-js
dev-js:
	@ echo "-- Watch JS"
	$(BUILD_JS) --watch --sourcemap=inline

.PHONY: dev-templ
dev-templ: $(GOPATH)/bin/templ
	@ echo "-- Watch templ"
	templ generate --watch --proxy="http://localhost:3000" --open-browser=false

.PHONY: dev-reload
dev-reload: $(GOPATH)/bin/air 
	@ echo "-- Watch public folder and reload on change"
	air \
  --build.cmd "sleep .5 && templ generate --notify-proxy" \
  --build.bin "true" \
  --build.delay "100" \
  --build.include_dir "handlers,public" \
  --build.include_ext "go,js,css,svg,webp,png,jpg,ico,woff,woff2"

# Test
.PHONY: tidy
tidy:
	go mod tidy

.PHONY: vet
vet:
	go vet ./...

.PHONY: test
test: vet
	go test -v -race ./...

.PHONY: lint
lint: $(GOPATH)/bin/golangci-lint
	golangci-lint -v run ./...

# Dependencies install
$(GOPATH)/bin/golangci-lint:
	go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest

$(GOPATH)/bin/sqlc:
	go install github.com/sqlc-dev/sqlc/cmd/sqlc@latest

$(GOPATH)/bin/air:
	go install github.com/air-verse/air@latest

$(GOPATH)/bin/templ:
	go install github.com/a-h/templ/cmd/templ@latest

$(GOPATH)/bin/esbuild:
	go install github.com/evanw/esbuild/...@latest

$(GOPATH)/bin/migrate:
	go install -tags 'sqlite3,postgres,mysql' github.com/golang-migrate/migrate/v4/cmd/migrate@latest

