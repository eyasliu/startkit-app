import gulp from 'gulp';
import util from 'gulp-util';
import {exec} from 'child_process';
import del from 'del';
import nodemon from 'nodemon';
import webpack from 'webpack';
import notifier from 'node-notifier';
import path from 'path';
import run from 'run-sequence';
import WebpackDevServer from 'webpack-dev-server';
import webpackDevConfig from './config/webpack.dev.js';
import webpackProConfig from './config/webpack.pro.js';
import config from './config/config';
import fs from 'fs';
import cheerio from 'cheerio';

const $ = require('gulp-load-plugins')();

// dev
gulp.task('dev', ['server', 'client'], () => {
  util.log('server is ok, you can dev now.');
});


// server auto reload
gulp.task('server', () => {
  const backendServer = nodemon({
    script: './app/server/app.js',
    ignore: [
      "./**/*"
    ]
  });

  gulp.watch(['./app/server/**/*.js', '!./app/server/node_modules/**/*'], () => {
    backendServer.restart();
  });

  // 不能同时执行两个 nodemon 任务，只能如此取巧
  exec('gulp mock', {}, (err, out) => {
    console.log(out);
  });
});

// client server
gulp.task('client', ()=>{
  const compiler = webpack(webpackDevConfig);
  compiler.plugin('done', (stats) => {
    run('lint');
  });

  new WebpackDevServer( compiler, {
    contentBase: './',
    publicPath: webpackDevConfig.output.publicPath,
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

// mock server 
gulp.task('mock', () => {
  const mockServer = nodemon({
    script: './mock/index.js',
    watch: ['./mock/**/*.js', '!./mock/node_modules/**/*'],
    ext: 'js'
  });
  
  gulp.watch(['./mock/**/*.js', '!./mock/node_modules/**/*'], () => {
    mockServer.restart();
  });
});

// console.log(notifier);
gulp.task('lint', () => {
  return gulp.src(['./*.js', 'app/client/**/*.js', 'app/client/**/*.jsx', '!app/client/vendor/**/*'])
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
        });
      }
    }))
    .pipe($.eslint.failOnError())
    .pipe($.eslint.formatEach());
});

// build
gulp.task('build', ['clean'], ()=>{
  const compiler = webpack(webpackProConfig, (err, stats) => {
    if(err){
      console.error(err);
    }else{
      console.log('build success!!!');
      setHash(stats.hash);
    }
  });
  // compiler.plugin('done', (err, stats) => {
  //   console.log(err,stats);
  // })
  // compiler.run()

  // gulp.src('app/client/app.js')
  //   .pipe(gulpWebpack(webpackProConfig))
  //   .pipe(gulp.dest('./build'));
});

// build on save
gulp.task('clean', () => {
  del('build');
});

gulp.task('hash', () => {
  setHash('testhash');
});

function setHash(hash){
  fs.readFile('./index.html', (err, data) => {
    const jQuery = cheerio.load(data.toString());
    const pathScript = '/build/app.js?hash=' + hash;
    jQuery('script').attr('src', pathScript);
    fs.writeFile('./index.html', jQuery.html(), fileErr => {
      if(fileErr){
        console.error(fileErr);
      }else{
        console.log('Hash set success: ', hash);
      }
    });
  });
}