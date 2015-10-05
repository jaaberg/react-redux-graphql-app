var Constants = require('../constants/constants');

var ActionCreators = {

  increaseCounter: function() {
    return {
      type: Constants.INCREASE_COUNTER
    };
  }

};

module.exports = ActionCreators;
