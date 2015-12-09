import webpack from 'webpack';
import common from './webpack.common';
import path from 'path';

module.exports = {
  entry: {
    app: [
      './app/client/entry.js'
    ]
  },
  output: {
    ...common.output,
    publicPath: '/build/'
  },
  resolve: common.resolve,
  module: {
    loaders: [
      ...common.module.loaders,
      {
        test: /\.(js|jsx)$/,
        loaders: ['react-hot', 'babel'],
        include: [path.join(__dirname, '../app/client'), path.join(__dirname, './config')],
        exclude: [path.join(__dirname, '../node_modules'), path.join(__dirname, '../app/client/vendor')]
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
