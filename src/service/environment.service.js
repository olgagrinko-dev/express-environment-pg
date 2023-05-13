const { getAllEnvironmentDb, getEnvironmentByIdDb } = require('../repository/environment.repository')

async function getAllEnvironment() {
    const data = await getAllEnvironmentDb();
    return data;
}

async function getEnvironmentById(id) {  
    const filtered = await array.filtered((elem) => elem.id == id);
    return filtered;
}

module.exports = { getAllEnvironment, getEnvironmentById };