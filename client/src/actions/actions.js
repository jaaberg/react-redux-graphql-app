var Constants = require('../constants/constants');

var Actions = {

  increaseCounter: function() {
    return {
      type: Constants.INCREASE_COUNTER
    };
  }

};

module.exports = Actions;
