var Constants = require('../constants/constants');

var Actions = {

  increaseCounter: function() {
    return {
      type: Constants.INCREASE_COUNTER
    };
  },

  addTodo: function(text) {
    return {
      type: Constants.ADD_TODO,
      text: text
    }
  },

  completeTodo: function(id) {
    return {
      type: Constants.COMPLETE_TODO,
      id: id
    }
  }

};

module.exports = Actions;
