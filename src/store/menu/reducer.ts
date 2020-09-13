import { Reducer } from 'redux';
import { MenuState, MenuActionTypes } from './types';

// Type-safe startingState!
export const startingState: MenuState = {
  collapsedState: true,
  sideMenuModalState: false,
};

const reducer: Reducer<MenuState> = (state = startingState, action) => {
  switch (action.type) {
    case MenuActionTypes.COLLAPSED_STATE: {
      return { ...state, collapsedState: !state.collapsedState };
    }
    case MenuActionTypes.SIDEMENU_MODAL_STATE: {
      return { ...state, sideMenuModalState: !state.sideMenuModalState };
    }
    default: {
      return state;
    }
  }
};

export { reducer as menuReducer };
