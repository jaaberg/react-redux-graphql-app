const Constants = require('../constants/constants');

export function increaseCounter() {
  return {
    type: Constants.INCREASE_COUNTER,
  };
}

export function addTodo(text) {
  return {
    type: Constants.ADD_TODO,
    text: text
  };
}

export function completeTodo(id) {
  return {
    type: Constants.COMPLETE_TODO,
    id: id
  };
}
