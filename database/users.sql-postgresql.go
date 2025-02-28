//go:build postgresql || postgres

// Code generated by sqlc. DO NOT EDIT.
// versions:
//   sqlc v1.28.0
// source: users.sql

package repo

import (
	"context"
)

const createUser = `-- name: CreateUser :one
INSERT INTO users (
  email, username, password
) VALUES (
  $1, $2, $3
)
RETURNING email, username, password, created_at, updated_at, id
`

type CreateUserParams struct {
	Email    string
	Username string
	Password string
}

func (q *Queries) CreateUser(ctx context.Context, arg CreateUserParams) (User, error) {
	row := q.db.QueryRow(ctx, createUser, arg.Email, arg.Username, arg.Password)
	var i User
	err := row.Scan(
		&i.Email,
		&i.Username,
		&i.Password,
		&i.CreatedAt,
		&i.UpdatedAt,
		&i.ID,
	)
	return i, err
}

const deleteUser = `-- name: DeleteUser :exec
DELETE FROM users
WHERE id = $1
`

func (q *Queries) DeleteUser(ctx context.Context, id int64) error {
	_, err := q.db.Exec(ctx, deleteUser, id)
	return err
}

const getUserByID = `-- name: GetUserByID :one
SELECT email, username, password, created_at, updated_at, id FROM users
WHERE id = $1 LIMIT 1
`

// users
func (q *Queries) GetUserByID(ctx context.Context, id int64) (User, error) {
	row := q.db.QueryRow(ctx, getUserByID, id)
	var i User
	err := row.Scan(
		&i.Email,
		&i.Username,
		&i.Password,
		&i.CreatedAt,
		&i.UpdatedAt,
		&i.ID,
	)
	return i, err
}

const listUsers = `-- name: ListUsers :many
SELECT email, username, password, created_at, updated_at, id FROM users
ORDER BY username
`

func (q *Queries) ListUsers(ctx context.Context) ([]User, error) {
	rows, err := q.db.Query(ctx, listUsers)
	if err != nil {
		return nil, err
	}
	defer rows.Close()
	var items []User
	for rows.Next() {
		var i User
		if err := rows.Scan(
			&i.Email,
			&i.Username,
			&i.Password,
			&i.CreatedAt,
			&i.UpdatedAt,
			&i.ID,
		); err != nil {
			return nil, err
		}
		items = append(items, i)
	}
	if err := rows.Err(); err != nil {
		return nil, err
	}
	return items, nil
}

const updateUser = `-- name: UpdateUser :exec
UPDATE users
SET 
email = $1,
username = $2,
password = $3
WHERE id = $4
`

type UpdateUserParams struct {
	Email    string
	Username string
	Password string
	ID       int64
}

func (q *Queries) UpdateUser(ctx context.Context, arg UpdateUserParams) error {
	_, err := q.db.Exec(ctx, updateUser,
		arg.Email,
		arg.Username,
		arg.Password,
		arg.ID,
	)
	return err
}
