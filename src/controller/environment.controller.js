const express = require('express');
const { getAllEnvironment } = require('../service/environment.service');

const route = express.Router();

route.get('/', async (request, response) => {
    const data = await getAllEnvironment()
    response.send(data);
});


module.exports = route;