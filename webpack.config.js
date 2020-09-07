const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const base = require('./webpack.config.base')

module.exports = {
  ...base,
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
    ],
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: './dist',
  }
};

