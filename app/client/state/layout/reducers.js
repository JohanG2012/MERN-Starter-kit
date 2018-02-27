import { combineReducers } from 'redux';
import types from './types';

/**
 * createFlash Reducer
 * @param  {object} [state={}] State
 * @param  {object} action     Action Object
 * @return {object}            Updated State
 */
const createFlash = (state = {}, action) => {
  switch (action.type) {
    case types.SHOW_FLASH:
      return {
        flashType: action.flashType,
        message: action.message
      };

    default:
      return state;
  }
};

/**
 * collapseSidebar Reducer
 * @param  {boolean} [state=false] State
 * @param  {object}  action        Action Object
 * @return {object}                Updated State
 */
const collapseSidebar = (state = false, action) => {
  switch (action.type) {
    case types.COLLAPSE_SIDEBAR:
      return !state;
    default:
      return state;
  }
};

const layoutReducer = combineReducers({
  createFlash,
  collapseSidebar
});

export default layoutReducer;
