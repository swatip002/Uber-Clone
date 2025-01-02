# User Registration Endpoint

## Endpoint: `/users/register`

### Method: POST

### Description:
This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in the database, and returns a JSON Web Token (JWT) along with the user details.

### Request Body:
The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required).
  - `lastname`: A string with a minimum length of 3 characters (optional).
- `email`: A valid email address (required).
- `password`: A string with a minimum length of 5 characters (required).

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Response Body:
The response body will be a JSON object with the following fields:

- `token`: A JSON Web Token (JWT) string.
- `user`: An object containing:
  - `_id`: The user's unique identifier.
  - `fullname`: An object containing:
    - `firstname`: The user's first name.
    - `lastname`: The user's last name.
  - `email`: The user's email address.

Example:
```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

### Error Response:
If there are validation errors, the response body will be a JSON object with the following fields:

- `errors`: An array of error objects, each containing:
  - `msg`: The error message.
  - `param`: The parameter that caused the error.
  - `location`: The location of the parameter.

Example:
```json
{
  "errors": [
    {
      "msg": "Please enter a valid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 5 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

# User Login Endpoint

## Endpoint: `/users/login`

### Method: POST

### Description:
This endpoint is used to log in an existing user. It validates the input data, checks the user's credentials, and returns a JSON Web Token (JWT) along with the user details.

### Request Body:
The request body should be a JSON object with the following fields:

- `email`: A valid email address (required).
- `password`: A string with a minimum length of 5 characters (required).

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Response Body:
The response body will be a JSON object with the following fields:

- `token`: A JSON Web Token (JWT) string.
- `user`: An object containing:
  - `_id`: The user's unique identifier.
  - `fullname`: An object containing:
    - `firstname`: The user's first name.
    - `lastname`: The user's last name.
  - `email`: The user's email address.

Example:
```json
{
  "token": "jwt_token_here",
  "user": {
    "_id": "user_id_here",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

### Error Response:
If there are validation errors, the response body will be a JSON object with the following fields:

- `errors`: An array of error objects, each containing:
  - `msg`: The error message.
  - `param`: The parameter that caused the error.
  - `location`: The location of the parameter.

Example:
```json
{
  "errors": [
    {
      "msg": "Please enter a valid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 5 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

If the email or password is invalid, the response body will be a JSON object with the following field:

- `message`: A string with the error message.

Example:
```json
{
  "message": "Invalid email or password"
}
```

# User Profile Endpoint

## Endpoint: /users/profile

### Method: GET

### Description:
This endpoint is used to retrieve the profile of the currently authenticated user.

### Headers:
Authorization: Bearer jwt_token_here

### Response Body:
The response body will be a JSON object containing the user's details.

Example:
```json
{
  "_id": "user_id_here",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com"
}
```

### Error Response:
If the user is not authenticated, the response body will be a JSON object with the following field:

- `message`: A string with the error message.

Example:
```json
{
  "message": "Unauthorized"
}
```

# User Logout Endpoint

## Endpoint: /users/logout

### Method: GET

### Description:
This endpoint is used to log out the currently authenticated user. It clears the authentication token provided in cookie or header and adds it to a blacklist.

### Headers:
Authorization: Bearer jwt_token_here

### Response Body:
The response body will be a JSON object with the following field:

- `message`: A string with the success message.

Example:
```json
{
  "message": "Logged out successfully"
}
```
### Error Response:
If the user is not authenticated, the response body will be a JSON object with the following field:

- `message`: A string indicating the error message.

Example:
```json
{
  "message": "Unauthorized"
}
```

# Captain Registration Endpoint

## Endpoint: `/captains/register`

### Method: POST

### Description:
This endpoint is used to register a new captain. It validates the input data, hashes the password, creates a new captain in the database, and returns a JSON Web Token (JWT) along with the captain details.

### Request Body:
The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required).
  - `lastname`: A string with a minimum length of 3 characters (optional).
- `email`: A valid email address (required).
- `password`: A string with a minimum length of 6 characters (required).
- `vehicle`: An object containing:
  - `color`: A string with a minimum length of 3 characters (required).
  - `plate`: A string with a minimum length of 3 characters (required).
  - `capacity`: An integer with a minimum value of 1 (required).
  - `vehicleType`: A string that must be one of `car`, `motorcycle`, or `auto` (required).

Example:
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Response Body:
The response body will be a JSON object with the following fields:

- `token`: A JSON Web Token (JWT) string.
- `captain`: An object containing:
  - `_id`: The captain's unique identifier.
  - `fullname`: An object containing:
    - `firstname`: The captain's first name.
    - `lastname`: The captain's last name.
  - `email`: The captain's email address.
  - `vehicle`: An object containing:
    - `color`: The vehicle's color.
    - `plate`: The vehicle's plate number.
    - `capacity`: The vehicle's capacity.
    - `vehicleType`: The type of vehicle.

Example:
```json
{
  "token": "jwt_token_here",
  "captain": {
    "_id": "captain_id_here",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```
