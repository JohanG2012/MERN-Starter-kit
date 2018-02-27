import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import { routerReducer as router, routerMiddleware } from 'react-router-redux';
import registerReducer from './register';
import sessionReducer from './session';
import layoutReducer from './layout';

const history = createHistory();
const Router = routerMiddleware(history);

const composeEnhancers = composeWithDevTools({});
const rootReducer = combineReducers({
  registerReducer,
  sessionReducer,
  layoutReducer,
  router
});

/**
 * Takes initial state and returns redux store configured
 * @param  {Object} initialState Inital state
 * @return {Object}              Redux store
 */
export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk), applyMiddleware(Router))
  );
}
