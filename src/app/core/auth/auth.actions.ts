import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] Login Success',
  LoginFailure = '[Auth] Login Failure',
  Logout = '[Auth] Logout',
  CheckLogin = '[Auth] Check Login',
  CheckLoginSuccess = '[Auth] Check Login Success',
  CheckLoginFailure = '[Auth] Check Login Failure'
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

  constructor(public payload: any) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export class CheckLogin implements Action {
  readonly type = AuthActionTypes.CheckLogin;
}

export class CheckLoginSuccess implements Action {
  readonly type = AuthActionTypes.CheckLoginSuccess;
}

export class CheckLoginFailure implements Action {
  readonly type = AuthActionTypes.CheckLoginFailure;
}


export type AuthActions
  = Login
  | LoginSuccess
  | LoginFailure
  | Logout
  | CheckLogin
  | CheckLoginSuccess
  | CheckLoginFailure
;
