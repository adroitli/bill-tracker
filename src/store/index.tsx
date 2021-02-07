import thunk from 'redux-thunk';
import { IActionType } from '../types/generic';
import authReducer from './reducers/authentication';

import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
// import { actionTypes } from './actions/actionTypes';

const appReducers = combineReducers({
  authReducer: authReducer,
});

const log = (leading:any, value:any) => {
  if(process.env.REACT_APP_CURRENT_ENV === 'development'){
    console.log(leading, value);
  }
}

const rootReducer = (state: any, action: IActionType) => {
  // if (action.type === actionTypes.UNAUTHENTICATE) {
  //   state = undefined
  // }
  return appReducers(state, action);
};

const logger = (store: any) => {
  return (next: any) => {
    return (action:any) => {
      log('[MIDDLEWARE] Dispatching', action);
      const result = next(action);
      log("[MIDDLEWARE] Next State", store.getState());
      return result;
    };
  };
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

export default store;