import webpack from 'webpack'
import _ from 'lodash'
import common from './webpack.common'
import path from 'path'
import config from './config'

module.exports = {
  entry: {
    note: [
      'webpack-dev-server/client?http://'+config.host+':'+config.clientPort,
      'webpack/hot/only-dev-server',
      './app/src/entry.js'
    ]
  },
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
        loaders: ['react-hot','babel?presets[]=react,presets[]=stage-0'],
        include: path.join(__dirname, 'app/src'),
        exclude: [path.join(__dirname,'node_modules'),path.join(__dirname,'app/src/vendor')]
      }
    ])
  },
  plugins: common.plugins.concat([
    new webpack.HotModuleReplacementPlugin()
  ])
}
