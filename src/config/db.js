const { Pool } = require('pg');

module.exports = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: "localhost",
  port: 5432,
  database: "foodfy"
});