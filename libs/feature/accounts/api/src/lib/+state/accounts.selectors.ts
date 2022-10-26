import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ACCOUNTS_FEATURE_KEY, AccountsState } from './accounts.reducer';

// Lookup the 'Accounts' feature state managed by NgRx
const getAccountsState =
  createFeatureSelector<AccountsState>(ACCOUNTS_FEATURE_KEY);

const getLoaded = createSelector(
  getAccountsState,
  (state: AccountsState) => state.loaded
);
const getError = createSelector(
  getAccountsState,
  (state: AccountsState) => state.error
);

const getAllAccounts = createSelector(
  getAccountsState,
  getLoaded,
  (state: AccountsState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getAccountsState,
  (state: AccountsState) => state.selectedId
);
const getSelectedAccounts = createSelector(
  getAllAccounts,
  getSelectedId,
  (accounts, id) => {
    const result = accounts.find((it) => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const accountsQuery = {
  getLoaded,
  getError,
  getAllAccounts,
  getSelectedAccounts,
  getAccountsState,
};
