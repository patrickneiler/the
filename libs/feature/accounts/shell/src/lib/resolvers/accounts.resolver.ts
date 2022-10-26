import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { AccountsFacade } from '../../../../api/src/lib/+state/accounts.facade';
import {
  AccountsPartialState,
  AccountsState,
} from '../../../../api/src/lib/+state/accounts.reducer';
import { accountsQuery } from '../../../../api/src/lib/+state/accounts.selectors';

@Injectable()
export class AccountResolver implements Resolve<Store<AccountsPartialState>> {
  constructor(private readonly store: Store<AccountsPartialState>) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Store<AccountsPartialState>> {
    return of(this.store);
  }
}
