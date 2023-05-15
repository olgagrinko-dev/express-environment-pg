const { pool } = require('../db');

async function getAllEnvironmentDb() {
    const client = await pool.connect();
    const sql = 'select * from environment';
    const result = (await client.query(sql)).rows;
    return result;
}

async function getEnvironmentByIdDb(id) {
    const client = await pool.connect();
    const sql = 'select * from environment where id = $1';
    const result = (await client.query(sql, [id])).rows;
    return result;
}

async function createEnvironmentDb(label, category, priority) {
    const client = await pool.connect();
    const sql = 'insert into environment (label, category, priority) values ($1, $2, $3) returning *';
    const result = (await client.query(sql, [label, category, priority])).rows;
    return result;
}

async function upDataEnvironmentDb(id, label, category, priority) {
    const client = await pool.connect();
    const sql = 'update environment set label = $1, category = $2, priority = $3 where id = $4 returning *';
    const result = (await client.query(sql, [label, category, priority, id])).rows;
    return result;
}

async function deleteEnvironmentDb(id) {
    const client = await pool.connect();
    const sql = 'delete from environment where id = $1 returning *';
    const result = (await client.query(sql, [id])).rows;
    return result;
}


module.exports = { getAllEnvironmentDb, getEnvironmentByIdDb, createEnvironmentDb, upDataEnvironmentDb, deleteEnvironmentDb };
