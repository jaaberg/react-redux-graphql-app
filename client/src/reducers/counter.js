var Constants = require('../constants/constants');

function counterReducer(state, action) {

  if (typeof state === 'undefined') {
    state = {count: 0};
  }

  switch (action.type) {
    case Constants.INCREASE_COUNTER:
      return Object.assign({}, state, {count: state.count + 1});
    default:
      return state;
  }

}

export default counterReducer;