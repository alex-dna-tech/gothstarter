ARG DB_ENGINE
FROM node:23-alpine
RUN apk --no-cache add git make gcc g++ curl ca-certificates
COPY --from=golang:1.23-alpine /usr/local/go /usr/local/go
ENV GOPATH /go
ENV PATH /usr/local/go/bin:$GOPATH/bin:$PATH
RUN go install github.com/sqlc-dev/sqlc/cmd/sqlc@latest \
  && go install github.com/a-h/templ/cmd/templ@latest \
	&& go install github.com/evanw/esbuild/...@latest
WORKDIR /build
COPY go.mod go.sum .
RUN go mod download
COPY . .
RUN ENV=prod DB_ENGINE=$DB_ENGINE make

FROM scratch
COPY --from=0 ["/build/gothbin", "/gothbin"]
ENTRYPOINT ["/gothbin"]
