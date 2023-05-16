const { getAllEnvironmentDb, getEnvironmentByIdDb, createEnvironmentDb, upDataEnvironmentDb, deleteEnvironmentDb } = require('../repository/environment.repository')

async function getAllEnvironment() {    
    const data = await getAllEnvironmentDb();
    return data;
}

async function getEnvironmentById(id) {
    const data = await getEnvironmentByIdDb(id);
    return data;
}

async function createEnvironment(label, category, priority) {
    const data = await createEnvironmentDb(label, category, priority);
    return data;
}

async function upDataEnvironment(id, label, category, priority) {
    const data = await upDataEnvironmentDb(id, label, category, priority);
    return data;
}

async function deleteEnvironment(id) {
    const data = await deleteEnvironmentDb(id);
    return data;
}


module.exports = { getAllEnvironment, getEnvironmentById, createEnvironment, upDataEnvironment, deleteEnvironment };