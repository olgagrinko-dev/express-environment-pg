const { pool } = require('../db');

async function getAllEnvironmentDb() {
    const client = await pool.connect();
    const sql = 'select * from environment';
    const result = (await client.query(sql)).rows;
    return result;
}

async function getEnvironmentByIdDb() {
    const client = await pool.connect();
    const sql = 'select * from environment';
    const result = (await client.query(sql)).rows;
    return result;
}


module.exports = {getAllEnvironmentDb, getEnvironmentByIdDb};
