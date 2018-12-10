import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginFailure = '[Auth] Login Failure',
  Logout = '[Auth] Logout',
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: string) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;

  constructor(public payload: string) {}
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LoginFailure;
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export type AuthActions
  = Login
  | LoginSuccess
  | LoginFailure
  | Logout
;
