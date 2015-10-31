import { compose, createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistState } from 'redux-devtools';
const DevTools = require('../containers/DevTools');

const reducer = combineReducers({
  counter: require('./counter'),
  todo: require('./todo')
});

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk),
  DevTools.instrument(),
  persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore);

const store = createStoreWithMiddleware(reducer);

export default store;
