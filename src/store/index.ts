import { combineReducers } from 'redux';

import { MenuState, menuReducer } from './menu';

// Top=level state
export interface RootAppState {
  menu: MenuState;
}

export const createRootReducer = () => {
  return combineReducers({
    menu: menuReducer,
  });
};
