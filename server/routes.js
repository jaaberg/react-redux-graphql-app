var path = require('path');

exports = module.exports = function(app, express) {
  var router = express();

  router.get('/', function(req, res) {
    res.render('index', {
      title: 'Express'
    });
  });

  router.get('*', function(req, res) {
    res.status(404).end();
  });

  app.use(router);
};
