export enum MenuActionTypes {
  COLLAPSED_STATE = 'COLLAPSED_STATE',
  SIDEMENU_MODAL_STATE = 'SIDEMENU_MODAL_STATE',
}

export interface MenuState {
  readonly collapsedState: boolean;
  readonly sideMenuModalState: boolean;
}
