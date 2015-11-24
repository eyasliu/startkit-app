server.get('/globals/info', {
  data: (params, query) => {
    console.log(params, query);
    return {
      "data":{
        "info": {
          "title": 'Startkit App',
          "description": '这是一个模拟数据接口，用于开发时随机生成模拟数据'
        }
      }
    };
  }
})