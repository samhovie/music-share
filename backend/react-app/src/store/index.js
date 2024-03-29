import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session'
import songsReducer from './songs'
import playlistsReducer from './playlists';
import commentsReducer from './comments';
import likesReducer from './likes';
import usersReducer from './users';

const rootReducer = combineReducers({
  session,
  songs: songsReducer,
  playlists: playlistsReducer,
  comments: commentsReducer,
  users: usersReducer,
  likes: likesReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
