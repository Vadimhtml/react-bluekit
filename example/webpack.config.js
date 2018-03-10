const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot-loader', 'babel-loader'],
        include: [path.join(__dirname, 'src'), path.join(__dirname, '..', 'src'), path.join(__dirname, '..', 'example_components')]
      },
      {
        test: /\.tsx$/,
        loaders: ['react-hot-loader', 'ts-loader'],
        include: [path.join(__dirname, 'src'), path.join(__dirname, '..', 'src'), path.join(__dirname, '..', 'example_components')]
      }
    ]
  }
};
