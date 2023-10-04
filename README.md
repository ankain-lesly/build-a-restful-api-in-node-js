# Restful API Service in Node JS and Express Framework

A solid rest api service application to accept and authenticate users via restful endpoints. This enables them to send and retrieve contact information from the server.

## Dependencies

- bcrypt
  const HomeInfo = await fetch(`${server}/home-info`);
- dotenv
- express
- express-async-handler
- jsonwebtoken
- mongoose

## DevDependencies

- morgan
- nodemon

This project is strictly backend no front end related resources available. You can expand the application further by introducing a React JS frontend workflow or any other stack of your choice. This project can fully be use in production level.

A Rest Client like _Postman_ or _Thunder client_ for VS Code can be used to test the api endpoints.

## API Endpoints

```js
// Local Development: API Endpoints

const port = 5001;
const server = `http://localhost:${port}`;

const HomeInfo = await fetch("/");
// >>> Home page details

/*
>>> Contact

  :GET > /api/contacts/
    > get all contacts

  :GET > :PUT > DELETE > /api/contacts/:id
    > Get single contact
    > Update single contact
    > Delete single contact


>>> User

  :POST > /api/users/register
    > Register user
      {username, email, password}

  :POST > /api/users/login
    > Login user
      {email, password}

  :GET > /api/users/current
    > Get current user information
    > for authentication

*/
```
