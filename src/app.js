const express = require('express');
const route = require('./controller/environment.controller');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use('/environment', route);
app.use((error, request, response, _next) => response.send(error.message));

module.exports = app;
