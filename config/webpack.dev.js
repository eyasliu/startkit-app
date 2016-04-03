import webpack from 'webpack';
import common from './webpack.common';
import path from 'path';
import config from './config';

module.exports = {
  
  entry: {
    client: [
      `webpack-dev-server/client?http://localhost:3000`,
      'webpack/hot/only-dev-server',
      './app/client/entry.js'
    ]
  },
  output: {
    ...common.output,
    publicPath: `http://${config.host}:${config.clientPort}${common.output.publicPath}`
  },
  resolve: common.resolve,
  module: {
    loaders: [
      ...common.module.loaders,
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    ...common.plugins,
  ]
};
