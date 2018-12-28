import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

const initialState = {}; // default or initial state of the application

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(logger, thunk))
);

export default store;
