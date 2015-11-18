import webpack from 'webpack';
// import _ from 'lodash';
import common from './webpack.common';
import path from 'path';
// import config from './config';

module.exports = {
  entry: {
    app: [
      './app/src/entry.js'
    ]
  },
  output: {
    ...common.output,
    publicPath: '/assets/'
  },
  resolve: common.resolve,
  module: {
    loaders: [
      ...common.module.loaders,
      {
        test: /\.(js|jsx)$/,
        loaders: ['react-hot', 'babel'],
        include: [path.join(__dirname, 'app/src'), path.join(__dirname, './config')],
        exclude: [path.join(__dirname, 'node_modules'), path.join(__dirname, 'app/src/vendor')]
      }
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
