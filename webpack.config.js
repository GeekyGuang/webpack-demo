const HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    // path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Custom template',
      // Load a custom template (lodash by default)
      template: 'src/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  }
};
