# Load default values
NAME ?= gothbin
NODE_ENV ?= prod

BUILD_JS = esbuild assets/main.ts --bundle --outdir=public/
BUILD_CSS = npx tailwindcss -i assets/main.css -o public/main.css

# DB vars
DB_STRING ?= sqlite3://$(NAME)-$(NODE_ENV).db
DB = $(DB_STRING)
DB_ENGINE = $(strip $(word 1, $(subst :, ,$(DB_STRING))))
DB_MIGRATIONS = database/$(DB_ENGINE)/migrations

# Build vars
GIT_COMMIT = $(shell git rev-parse --short HEAD)
GIT_TAG = $(shell git describe --abbrev=0 --tags --always --match "v*")
GIT_IMPORT = $(shell go list -m)
BUILD_DATE = $(shell date +%s)
LDFLAGS = -ldflags "-s -w -X $(GIT_IMPORT).BuildDate=$(BUILD_DATE) -X $(GIT_IMPORT).GitCommit=$(GIT_COMMIT) -X $(GIT_IMPORT).GitTag=$(GIT_TAG)"

GOPATH = $(shell go env GOPATH)
GOTAGS = -tags "$(NODE_ENV) $(DB_ENGINE)"

.DEFAULT_GOAL := $(NAME)

# Build
$(NAME): sql public/main.js public/main.css
	CGO_ENABLED=0 go build $(GOTAGS) $(LDFLAGS) -trimpath -o $(NAME) .

node_modules/tailwindcss/package.json node_modules/htmx.org/package.json:
	npm install

public/main.js: $(GOPATH)/bin/esbuild node_modules/htmx.org/package.json
	$(BUILD_JS) --minify

public/main.css: node_modules/tailwindcss/package.json 
	$(BUILD_CSS) --minify

.PHONY: sql
sql: $(GOPATH)/bin/sqlc
	sqlc generate

.PHONY: clean
clean:
	rm -rf tmp/ node_modules/ public/main.css public/main.js $(NAME) $(NAME)-$(NODE_ENV).db

# Migrations
.PHONY: mig-create
mig-create: $(GOPATH)/bin/migrate
	@ read -p "Create migration with name: " T; \
	migrate create -ext "sql" -dir $(DB_MIGRATIONS) -seq "$$T"

.PHONY: mig-create-table
mig-create-table: $(GOPATH)/bin/migrate
	@ read -p "Create DB table: " T; \
	migrate create -ext "sql" -dir $(DB_MIGRATIONS) -seq "create_$$T_table"

.PHONY: mig-up
mig-up: $(GOPATH)/bin/migrate
	migrate -database $(DB) -path $(DB_MIGRATIONS) -verbose up

.PHONY: mig-down
mig-down: $(GOPATH)/bin/migrate
	migrate -database $(DB) -path $(DB_MIGRATIONS) -verbose down 1

.PHONY: mig-down-all
mig-down-all: $(GOPATH)/bin/migrate
	migrate -database $(DB) -path $(DB_MIGRATIONS) -verbose down -all

.PHONY: mig-drop
mig-drop: $(GOPATH)/bin/migrate
	migrate -database $(DB) -path $(DB_MIGRATIONS) -verbose drop -f

.PHONY: mig-force
mig-force: $(GOPATH)/bin/migrate
	@ read -p "Force set to version: " V; \
	migrate -database $(DB) -path $(DB_MIGRATIONS) -verbose force $$V

.PHONY: mig-goto
mig-goto: $(GOPATH)/bin/migrate
	@ read -p "Migrate to version: " V; \
	migrate -database $(DB) -path $(DB_MIGRATIONS) -verbose force $$V

# Development
.PHONY: dev
dev:
	@ echo "Run dev/watch processes on http://127.0.0.1:7331/, 'Ctrl+C' or 'killall make' to cancel"
	DB_STRING=$(DB_STRING) make -j6 dev-templ dev-sqlc dev-go dev-js dev-css dev-reload

.PHONY: dev-sqlc
dev-sqlc: $(GOPATH)/bin/sqlc $(GOPATH)/bin/air
	@ echo "-- Watch SQLC"
	air \
  --build.cmd "sqlc generate" \
  --build.bin "true" \
  --build.delay "100" \
	--build.include_dir ".,database"\
  --build.include_ext "sql" \
	--build.include_file "sqlc.yml"

.PHONY: dev-go
dev-go: $(GOPATH)/bin/air
	@ echo "-- Watch Go Binary" 
	air \
  --build.cmd "go build -tags \"dev $(DB_ENGINE)\" -o ./tmp/main ." \
  --build.full_bin "DB_STRING=$(DB_STRING) ./tmp/main" \
  --build.delay "100" \
  --build.exclude_regex "_test\\.go" \
  --build.include_dir ".,database,handlers,views,server" \
  --build.include_ext "go" \

.PHONY: dev-css
dev-css: node_modules/tailwindcss/package.json
	@ echo "-- Watch CSS"
	$(BUILD_CSS) --watch

.PHONY: dev-js
dev-js: node_modules/htmx.org/package.json $(GOPATH)/bin/esbuild
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
  --build.include_dir ".,server,public" \
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

.PHONY: upgrade-dep
upgrade-dep:
	rm $(GOPATH)/bin/{golangci-lint,sqlc,air,templ,esbuild,migrate} 
	make $(GOPATH)/bin/{golangci-lint,sqlc,air,templ,esbuild,migrate} 

