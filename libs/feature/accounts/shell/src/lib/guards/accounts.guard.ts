import { Injectable } from '@angular/core';
import { catchError, switchMap, take } from 'rxjs/operators';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AccountsFacade } from '@the/feature/accounts/api';
import { select, Store } from '@ngrx/store';
import { AccountsPartialState } from 'libs/feature/accounts/api/src/lib/+state/accounts.reducer';
import { LoadAccounts } from 'libs/feature/accounts/api/src/lib/+state/accounts.actions';
import { accountsQuery } from 'libs/feature/accounts/api/src/lib/+state/accounts.selectors';

@Injectable()
export class AccountsGuard implements CanActivate {
  constructor(private readonly store: Store<AccountsPartialState>) {
    this.store.dispatch(new LoadAccounts());
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.store.pipe(select(accountsQuery.getAccountsState)).pipe(
      take(1),
      switchMap((accounts) => (console.log(accounts), of(true))),
      catchError(() => of(false))
    );
  }
}
