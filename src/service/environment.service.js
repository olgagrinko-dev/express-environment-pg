const {
  getAllEnvironmentDb,
  getEnvironmentByIdDb,
  createEnvironmentDb,
  upDataEnvironmentDb,
  deleteEnvironmentDb,
} = require('../repository/environment.repository');

async function getAllEnvironment() {
  const data = await getAllEnvironmentDb();
  if (data.length == 0) throw new Error('Массив data пустой');
  return data;
}

async function getEnvironmentById(id) {
  const data = await getEnvironmentByIdDb(id);
  if (data.length == 0) throw new Error('Такого id нет');
  return data;
}

async function createEnvironment(label, category, priority) {
  const data = await createEnvironmentDb(label, category, priority);
  if (data.length == 0) throw new Error('Данные не сохранены');
  return data;
}

async function upDataEnvironment(id, label, category, priority) {
  const data = await upDataEnvironmentDb(id, label, category, priority);
  if (data.length == 0) throw new Error('Такого id нет');
  return data;
}

async function deleteEnvironment(id) {
  const data = await deleteEnvironmentDb(id);
  if (data.length == 0) throw new Error('Такого id нет');
  return data;
}

module.exports = { getAllEnvironment, getEnvironmentById, createEnvironment, upDataEnvironment, deleteEnvironment };
