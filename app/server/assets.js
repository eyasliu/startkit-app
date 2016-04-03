import server from 'koa-static';
import path from 'path';

const assetsPath = path.resolve('public');

export default server(assetsPath);