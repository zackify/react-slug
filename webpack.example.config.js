var path = require('path');
var fs = require('fs');

module.exports = {
  entry: ['./src/example.jsx'],

  output: {
    filename: 'example.js',
    path: path.join(__dirname, 'example'),
    publicPath: '../build/'
  },

  module: {
    loaders: [
      {test: /\.jsx$/, loader: 'jsx-loader?harmony'}
    ]
  }
};