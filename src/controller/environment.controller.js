const express = require('express');
const { getAllEnvironment, getEnvironmentById, createEnvironment, upDataEnvironment, deleteEnvironment } = require('../service/environment.service');
const { isValidEnvironmentId, isValidEnvironmentBody } = require('../helper/validation');
const { buildResponse } = require('../helper/buildResponse');

const route = express.Router();

route.get('/', async (request, response) => {
  try {
    const data = await getAllEnvironment();
    buildResponse(response, 200, data);
  } catch (error) {
    buildResponse(response, 404, error.message);
  }
});

route.get('/:id', isValidEnvironmentId, async (request, response) => {
  try {
    const { id } = request.params;
    const data = await getEnvironmentById(id);
    buildResponse(response, 200, data);
  } catch (error) {
    buildResponse(response, 404, error.message);
  }
});

route.post('/', isValidEnvironmentBody, async (request, response) => {
  try {
    const { label, category, priority } = request.body;
    const data = await createEnvironment(label, category, priority);
    buildResponse(response, 200, data);
  } catch (error) {
    buildResponse(response, 404, error.message);
  }
});

route.put('/:id', isValidEnvironmentId, isValidEnvironmentBody, async (request, response) => {
  try {
    const { id } = request.params;
    const { label, category, priority } = request.body;
    const data = await upDataEnvironment(id, label, category, priority);
    buildResponse(response, 200, data);
  } catch (error) {
    buildResponse(response, 404, error.message);
  }
});

route.delete('/:id', isValidEnvironmentId, async (request, response) => {
  try {
    const { id } = request.params;
    const data = await deleteEnvironment(id);
    buildResponse(response, 200, data);
  } catch (error) {
    buildResponse(response, 404, error.message);
  }
});

module.exports = route;
