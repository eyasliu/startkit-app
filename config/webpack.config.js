import webpack from 'webpack';
import path from 'path';
import config from './config'

const isDev = process.env.NODE_ENV === 'development'
const webpackConfig = {
  entry: {
    app: [
      './app/client/entry.js'
    ]
  },
  resolve: {
    root: path.join(__dirname, 'src/vendor'),
    extensions: ['', '.js', '.jsx', '.css', '.scss'],
    alias: {
      src: path.join(__dirname, '../app/client'),
      vendor: path.join(__dirname, '../app/client/vendor'),
      common: path.join(__dirname, '../app/client/common'),
      modules: path.join(__dirname, '../app/client/modules'),
      utils: path.join(__dirname, '../app/client/utils'),
      framework: path.join(__dirname, '../app/client/modules/framework'),
      example: path.join(__dirname, '../app/client/modules/example')
    }
  },
  devtool: isDev ? 'source-map' : false,
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    publicPath: isDev ? `http://${config.host}:${config.clientPort}/build/` : '/build/'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel'],
        include: [path.join(__dirname, '../app/client'), path.join(__dirname, 'config')],
        exclude: [path.join(__dirname, '../node_modules'), path.join(__dirname, '../app/client/vendor')]
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=2&localIdentName=[local]!postcss-loader'
      }, {
        test: /\.(sass|scss)$/,
        loader: 'style-loader!css-loader?modules&importLoaders=2&localIdentName=[local]___[hash:base64:5]!postcss-loader',
        exclude: [path.join(__dirname, '../app/client/common/style')]
      }, {
        test: /\.(sass|scss)$/,
        loader: 'style-loader!css-loader!postcss-loader',
        include: [path.join(__dirname, '../app/client/common/style')]
      }, {
        test: /\.less$/,
        loader: 'style-loader!css-loader!postcss-loader!less-loader'
      }, {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader?limit=8192&name=resource/img/[hash].[ext]'
      }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&name=resource/font/[hash].[ext]&minetype=application/font-woff'
      }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader?name=resource/font/[hash].[ext]'
      }
    ]
  },
  postcss: [
    require('precss')
  ],
  plugins: [
    new webpack.NoErrorsPlugin(),
    // 打包公共库
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'vendor',
    //   filename: 'vendor.js'
    // }),
    // bower 文件
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    ),
    // 全局变量
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      React: 'react',
      ReactDOM: 'react-dom',
      cx: 'classname',
      config: path.join(__dirname, './config')
    })
  // css 文件单独打包
  // new ExtractTextPlugin('style.css', {
  //     allChunks: true
  // }),
  ]
};


if(isDev){
  webpackConfig.entry.app.unshift(
    `webpack-dev-server/client?http://${config.host}:${config.clientPort}`,
    'webpack/hot/only-dev-server',
  )
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  )
}

export default webpackConfig;
