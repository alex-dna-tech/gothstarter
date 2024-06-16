run: build
	@./bin/app

build:
	@go build -o bin/app .


css:
	tailwindcss -i views/css/app.css -o public/styles.css --watch   




# https://github.com/pressly/goose
migrate: build-go-goose
	bin/Goose up

status: build-go-goose
	bin/Goose status

add-sql-migration: build-go-goose
	bin/Goose create $(FILE_NAME) sql

add-go-migration: build-go-goose
	bin/Goose create $(FILE_NAME) go

reset: build-go-goose
	bin/Goose reset

rollback: build-go-goose
	bin/Goose down

build-go-goose:
	go build -o bin/Goose cmd/Goose/*.go



start-db:
	docker-compose up -d

stop-db:
	docker-compose down



air:
	air -c .air.toml

templ:
	templ generate --watch

# npm i -g tailwindcss@3.4.3
css:
	tailwindcss -i css/app.css -o public/styles.css --watch   
