var path = require('path');
var fs = require('fs');

module.exports = {
  entry: ['./src/react-slug.jsx'],

  output: {
    filename: 'react-slug.js',
    path: path.join(__dirname, 'build'),
    publicPath: '../build/'
  },

  module: {
    loaders: [
      {test: /\.jsx$/, loader: 'jsx-loader?harmony'}
    ]
  }
};