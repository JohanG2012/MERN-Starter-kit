import { combineReducers } from 'redux';
import types from './types';

/**
 * registerIsLoading Reducer
 * @param  {boolean} [state=false] State
 * @param  {object}  action        Action Object
 * @return {object}                Updated State
 */
const registerIsLoading = (state = false, action) => {
  switch (action.type) {
    case types.REGISTER_IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
};

/**
 * registerHasError Reducer
 * @param  {boolean} [state=false] State
 * @param  {object}  action        Action Object
 * @return {object}                Updated State
 */
const registerHasError = (state = false, action) => {
  switch (action.type) {
    case types.REGISTER_HAS_ERROR:
      return {
        hasError: action.hasError,
        errorMessages: action.errorMessages
      };

    default:
      return state;
  }
};

/**
 * registerPostDataSuccess Reducer
 * @param  {boolean} [state=false] State
 * @param  {object}  action        Action Object
 * @return {object}                Updated State
 */
const registerPostDataSuccess = (state = false, action) => {
  switch (action.type) {
    case types.REGISTER_POST_DATA_SUCCESS:
      return {
        isSuccess: action.isSuccess,
        successMessage: action.successMessage
      };
    default:
      return state;
  }
};

const registerReducer = combineReducers({
  registerIsLoading,
  registerHasError,
  registerPostDataSuccess
});

export default registerReducer;
