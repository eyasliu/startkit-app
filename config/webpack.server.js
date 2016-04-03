import webpack from 'webpack';
import common from './webpack.common';
import path from 'path';
// import config from './config';
import fs from 'fs';

const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(x => ['.bin'].indexOf(x) === -1)
  .forEach(mod => nodeModules[mod] = 'commonjs '+ mod)

const webpackConfig = {
  
  entry: {
    server: [
      './app/server/main.js'
    ]
  },
  target: 'node',
  node: {
    __dirname: 'mock',
    __filename: 'mock'
  },
  resolve: {
    alias: {
      server: path.join(__dirname, '../app/server'),
      static: path.join(__dirname, '../app/static'),
    }
  },
  externals: nodeModules,
  output: {
    path: path.join(__dirname, '../build'),
    filename: '[name].js',
    publicPath: `/build/`,
    // libraryTarget: "commonjs2"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel'
      }, {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"'+process.env.NODE_ENV+'"'
    }),
  ]
};

if(process.env.NODE_ENV == 'production'){
  webpackConfig.devtool = false;
  webpackConfig.plugins = [
    ...webpackConfig.plugins,
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      comments: false
    })
  ]
}


export default webpackConfig;