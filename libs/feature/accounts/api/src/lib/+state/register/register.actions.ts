import { Action } from '@ngrx/store';
import { AccountsState } from '../accounts.reducer';

export enum RegisterActionTypes {
  Register = '[Register] Register',
  RegisterSuccess = '[Register] Load Registers Success',
  RegisterFailure = '[Register] Load Registers Failure',
}

export class Register implements Action {
  readonly type = RegisterActionTypes.Register;
}

export class RegisterSuccess implements Action {
  readonly type = RegisterActionTypes.RegisterSuccess;
  constructor(public payload: AccountsState) {}
}

export class RegisterFailure implements Action {
  readonly type = RegisterActionTypes.RegisterFailure;
  constructor(public payload: { error: any }) {}
}
