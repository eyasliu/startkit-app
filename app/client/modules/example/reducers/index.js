const constant  = Constant('example');
const initState = {
  list: [
    {
      id: 1,
      title: 'read book0',
      isActive: true,
    }, {
      id: 2,
      title: 'read book1',
      isActive: false,
    }, {
      id: 3,
      title: 'read book2',
      isActive: true,
    }, {
      id: 4,
      title: 'read book3',
      isActive: true,
    }
  ]
};

export default function example(state = initState, action) {
  switch(action.type){
    case 'ADDTODO':
      const newTodo = {
        title: action.title,
        isActive: false
      };
      return {
        list: [
          ...state.list,
          newTodo
        ]
      };
    case 'TOGGLEACTIVE':
      const item = _.find(state.list, todo => todo.id == action.id);
      item.isActive = !item.isActive;
      return {
        list: [
          ...state.list
        ]
      };
    default:
      return state;
  }
}