import { action } from 'typesafe-actions';
import { MenuActionTypes } from './types';

export const collapsedState = () => action(MenuActionTypes.COLLAPSED_STATE);
export const sideMenuModalState = () => action(MenuActionTypes.SIDEMENU_MODAL_STATE);
