NAME = gothbin
BUILD_JS = npx esbuild assets/main.ts --bundle --outdir=public/
BUILD_CSS = npx tailwindcss -i assets/main.css -o public/main.css

GIT_COMMIT = $(shell git rev-parse --short HEAD)
GIT_TAG = $(shell git describe --abbrev=0 --tags --always --match "v*")
GIT_IMPORT = alex-dna-tech/gothstarter
BUILD_DATE = $(shell date +%s)
LDFLAGS = -X $(GIT_IMPORT).BuildDate=$(BUILD_DATE) -X $(GIT_IMPORT).GitCommit=$(GIT_COMMIT) -X $(GIT_IMPORT).GitTag=$(GIT_TAG)

GOPATH = $(shell go env GOPATH)

.DEFAULT_GOAL := $(NAME)

# Production
public/main.js:
	$(BUILD_JS) --minify

public/main.css:
		$(BUILD_CSS)

$(NAME): public/main.js public/main.css
	CGO_ENABLED=0 go build -ldflags "-s -w ${LDFLAGS}" -o $(NAME) cmd/goth/main.go

.PHONY: clean
clean:
	rm -f $(NAME) public/*.css public/*.js

# Development
.PHONY: tidy
tidy:
	go mod tidy

.PHONY: vet
vet:
	go vet ./...

.PHONY: test
test: vet
	go test -v -race ./...

.PHONY: dev
dev:
	make -j 5 dev-templ dev-air dev-reload dev-js dev-css

.PHONY: dev-air
dev-air: $(GOPATH)/bin/air
	@ echo "Build go cmd"
	air \
  --build.cmd "go build -o ./tmp/main cmd/goth/main.go" \
  --build.bin "./tmp/main --dev" \
  --build.delay "100" \
  --build.exclude_regex ".*_test.go,.*_templ.go" \
  --build.exclude_dir "assets,tmp,vendor" \
  --build.include_ext "go,templ"

$(GOPATH)/bin/air:
	go install github.com/cosmtrek/air@latest

.PHONY: dev-templ
dev-templ: $(GOPATH)/bin/templ
	@ echo "Build template"
	templ generate --watch --proxy="http://localhost:3000" --open-browser=false

$(GOPATH)/bin/templ:
	go install github.com/a-h/templ/cmd/templ@latest

.PHONY: dev-css
dev-css:
	@ echo "Build css"
	$(BUILD_CSS) --watch

.PHONY: dev-js
dev-js:
	@ echo "Build js"
	$(BUILD_JS) --watch

.PHONY: dev-reload
dev-reload: $(GOPATH)/bin/air
	@ echo "Watch public folder"
	air \
  --build.cmd "templ generate --notify-proxy" \
  --build.bin "true" \
  --build.delay "100" \
  --build.exclude_dir "" \
  --build.include_dir "public" \
  --build.include_ext "js,css"

.PHONY: lint
lint: $(GOPATH)/bin/golangci-lint
	golangci-lint run ./...

$(GOPATH)/bin/golangci-lint:
	go install github.com/golangci/golangci-lint/cmd/golangci-lint@latest
