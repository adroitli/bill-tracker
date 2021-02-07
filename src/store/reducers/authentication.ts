// import { actionTypes } from '../actions/actionTypes';
import { IActionType } from '../../types/generic';

interface IAuthenticationReducerModel {
  isAuthenticated: boolean | null;
  user: {email: string; password: string;}  | null;
}

const initialState: IAuthenticationReducerModel = {
  isAuthenticated: false,
  user: null
}

const authReducer = (state: IAuthenticationReducerModel = initialState, action: IActionType) => {
  switch (action.type) {
    // case actionTypes.AUTHENTICATE:
    case "AUTHENTICATE":
      return {
        ...state,
        isAuthenticated: true,
        user: {...action.payload}
      }
    // case actionTypes.UNAUTHENTICATE: {
    case "UNAUTHENTICATE": {
      return {
        ...state,
        isAuthenticated: false,
        user: initialState.user
      }
    }
    default:
      break;
  }
  return state;
}

export default authReducer;