import { combineReducers } from 'redux';
//  import CONSTANTS from "./constants";
import types from './types';

const loginIsLoading = (state = false, action) => {
  switch (action.type) {
    case types.LOGIN_IS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
};

const loginHasError = (state = {}, action) => {
  switch (action.type) {
    case types.LOGIN_HAS_ERROR:
      return {
        hasError: action.hasError,
        errorMessages: action.errorMessages
      };

    default:
      return state;
  }
};

const loggedInAs = (state = { isLoggedIn: false, jwt: '' }, action) => {
  switch (action.type) {
    case types.LOGEDIN_AS:
      return {
        ...state,
        isLoggedIn: action.isLoggedIn,
        username: action.username,
        jwt: action.jwt
      };

    default:
      return state;
  }
};

const sessionReducer = combineReducers({
  loginIsLoading,
  loginHasError,
  loggedInAs
});

export default sessionReducer;
