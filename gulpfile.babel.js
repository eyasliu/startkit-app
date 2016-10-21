import gulp from 'gulp';
import util from 'gulp-util';
import eslint from 'gulp-eslint';
import del from 'del';
import webpack from 'webpack';
import run from 'run-sequence';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './config/webpack.config.js';
import config from './config/config';


// dev server
gulp.task('dev', ()=>{
  const compiler = webpack(webpackConfig);

  compiler.plugin('done', (stats) => {
    run('lint');
  });

  new WebpackDevServer( compiler, {
    contentBase: './',
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    quiet: false,
    historyApiFallback: true,
    noInfo: false,
    inline: true,
    stats: {
      colors: true,
      chunks: false
    }
  }).listen(config.clientPort, config.host, (err, stats)=>{
    if (err) util.log(err);
    util.log(`webpack was listenning: http://${config.host}:${config.clientPort}`);
  });
});

gulp.task('lint', () => {
  return gulp.src(['./*.js', 'app/src/**/*.js', 'app/src/**/*.jsx', '!app/src/vendor/**/*'])
    .pipe(eslint())
    .pipe(eslint.formatEach());
});

// build
gulp.task('build', ['clean'], ()=>{
  webpack(webpackConfig, (err, stats) => {
    console.log(stats.toString({
      chunks: false,
      colors: true
    }));
  });
});

// build on save
gulp.task('clean', () => {
  del('build');
});
