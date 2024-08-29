-- users
-- name: GetUser :one
SELECT * FROM users
WHERE id = ? LIMIT 1;

-- name: ListUsers :many
SELECT * FROM users
ORDER BY username;

-- name: CreateUser :one
INSERT INTO users (
  email, username, password
) VALUES (
  ?, ?, ?
)
RETURNING *;

-- name: UpdateUser :exec
UPDATE users
SET 
email = ?,
username = ?,
password = ?
WHERE id = ?;

-- name: DeleteUser :exec
DELETE FROM users
WHERE id = ?;

