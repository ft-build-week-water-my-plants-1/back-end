# <p align="center">Water My Plants API</p>

## <p align="center">https://build-week-water-my-plants-1.herokuapp.com/</p>

## <p align="center">REGISTER / LOGIN</p>

### <p align="center">User examples:</p>

```json
[
  {
    "username": "jimhalpert",
    "password": "randompassword",
    "phoneNumber": "+19871234567"
    
  },
  {
    "username": "pambeesly",
    "password": "anotherrandompassword",
    "phoneNumber": "+11234567890"
  },
  {
    "username": "dwightschrute",
    "password": "somethingrandom",
    "phoneNumber": "+198765436789"
  }
]
```

### [POST] /api/auth/register

- Register a new user
  - _username required (must be a string | unique)_
  - _password required (must be a string)_
  - _phoneNumber required (must be a string | unique)_

_What you send:_

```json
{
  "username": "jimHalpert",
  "password": "password123",
  "phoneNumber": "+12340987654"
}
```


_What you receive:_

```json
{
  "message": "successfully created an account with the username jimHalpert"
}
```

### [POST] /api/auth/login

- Login
  - _username and password required_

_What you send:_

```json
{
  "username": "pambeesly",
  "password": "anotherrandompassword"
}
```

_What you receive:_

```json
{
  "message": "Welcome back pambeesly",
  "user_id": 1,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MzIzMzE4NzksImV4cCI6MTYzMjQxODI3OX0.Ajk-7XyY83eXwbo2mp5Q2_qEUdsfr1XnWy-wGtGX2XE"
}
```


## <p align="center">USERS</p>

### [GET] /api/users/:user_id

**_RESTRICTED ENDPOINT_**

- Get profile information for authenticated user
  - _requires valid token in authorization header to access_

_What you receive:_

```json
{
    "user_id": 1,
    "username": "dwightschrute",
    "password": "$2a$08$Gv6FncpXxzl66M/LvH8u5uxtL0iJlH4y7jH8HD1IEr4KxSGXZt6Q6",
    "phoneNumber": "+1234567897",
    "created_at": "2021-10-19T17:44:05.266Z",
    "updated_at": "2021-10-19T17:44:05.266Z"
}
```

### [PUT] /api/users/:user_id

**_RESTRICTED ENDPOINT_**

- Update an existing user (authenticated user)
  - _requires valid token in authorization header to send_
  - _requires valid user_id in user_id header to send_
  - _required information:_
    - _password_ (string)_
    - phoneNumber (string)_

_What you send:_

```json
{
  "username": "michaelScott", (optional)
  "password": "anotherrandompassword",
  "phoneNumber":"+14355903456"
}
```

_What you receive:_

```json
{
    "user_id": 1,
    "username": "michaelScott",
    "password": "$2a$08$xOcFL3YRWjdLQz4n545nzO0eZASuBNhYT2QYUctlv5Ks4YBqa3sdm",
    "phoneNumber": "+14355903456",
    "message": "successfully updated password"
}
```

## <p align="center">PLANTS</p>

### [GET] /api/plants

**_RESTRICTED ENDPOINT_**

- Get an array of plants for authenticated user
  - _requires valid token in authorization header to access_
  - _requires valid user_id in user_id header to access_

_What you receive:_

```json
[
    {
      "plant_id": 0,
      "plant_name": "Aglaonema",
      "plant_species": "Chinese Evergreen",
      "h2oFrequency": 21,
      "image_url": "https://www.ourhouseplants.com/imgs-content/Aglaonema-Chinese-Evergreen-Maria.jpg",
      "user_id": 0,
    },
  ]
```

### [GET] /api/plants/:plant_id

**_RESTRICTED ENDPOINT_**

- Get information for a specific plant
  - _requires valid token in authorization header to access_
  - _requires valid user_id in user_id header to access_

_What you receive:_

```json
    {
      "plant_id": 2,
      "plant_name": "Maranta leuconeura",
      "plant_species": "Lemon Lime",
      "h2oFrequency": 7,
      "image_url":
        "https://hometoheather.com/wp-content/uploads/2021/06/lemon-lime-prayer-plant-sm.jpg",
      "user_id": 1,
    }
   
```

### [POST] /api/plants

**_RESTRICTED ENDPOINT_**

- Add a plant (authenticated user)
  - _requires valid token in authorization header to send_
  - _requires valid user_id in user_id header to access_
  - _required information:_
    - _plant_name (string)_
    - _plant_species (string)_
    - _h2oFrequency (integer)_
  - _optional information:_
    - _image_url (string)_  

_What you send:_

```json
{
  "plant_name": "Garden Rose",
  "plant_species": "Ausmas",
  "h2oFrequency": 14,
  "image_url": "https://randomimagelink.com"
}
```

_What you receive:_

```json
{
   "plant_id": 3,
   "plant_name": "Garden Rose",
   "plant_species": "Ausmas",
   "h2oFrequency": 14,
   "image_url": "https://randomimagelink.com",
   "user_id": 1,
 }
```
### [PUT] /api/plants/:plant_id

**_RESTRICTED ENDPOINT_**

- Update an existing plant (authenticated user)
  - _requires valid token in authorization header to send_
  - _requires valid user_id in user_id header to send_
  - _required information:_
    - _plant_name (string)_
    - _plant_species (string)_
    - _h2oFrequency (integer)_
    - _image_url (string)_  

_What you send:_

```json
{
  "plant_name": "Garden Rose",
  "plant_species": "Ausmas",
  "h2oFrequency": 14,
  "image_url": "https://randomimagelink.com"
}
```

_What you receive:_

```json
{
  "plant_id": 3,
  "plant_name": "Garden Rose",
  "plant_species": "Ausmas",
  "h2oFrequency": 14,
  "image_url": "https://randomimagelink.com",
  "user_id": 1
}
```

### [DELETE] /api/plants/:plant_id

**_RESTRICTED ENDPOINT_**

- Delete an existing plant (authenticated instructor)
  - _requires valid token in authorization header to send_
  - _requires valid user_id in user_id header to send_
  - _required information:_
    - _plant_id (integer)_

_Nothing gets returned on successful deletion_

## Getting Started
To download all needed dependencies run:
```git
  npm install
```
We are using PostgreSQL to store our data here so we will need to set up a **.env file** and add other needed environment variables like so:
```
PORT=5000
JWT_SECRET='KEEP IT SECRET'
NODE_ENV=development
DEV_DATABASE_URL='postgresql://postgres:YOURPGSQLPASSWORD@localhost:PGSQLPORT/DATABASENAME'
TESTING_DATABASE_URL='postgresql://postgres:YOURPGSQLPASSWORD@localhost:PGSQLPORT/DATABASENAME_TEST'
```
If you plan on using Heroku to deploy your back-end, go to **package.json** and change four scripts to connect your Heroku app:

_Default, won't work_

```
    "migrateh": "heroku run knex migrate:latest -a build-week-water-my-plants-1",
    "rollbackh": "heroku run knex migrate:rollback -a build-week-water-my-plants-1",
    "databaseh": "heroku pg:psql -a build-week-water-my-plants-1",
    "seedh": "heroku run knex seed:run -a build-week-water-my-plants-1",
```

_Updated with your Heroku app's name_

```
    "migrateh": "heroku run knex migrate:latest -a HEROKU-APP-NAME",
    "rollbackh": "heroku run knex migrate:rollback -a HEROKU-APP-NAME",
    "databaseh": "heroku pg:psql -a HEROKU-APP-NAME",
    "seedh": "heroku run knex seed:run -a HEROKU-APP-NAME",
```

## Scripts
- **start**: Runs the app in production.
- **server**: Runs the app in development.
- **migrate**: Migrates the local development database to the latest.
- **rollback**: Rolls back migrations in the local development database.
- **seed**: Truncates all tables in the local development database, feel free to add more seed files.
- **test**: Runs tests.

**Heroku Scripts**

- **deploy**: Deploys the main branch to Heroku.
- **migrateh**: Migrates the Heroku database to the latest.
- **rollbackh**: Rolls back migrations in the Heroku database.
- **databaseh**: Interact with the Heroku database from the command line using psql.
- **seedh**: Runs all seeds in the Heroku database.
