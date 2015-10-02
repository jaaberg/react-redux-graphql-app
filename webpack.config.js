const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    index: [
      'webpack-dev-server/client?http://0.0.0.0:3001',
      'webpack/hot/only-dev-server',
      path.join(__dirname, '/client/src/components/routes.js')
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      {test: /\.js$/, loader: 'react-hot-loader!babel-loader?stage=0', exclude: /node_modules/},
      {test: /\.scss$/, loader: 'style!css!autoprefixer-loader?browsers=last 2 versions!sass'},
      {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'} // inline base64 for <=8k images, direct URLs for the rest
    ]
  },
  output: {
    path: path.join(__dirname, '/client/public/js'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.json', '.scss'] // you can now require('file') instead of require('file.coffee')
  }
};