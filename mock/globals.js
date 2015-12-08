server.get('/globals/info', {
  data: (params, query) => {
    console.log(params, query);
    return {
      "data":{
        "info": {
          "title": 'Startkit App',
          "description": 'this is a react + webpack + gulp [+ redux ][ + mock server ][ + sails]',
          "footer": 'Power by React. Built & Design by Eyas'
        }
      }
    };
  }
})