require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.HOST,
    "port": process.env.DB_PORT,
    "dialect": process.env.DIALECT
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.HOST,
    "port": process.env.DB_PORT,
    "dialect": process.env.DIALECT
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.HOST,
    "port": process.env.DB_PORT,
    "dialect": process.env.DIALECT
  }
}
