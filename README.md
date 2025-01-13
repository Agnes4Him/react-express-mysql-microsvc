# react-express-mysql-microsvc

A microservices applications consisting of a UI built with ReactJS, backend built with ExpressJS, and a MySQL database service.

Any database service can be used.

Ensure to add a .env file to the root of `server` microservice and add the following details:

DB_HOST=<database_url>
DB_USER=<database_user>
DB_PASSWORD=<database_password>
DB_DATABASE=<database_name>

Also add .env file to the root of `client` microservice and add:

REACT_APP_BACKEND_URL=<your_backend_url>
