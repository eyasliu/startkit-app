import 'babel-polyfill';
import koa from 'koa';
import staticFile from './static';
import assets from './assets';

const app = koa();
app.use(assets);
app.use(staticFile);
app.use(function *hello(){
  this.body = 'hellogfdgf';
})

app.listen(3000);