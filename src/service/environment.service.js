const { getAllEnvironmentDb } = require('../repository/environment.repository')

async function getAllEnvironment() {
    const data = await getAllEnvironmentDb();
    return data;
}

module.exports = { getAllEnvironment };