'use strict';

const express = require('express');
const notFound = require('./src/error-handlers/404');
const errorHandler = require('./src/error-handlers/500');
const logger = require('./src/middleware/logger');
const validator = require('./src/middleware/validator');

const PORT = process.env.PORT || 3002;

const app = express();

app.use(logger);

app.get('/', (req, res, next) => {
  res.status(200).send({status: 'ok'});
});

app.get('/person', validator, (req, res, next) => {
  let { name } = req.query;
  res.status(200).send({ name: `${name}`});
});

app.use('*', notFound);

app.use(errorHandler);

function start(){
  app.listen(PORT, () => console.log(`listening on port ${PORT}`));
}

start();

module.exports = { start };
