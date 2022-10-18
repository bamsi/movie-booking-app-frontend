import {
  combineReducers,
  applyMiddleware,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import authentication from './authentication/authentication';
import movies from './movie/movies';

const rootReducer = combineReducers({ authentication, movies });

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
