import { IAccountFields } from '@the/utility/models';
import {
  AccountsAction,
  AccountsActionTypes,
  RegisterActionTypes,
  LoginActionTypes,
} from './accounts.actions';
import { LogoutActionTypes } from './logout/logout.actions';

export const ACCOUNTS_FEATURE_KEY = 'accounts';

/**
 * Interface for the 'Accounts' data used in
 *  - AccountsState, and the reducer function
 *
 *  Note: replace if already defined in another module
 */
export interface Entity extends IAccountFields {
  id?: string | undefined;
  name?: string | undefined;
}

export interface AccountsState {
  list: Entity[]; // list of Accounts; analogous to a sql normalized table
  selectedId?: string; // which Accounts record has been selected
  loaded: boolean; // has the Accounts list been loaded
  error?: any; // last none error (if any)
}

export interface AccountsPartialState {
  readonly [ACCOUNTS_FEATURE_KEY]: AccountsState;
}

export const initialState: AccountsState = {
  list: [],
  loaded: false,
};

export function reducer(
  state: AccountsState = initialState,
  action: AccountsAction
): AccountsState {
  // accounts/account
  switch (action.type) {
    case AccountsActionTypes.LoadAccounts: {
      state = initialState;
      break;
    }
    case AccountsActionTypes.AccountsLoaded: {
      state = action.payload;
      break;
    }
    case AccountsActionTypes.AccountsLoadError: {
      state = {
        ...initialState,
        error: action.payload.error,
      };
      break;
    }

    // accounts/login
    case LoginActionTypes.Login: {
      state = initialState;
      break;
    }
    case LoginActionTypes.LoginSuccess: {
      state = action.payload;
      break;
    }
    case LoginActionTypes.LoginFailure: {
      state = {
        ...initialState,
        error: action.payload.error,
      };
      break;
    }

    // accounts/register
    case RegisterActionTypes.Register: {
      state = initialState;
      break;
    }
    case RegisterActionTypes.RegisterSuccess: {
      state = action.payload;
      break;
    }
    case RegisterActionTypes.RegisterFailure: {
      state = {
        ...initialState,
        error: action.payload.error,
      };
      break;
    }

    // accounts/register
    case LogoutActionTypes.Logout: {
      state = initialState;
      break;
    }
    case LogoutActionTypes.LogoutSuccess: {
      state = {
        ...state,
        loaded: true,
      };
      break;
    }
    case LogoutActionTypes.LogoutFailure: {
      state = {
        ...initialState,
        error: action.payload.error,
      };
      break;
    }
  }
  return state;
}
