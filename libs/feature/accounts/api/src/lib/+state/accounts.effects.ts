import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { NgrxFormsFacade } from '@the/feature/forms';
import { from, of, switchMap, tap } from 'rxjs';

import {
  AccountsLoaded,
  AccountsActionTypes,
  RegisterActionTypes,
  RegisterSuccess,
  LoginActionTypes,
} from './accounts.actions';
import { LoginSuccess, LoginFailure } from './login/login.actions';
import {
  LogoutActionTypes,
  LogoutSuccess,
  LogoutFailure,
} from './logout/logout.actions';

@Injectable()
export class AccountsEffects {
  constructor(
    private readonly actions$: Actions,
    private auth: Auth,
    private form: NgrxFormsFacade
  ) {}

  LoadAccounts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AccountsActionTypes.LoadAccounts),
      switchMap(() => {
        const auth = authState(this.auth);
        return auth.pipe(
          switchMap((user) => {
            if (user) {
              return of(
                new AccountsLoaded({
                  list: [
                    {
                      id: user.uid,
                    },
                  ],
                  loaded: true,
                  selectedId: user.uid,
                })
              );
            } else {
              return of(
                new AccountsLoaded({
                  list: [],
                  loaded: true,
                  selectedId: undefined,
                })
              );
            }
          })
        );
      })
    )
  );

  Register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RegisterActionTypes.Register),
      switchMap(() => {
        return this.form.data$.pipe(
          switchMap((data: { email: string; password: string }) => {
            const user = createUserWithEmailAndPassword(
              this.auth,
              data.email,
              data.password
            )
              .then((user) => {
                return new RegisterSuccess({
                  list: [
                    {
                      id: user.user.uid,
                    },
                  ],
                  loaded: true,
                  selectedId: user.user.uid,
                });
              })
              .catch((error) => new LoginFailure(error));
            return user;
          })
        );
      })
    )
  );

  Login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActionTypes.Login),
      switchMap(() => {
        return this.form.data$.pipe(
          switchMap((data: { email: string; password: string }) => {
            const user = signInWithEmailAndPassword(
              this.auth,
              data.email,
              data.password
            )
              .then((user) => {
                return new LoginSuccess({
                  list: [
                    {
                      id: user.user.uid,
                    },
                  ],
                  loaded: true,
                  selectedId: user.user.uid,
                });
              })
              .catch((error) => new LoginFailure(error));
            return user;
          })
        );
      })
    )
  );

  Logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LogoutActionTypes.Logout),
      switchMap(() => {
        return from(
          this.auth
            .signOut()
            .then(() => new LogoutSuccess())
            .catch((error) => new LogoutFailure(error))
        );
      })
    )
  );
}
