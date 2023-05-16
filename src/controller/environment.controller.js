const express = require('express');
const { getAllEnvironment, getEnvironmentById, createEnvironment, upDataEnvironment, deleteEnvironment } = require('../service/environment.service');

const route = express.Router();

route.get('/', async (request, response) => {
    try {
        const data = await getAllEnvironment()
        response.status(200).send(data);
    } catch (error) {
        response.status(404).send(error.message);
    }
});

route.get('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const data = await getEnvironmentById(id);
        response.status(200).send(data);
    } catch (error) {
        response.status(404).send(error.message);
    }
});

route.post('/', async (request, response) => {
    try {
        const { label, category, priority } = request.body;
        const data = await createEnvironment(label, category, priority);
        response.status(200).send(data);
    } catch (error) {
        response.status(404).send(error.message);
    }
});

route.put('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const { label, category, priority } = request.body;
        const data = await upDataEnvironment(id, label, category, priority);
        response.status(200).send(data);
    } catch (error) {
        response.status(404).send(error.message);
    }
})

route.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const data = await deleteEnvironment(id);
        response.status(200).send(data);
    } catch (error) {
        response.status(404).send(error.message);
    }
})

module.exports = route;