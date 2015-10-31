var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('../webpack.config.js');

exports = module.exports = function() {
  new WebpackDevServer(webpack(config), {
    hot: true,
    historyApiFallback: true,
    proxy: {
      '*': 'http://localhost:3000'
    },
  }).listen(3001, 'localhost', function(err, result) {
      if (err) {
        console.log(err);
      }

      console.log('Listening at localhost:3001');
    });
};
