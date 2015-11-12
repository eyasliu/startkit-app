import gulp from 'gulp'
import util from 'gulp-util'
import webpack from 'webpack'
import gulpWebpack from 'gulp-webpack'
import webpackDevServer from 'webpack-dev-server'
import webpackDevConfig from './webpack.dev.js'
import webpackProConfig from './webpack.pro.js'
import config from './config'

// dev server
gulp.task('dev',()=>{
  var compiler = webpack(webpackDevConfig);
  new webpackDevServer(compiler, {
    contentBase: './app',
    publicPath: webpackDevConfig.output.publicPath,
    hot: true,
    quiet: true,
    // historyApiFallback: true,
    noInfo: true,
    inline:true,
    stats: {
      colors: true
    }
  }).listen(config.clientPort, config.host, (err)=>{
    if (err) util.log(err);
    util.log('webpack was listenning: http://'+config.host+':'+config.clientPort)
  })
})


// build
gulp.task('build',()=>{
  gulp.src('src/app.js')
    .pipe(gulpWebpack(webpackProConfig))
    .pipe(gulp.dest('./build'))
})

// build on save
gulp.task('proDev',()=>{
  gulp.watch('./src/**/*',['build']);
})
