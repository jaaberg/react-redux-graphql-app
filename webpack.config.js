var webpack = require('webpack');

// Creates a shared file that has common code between pages
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
  entry: {
    index: './client/src/js/index.js'
  },
  output: {
    path: './client/public/js',
    filename: '[name].js'
  },
  plugins: [commonsPlugin],
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel-loader'},
      {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'}, // use ! to chain loaders
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'} // inline base64 for <=8k images, direct URLs for the rest
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json'] // you can now require('file') instead of require('file.coffee')
  }
};