var webpack = require('webpack');
var _ = require('lodash');
var common = require('./webpack.common.js');
var path = require('path');
var config = require('./config')

module.exports = {
  entry: {
    note: [
      './src/app.js'
    ]
  },
  output: _.assign(common.output,{
    publicPath: '/assets/',
  }),
  resolve: common.resolve,
  module: {
    loaders: common.module.loaders.concat([
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel-loader?stage=0'],
        include: path.join(__dirname, 'src'),
        exclude: [path.join(__dirname,'node_modules'),path.join(__dirname,'src/vendor')]
      }
    ])
  },
  plugins: common.plugins.concat([
    
  ]) 
}