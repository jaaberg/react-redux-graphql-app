var express = require('express');
var logger = require('morgan');
var setup = require('./setup');

var app = express();

setup.configureExpress({
  express: express,
  logger: logger,
  dir: __dirname
}, app);

require('./routes')(app, express);

module.exports = app;
