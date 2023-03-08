# DjangoJWTReact Backend

This is the django backend for the JWT Auth. It uses `djangorestframework`. The API allows you to create a new refresh and access tokens, logout, and also an example home page.

## API Routes

### POST `/token/`

#### Request Parameters

Username: Your_Username_Here
Password: Your_Password_Here

#### Example response

```
HTTP 200 OK
Allow: POST, OPTIONS
Content-Type: application/json
Vary: Accept

{
    "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3ODM3OTkxNiwiaWF0IjoxNjc4MjkzNTE2LCJqdGkiOiI3OWI4Zjk5MDlhODI0MjUyYjBlYjA0ZTBkNWU0M2UwYSIsInVzZXJfaWQiOjF9.1SY9Bh-0P25czmvRloWgoC9h6P1H1v7PzHMkoQOQZxM",
    "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc4Mjk0MTE2LCJpYXQiOjE2NzgyOTM1MTYsImp0aSI6ImVjYzIyN2M5MmVjNzRhYTU5ODgyZmRlMmEzMTBiOTBjIiwidXNlcl9pZCI6MX0.Fh1hni9kZZqJHp6oRSBhf-OfbDEDUT--aakZTZmYCL0"
}
```

### POST `/token/refresh/`

#### Request Parameters

Refresh: Your_Refresh_Token_Here

#### Example Response

```
HTTP 200 OK
Allow: POST, OPTIONS
Content-Type: application/json
Vary: Accept

{
    "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc4Mjk0ODgxLCJpYXQiOjE2NzgyOTQyNTcsImp0aSI6ImIwNDEwY2YwNTk1ZTQxMjM4MDYxOWVjNmUxNjczZDc1IiwidXNlcl9pZCI6MX0.eqyUYpisGRs9ZHGzVFl6FSEg9F-W4VT9j5mEFV_9l3s",
    "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY3ODM4MDY4MSwiaWF0IjoxNjc4Mjk0MjgxLCJqdGkiOiIwZWVlZTA3MDAyY2Q0MGQ2OWMyYmZiZGRjZWVjODRkYiIsInVzZXJfaWQiOjF9.sZHTiQusPKxvZAnComHY98hX0SOEIujU2MF4_DRLjLE"
}
```

### POST `/logout/`

#### Headers

Authentication: Bearer Your_Access_Token_here

#### form-data

refresh_token: Your_Refresh_Token_Here

#### Example Response

```
HTTP 205
```

### GET `/home/`

#### Headers

Authentication: Bearer Your_Access_Token_here

#### Example Response

```
{
    "message": "Welcome to the JWT Authentication page using React Js and Django!"
}
```
