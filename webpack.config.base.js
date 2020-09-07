const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

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
        test: /\.scss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              // Prefer `dart-sass`
              implementation: require('dart-sass'),
            },
          },
        ],
      },
      {
        test: /\.less$/,
        loader: ["style-loader","css-loader","less-loader"]
      },
      {
        test: /\.styl$/,
        loader: ["style-loader","css-loader","stylus-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
          }
        ]
      }
    ]
  }
};

