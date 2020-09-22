import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { History } from 'history';
import { connectRouter, RouterState } from 'connected-react-router';
import { MenuState, menuReducer } from './menu';

import moviesSaga from './movies/sagas';
import { moviesReducer } from './movies/reducer';
import { MoviesState } from './movies/types';

// Top=level state
export interface IApplicationState {
  menu: MenuState;
  movies: MoviesState;
  router: RouterState;
}

export const createRootReducer = (history: History) => {
  return combineReducers({
    menu: menuReducer,
    movies: moviesReducer,
    router: connectRouter(history),
  });
};

export function* rootSaga() {
  yield all([fork(moviesSaga)]);
}
