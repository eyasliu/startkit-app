var webpack = require('webpack');
var _ = require('lodash');
var common = require('./webpack.common.js');
var path = require('path');
var config = require('./config')


module.exports = {
  entry: {
    note: [
      'webpack-dev-server/client?http://'+config.host+':'+config.clientPort,
      'webpack/hot/only-dev-server',
      './app/src/entry.js'
    ]
  },
  debug:true,
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    publicPath: 'http://'+config.host+':'+config.clientPort+'/build/'
  },
  resolve: common.resolve,
  module: {
    loaders: common.module.loaders.concat([
      {
        test: /\.(js|jsx)$/,
        loaders: ['react-hot-loader','babel-loader?stage=0'],
        include: path.join(__dirname, 'src'),
        exclude: [path.join(__dirname,'node_modules'),path.join(__dirname,'src/vendor')]
      }
    ])
  },
  plugins: common.plugins.concat([
    new webpack.HotModuleReplacementPlugin()
  ])
}
