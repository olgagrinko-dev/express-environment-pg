const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'skills',
  password: 'pozdeeva1709)',
  port: '5432',
});

module.exports = { pool };
