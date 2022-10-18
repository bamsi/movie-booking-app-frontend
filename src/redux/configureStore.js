import {
  combineReducers,
  applyMiddleware,
  legacy_createStore as createStore,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import authentication from './authentication/authentication';
import movies from './movie/movies';
import categories from './category/categories';
import genres from './genre/genres';

const rootReducer = combineReducers({
  authentication,
  movies,
  categories,
  genres,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
