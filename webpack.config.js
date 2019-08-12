'use strict';

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve('./src/index.js'),
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve('./dist'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
    }),
  ],
};
