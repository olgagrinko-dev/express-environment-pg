const express = require('express');
const { getAllEnvironment, getEnvironmentById, createEnvironment, upDataEnvironment, deleteEnvironment } = require('../service/environment.service');

const route = express.Router();

route.get('/', async (request, response) => {
    const data = await getAllEnvironment()
    response.send(data);
});

route.get('/:id', async (request, response) => {
    const { id } = request.params;
    const data = await getEnvironmentById(id);
    response.send(data);
});

route.post('/', async (request, response) => {
    const { label, category, priority } = request.body;
    const data = await createEnvironment(label, category, priority);
    response.send(data);
});

route.put('/:id', async (request, response) => {
    const {id} = request.params;
    const { label, category, priority } = request.body;
    const data = await upDataEnvironment(id, label, category, priority);
    response.send(data);
})

route.delete('/:id', async (request, response) => {
    const {id} = request.params;
    const data = await deleteEnvironment(id);
    response.send(data);
})

module.exports = route;