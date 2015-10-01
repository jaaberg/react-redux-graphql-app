var webpack = require('webpack');
var path = require('path');

// Creates a shared file that has common code between pages
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
  entry: {
    index: [
      'webpack-dev-server/client?http://0.0.0.0:3001',
      'webpack/hot/only-dev-server',
      path.join(__dirname, '/client/src/js/index.js')
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, loader: 'react-hot-loader!babel-loader', exclude: /node_modules/},
      {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}, // use ! to chain loaders
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'} // inline base64 for <=8k images, direct URLs for the rest
    ]
  },
  output: {
    path: path.join(__dirname, '/client/public/js'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.json'] // you can now require('file') instead of require('file.coffee')
  }
};