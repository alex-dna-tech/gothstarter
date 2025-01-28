-- users
-- name: GetUserByID :one
SELECT * FROM users
WHERE id = $1 LIMIT 1;

-- name: ListUsers :many
SELECT * FROM users
ORDER BY username;

-- name: CreateUser :one
INSERT INTO users (
  email, username, password
) VALUES (
  $1, $2, $3
)
RETURNING *;

-- name: UpdateUser :exec
UPDATE users
SET 
email = $1,
username = $2,
password = $3
WHERE id = $4;

-- name: DeleteUser :exec
DELETE FROM users
WHERE id = $1;

