export function addTodo(val){
  return dispatch => dispatch({
    type: 'ADDTODO',
    title: val
  });
}

export function toggleActive(id){
  return dispatch => dispatch({
    type: 'TOGGLEACTIVE',
    id: id
  });
}