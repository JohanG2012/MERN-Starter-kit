import Client from '../../libs/Client';
import Auth from '../../libs/Auth';
import Jwt from '../../libs/JWT';
import types from './types';

/**
 * Action creator for loginIsLoading
 * @param  {boolean} bool isLoading? True/False
 * @return {object}      Action Object
 */
export const loginIsLoading = isLoading => ({
  type: types.LOGIN_IS_LOADING,
  isLoading
});

/**
 * Action Creator for loginHasError
 * @param  {boolean} hasError     hasError? True/False
 * @param  {string}  errorMessage Error Message
 * @return {objct}               Action Object
 */
export const loginHasError = (hasError, errorMessages) => ({
  type: types.LOGIN_HAS_ERROR,
  hasError,
  errorMessages
});

/**
 * isLogedIn Action Creator.
 * @param  {boolean}  isLoggedIn    isLoggedIn? True/False
 * @param  {string}  [username='']  Username
 * @param  {String}  [role='']      Role
 * @param  {String}  [jwt='']       JWT token
 */
export const isLogedIn = (isLoggedIn, username = '', jwt = '') => ({
  type: types.LOGEDIN_AS,
  isLoggedIn,
  username,
  jwt
});

/**
 * performLogin thunk. Performs async operations and dispatches actions
 * @param  {string} url    Login API URI
 * @param  {object} fields Object with form fields values
 */
export const performLogin = (url, fields) => async dispatch => {
  dispatch(loginHasError(false));
  dispatch(loginIsLoading(true));

  const result = await Client.POST(url, fields);

  if (result.status !== 200) {
    dispatch(loginHasError(true, result.errors));
  } else {
    Auth.authenticateUser(result.token);
    dispatch(loginIsLoading(false));

    const username = Jwt.getUsername(result.token);
    const jwt = result.token;

    dispatch(isLogedIn(true, username, jwt));
  }
};

export const performLogout = () => dispatch => {
  Auth.deauthenticateUser();
  dispatch(isLogedIn(false));
};

export const clearForm = () => dispatch => {
  dispatch(loginHasError(false, ''));
  dispatch(loginIsLoading(false));
};

export default {
  loginIsLoading,
  loginHasError,
  isLogedIn,
  performLogin,
  performLogout,
  clearForm
};
