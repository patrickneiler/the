import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { AccountsPartialState } from './accounts.reducer';
import { accountsQuery } from './accounts.selectors';
import { LoadAccounts, Register, Login } from './accounts.actions';
import { Logout } from './logout/logout.actions';
import { map, switchMap } from 'rxjs';
import { doc, docData, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class AccountsFacade {
  loaded$ = this.store.pipe(select(accountsQuery.getLoaded));
  accounts$ = this.store.pipe(select(accountsQuery.getAccountsState));
  account$ = this.store.pipe(select(accountsQuery.getSelectedAccounts));
  is$ = this.accounts$.pipe(
    map((accounts) => {
      return accounts && accounts.selectedId ? true : false;
    })
  );

  constructor(
    private readonly store: Store<AccountsPartialState>,
    private firestore: Firestore
  ) {
    // this.account$
    //   .pipe(
    //     switchMap((account) => {
    //       const ref = doc(this.firestore, `accounts/${account?.id}`);
    //       return docData(ref);
    //     })
    //   )
    //   .subscribe((ac) => console.log(ac));
  }

  loadAll() {
    this.store.dispatch(new LoadAccounts());
  }

  register() {
    this.store.dispatch(new Register());
  }

  login() {
    this.store.dispatch(new Login());
  }

  logout() {
    this.store.dispatch(new Logout());
  }
}
