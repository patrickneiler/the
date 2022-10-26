import { Action } from '@ngrx/store';
import { AccountsState } from '../accounts.reducer';

export enum LoginActionTypes {
  Login = '[Login] Login',
  LoginSuccess = '[Login] Success',
  LoginFailure = '[Login] Failure',
}

export class Login implements Action {
  readonly type = LoginActionTypes.Login;
}

export class LoginSuccess implements Action {
  readonly type = LoginActionTypes.LoginSuccess;
  constructor(public payload: AccountsState) {}
}

export class LoginFailure implements Action {
  readonly type = LoginActionTypes.LoginFailure;
  constructor(public payload: { error: any }) {}
}
