import server from 'koa-static';
import path from 'path';

const assetsPath = path.resolve('public');
console.log('assetsPath:' + assetsPath);
export default server(assetsPath);