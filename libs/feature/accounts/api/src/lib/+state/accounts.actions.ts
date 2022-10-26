import { Action } from '@ngrx/store';
import { AccountsState, Entity } from './accounts.reducer';
import { Login, LoginSuccess, LoginFailure } from './login/login.actions';
import { Logout, LogoutFailure, LogoutSuccess } from './logout/logout.actions';
import {
  Register,
  RegisterSuccess,
  RegisterFailure,
} from './register/register.actions';

export * from './register/register.actions';
export * from './login/login.actions';

export enum AccountsActionTypes {
  LoadAccounts = '[Accounts] Load Accounts',
  AccountsLoaded = '[Accounts] Accounts Loaded',
  AccountsLoadError = '[Accounts] Accounts Load Error',
}

export class LoadAccounts implements Action {
  readonly type = AccountsActionTypes.LoadAccounts;
}

export class AccountsLoadError implements Action {
  readonly type = AccountsActionTypes.AccountsLoadError;

  constructor(public payload: any) {}
}

export class AccountsLoaded implements Action {
  readonly type = AccountsActionTypes.AccountsLoaded;

  constructor(public payload: AccountsState) {}
}

export type AccountsAction =
  | LoadAccounts
  | AccountsLoaded
  | AccountsLoadError
  | Register
  | RegisterSuccess
  | RegisterFailure
  | Login
  | LoginSuccess
  | LoginFailure
  | Logout
  | LogoutSuccess
  | LogoutFailure;

export const fromAccountsActions = {
  LoadAccounts,
  AccountsLoaded,
  AccountsLoadError,
  Register,
  RegisterSuccess,
  RegisterFailure,
  Login,
  LoginSuccess,
  LoginFailure,
  Logout,
  LogoutSuccess,
  LogoutFailure,
};
