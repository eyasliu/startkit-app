import webpack from 'webpack';
import common from './webpack.common';
import path from 'path';
import config from './config';

module.exports = {
  
  entry: {
    client: [
      `webpack-dev-server/client?http://${config.host}:${config.clientPort}`,
      'webpack/hot/only-dev-server',
      './app/client/entry.js'
    ]
  },
  output: {
    path: path.join(__dirname, '../public/assets'),
    filename: '[name].js',
  },
  resolve: common.resolve,
  module: {
    loaders: [
      ...common.module.loaders,
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel'],
        include: [path.join(__dirname, '../app/client'), path.join(__dirname, 'config')],
        exclude: [path.join(__dirname, '../node_modules'), path.join(__dirname, '../app/client/vendor')]
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    ...common.plugins,
    new webpack.HotModuleReplacementPlugin()
  ]
};
