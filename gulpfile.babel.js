import gulp from 'gulp';
import util from 'gulp-util';
import childProcess from 'child_process';
import del from 'del';
import webpack from 'webpack';
import gulpWebpack from 'gulp-webpack';
// import eslint from 'gulp-eslint';
// import plumber from 'gulp-plumber';
import notifier from 'node-notifier';
import path from 'path';
import run from 'run-sequence';
import colors from 'colors';
import WebpackDevServer from 'webpack-dev-server';
import webpackDevConfig from './webpack.dev.js';
import webpackProConfig from './webpack.pro.js';
import config from './config';

// dev core
import fs from 'fs';

const $ = require('gulp-load-plugins')();

// dev server
gulp.task('dev', ()=>{
  const compiler = webpack(webpackDevConfig);

  compiler.plugin('done', (stats) => {
    const statsStr = stats.toString();
    console.log(statsStr.substr(0, statsStr.indexOf('[rendered]')).green);
    run('lint');
  });
  compiler.plugin('failed', (err) => {
    console.log(err.red);
  });

  new WebpackDevServer( compiler, {
    contentBase: './',
    publicPath: webpackDevConfig.output.publicPath,
    hot: true,
    quiet: true,
    historyApiFallback: true,
    noInfo: false,
    inline: true,
    stats: {
      colors: true
    }
  }).listen(config.clientPort, config.host, (err, stats)=>{
    if (err) util.log(err);
    util.log(`webpack was listenning: http://${config.host}:${config.clientPort}`);
  });
});

gulp.task('lint', () => {
  return gulp.src(['./*.js', 'app/src/**/*.js', 'app/src/**/*.jsx', '!app/src/vendor/**/*'])
    .pipe($.eslint({
      globals: {
        'React': true,
        '$': true,
        'jQuery': true,
        'ReactDOM': true,
        'cx': true,
        'config': true
      }
    }))
    .pipe($.plumber({
      errorHandler(err) {
        const { fileName, lineNumber, message } = err;
        const relativeFilename = path.relative(process.cwd(), fileName);
        notifier.notify({
          title: 'ESLint Error',
          wait: true,
          message: `Line ${lineNumber}: ${message} (${relativeFilename})`
        }, (error, msg) => {
          if (msg.startsWith('Activate')) {
            childProcess.exec(`subl --command open_file ${fileName}:${lineNumber}`);
          }
        });
      }
    }))
    .pipe($.eslint.failOnError())
    .pipe($.eslint.formatEach());
});

// build
gulp.task('build', ['clean'], ()=>{
  gulp.src('src/app.js')
    .pipe(gulpWebpack(webpackProConfig))
    .pipe(gulp.dest('./build'));
});

// build on save
gulp.task('clean', () => {
  del('build');
});
