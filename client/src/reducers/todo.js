import { ADD_TODO, COMPLETE_TODO } from '../constants/constants';

const initialState = {
  todos: [],
  id: 0,
};

function todoReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {id: state.id, text: action.text, completed: false};
      return Object.assign({}, state, state.id += 1, {todos: [...state.todos, newTodo]});

    case COMPLETE_TODO:
      const updatedTodos = state.todos.map(todo =>
          todo.id === action.id ?
            Object.assign({}, todo, {completed: !todo.completed}) :
            todo
      );
      return Object.assign({}, state, {todos: updatedTodos});

    default:
      return state;
  }
}

export default todoReducer;
