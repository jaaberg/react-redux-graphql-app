var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');
var hbs = require('hbs');
var favicon = require('serve-favicon');

module.exports.configureExpress = function(options, app) {
  app.set('views', path.join(options.dir, '..', 'views'));
  app.set('view engine', 'hbs');

  app.use(favicon(path.join(options.dir, '..', 'client', 'public', 'favicon.ico')));
  app.use(options.logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(cookieParser());
  app.use(options.express.static(path.join(options.dir, '..', 'client', 'public')));
};
