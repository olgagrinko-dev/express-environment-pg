const express = require('express');
const { getAllEnvironment,  getEnvironmentById} = require('../service/environment.service');

const route = express.Router();

route.get('/', async (request, response) => {
    const data = await getAllEnvironment()
    response.send(data);
});

route.get('/:id', async (request, response) => {
    const {id} = request.params;
    const data = await getEnvironmentById(id);
    response.send(data);
});




module.exports = route;