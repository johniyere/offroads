import { Action } from '@ngrx/store';
import { AuthActions, AuthActionTypes } from './auth.actions';
import { AuthState } from './auth.state';

export const initialState: AuthState = {
  isAuthenticated: false
};

export function authReducer(state = initialState, action: AuthActions): AuthState {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess:
    case AuthActionTypes.CheckLoginSuccess:
      return { ...state, isAuthenticated : true };

    case AuthActionTypes.LoginFailure:
    case AuthActionTypes.CheckLoginFailure:
      return { ...state, isAuthenticated : false };

    case AuthActionTypes.Logout:
      return initialState;
    default:
      return state;
  }
}
