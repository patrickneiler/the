import { Action } from '@ngrx/store';
import { AccountsState } from '../accounts.reducer';

export enum LogoutActionTypes {
  Logout = '[Logout]  Logout',
  LogoutSuccess = '[Logout]  Logout Success',
  LogoutFailure = '[Logout]  Logout Failure',
}

export class Logout implements Action {
  readonly type = LogoutActionTypes.Logout;
}

export class LogoutSuccess implements Action {
  readonly type = LogoutActionTypes.LogoutSuccess;
}

export class LogoutFailure implements Action {
  readonly type = LogoutActionTypes.LogoutFailure;
  constructor(public payload: { error: any }) {}
}

export type LogoutActions = Logout | LogoutSuccess | LogoutFailure;
