module.exports = {
  entry: './client/src/js/index.js',
  output: {
    path: './client/public/javascripts',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' }
    ]
  }
};