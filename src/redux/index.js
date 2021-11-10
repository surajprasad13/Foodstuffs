import {applyMiddleware, createStore} from 'redux';

import thunk from 'redux-thunk';

import rootReducer from './reducer';

const initial_state = {};
const middleware = [thunk];

export default createStore(
  rootReducer,
  initial_state,
  applyMiddleware(...middleware),
);
