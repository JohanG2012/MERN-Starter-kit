import Client from '../../libs/Client';
import types from './types';
import createFlash from '../layout';

/**
 * registerIsLoading Action Creator
 * @param  {boolean} isLoading isLoading? True/False
 * @return {object}            Action Object
 */
export const registerIsLoading = isLoading => ({
  type: types.REGISTER_IS_LOADING,
  isLoading
});

/**
 * registerHasError Action Creator
 * @param  {boolean} hasError     hasError? True/False
 * @param  {string}  errorMessage Error Message
 * @return {object}               Action Object
 */
export const registerHasError = (hasError, errorMessages) => ({
  type: types.REGISTER_HAS_ERROR,
  hasError,
  errorMessages
});

/**
 * registerPostDataSuccess Action Creator
 * @param  {boolean} isSuccess      isSuccess? True/False
 * @param  {string}  successMessage Success Message
 * @return {object}                 Action Object
 */
export const registerPostDataSuccess = (isSuccess, successMessage) => ({
  type: types.REGISTER_POST_DATA_SUCCESS,
  isSuccess,
  successMessage
});

/**
 * [clearForm description]
 * @return {[type]} [description]
 */
export const clearForm = () => dispatch => {
  dispatch(registerHasError(false, ''));
  dispatch(registerIsLoading(false));
  dispatch(registerPostDataSuccess(false, ''));
};

/**
 * [registerPostData description]
 * @param  {[type]} url    [description]
 * @param  {[type]} fields [description]
 * @return {[type]}        [description]
 */
export const registerPostData = (url, fields) => async dispatch => {
  dispatch(registerIsLoading(true));
  const result = await Client.POST(url, fields);

  if (!result.success) {
    dispatch(registerHasError(true, result.errors));
  } else {
    dispatch(registerIsLoading(false));
    dispatch(registerPostDataSuccess(true, 'success'));
  }
  return result;
};

export default {
  registerIsLoading,
  registerHasError,
  registerPostDataSuccess,
  registerPostData,
  clearForm
};
