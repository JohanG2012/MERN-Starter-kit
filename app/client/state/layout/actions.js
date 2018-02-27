import types from './types';

export const createFlash = (flashType, message) => ({ type: types.SHOW_FLASH, message, flashType });

export const collapseSidebar = () => ({ type: types.COLLAPSE_SIDEBAR });
