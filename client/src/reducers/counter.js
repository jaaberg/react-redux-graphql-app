import { INCREASE_COUNTER } from '../constants/constants';

function counterReducer(state, action) {

  if (typeof state === 'undefined') {
    state = {count: 0};
  }

  switch (action.type) {
    case INCREASE_COUNTER:
      return Object.assign({}, state, {count: state.count + 1});
    default:
      return state;
  }

}

export default counterReducer;