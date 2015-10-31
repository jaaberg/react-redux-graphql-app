import { INCREASE_COUNTER } from '../constants/constants';

const initialState = {
  count: 0
};

function counterReducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREASE_COUNTER:
      return Object.assign({}, state, {count: state.count + 1});
    default:
      return state;
  }
}

export default counterReducer;
