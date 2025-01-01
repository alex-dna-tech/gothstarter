FROM node:23-alpine as build
RUN apk --no-cache add git make gcc g++ curl ca-certificates
COPY --from=golang:1.23-alpine /usr/local/go /usr/local/go
ENV GOPATH /go
ENV PATH /usr/local/go/bin:$GOPATH/bin:$PATH
WORKDIR /build
COPY . .
RUN make clean && make

FROM scratch
COPY --from=build ["/build/gothbin", "/"]
ENTRYPOINT ["/gothbin"]
