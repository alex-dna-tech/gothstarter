package repo

import (
	"errors"
	"net/url"
)

func urlParse(s string) (*url.URL, error) {
	if s == "" {
		return nil, errors.New("string cannot be empty")
	}

	dbURL, err := url.Parse(s)
	if err != nil {
		return nil, err
	}

	return dbURL, nil
}
