import Server from 'ohana';
global.Mock = require('mockjs');
global.server = new Server({
  parser: Mock.mock
})

// 这里如果用 import 语法会报错
require('./globals');

// 启动模拟数据服务
server.start(3001, '0.0.0.0');