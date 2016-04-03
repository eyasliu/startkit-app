import webpack from 'webpack';
import common from './webpack.common';
import path from 'path';

module.exports = {
  entry: {
    client: [
      './app/client/entry.js'
    ]
  },
  output: {
    ...common.output
  },
  resolve: common.resolve,
  module: {
    loaders: [
      ...common.module.loaders,
    ]
  },
  plugins: [
    ...common.plugins,
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      comments: false
    })
  ]
};
