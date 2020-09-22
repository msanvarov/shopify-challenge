export enum MenuActionTypes {
  COLLAPSED_STATE = '@@menu/COLLAPSED_STATE',
  SIDEMENU_MODAL_STATE = '@@menu/SIDEMENU_MODAL_STATE',
}

export interface MenuState {
  readonly collapsedState: boolean;
  readonly sideMenuModalState: boolean;
}
