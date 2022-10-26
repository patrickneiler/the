import { Inject, Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { NgrxFormsFacade } from '@the/feature/forms';
import { FirestoreService } from '@the/utility/firebase';
import {
  catchError,
  from,
  map,
  Observable,
  of,
  switchMap,
  withLatestFrom,
} from 'rxjs';

import * as EventActions from './event.actions';
import { Router } from '@angular/router';
import { EventEntity } from './event.models';
import { CONTENT_TYPE, IAppFields, IEntity } from '@the/utility/models';

@Injectable()
export class EventEffects {
  // FROM ROUTER STORE
  type$: Observable<CONTENT_TYPE> = of('app');
  //
  loadEvents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EventActions.loadEvents),
      withLatestFrom(this.type$),
      switchMap(([action, type]) =>
        this.firestore.getAll<IEntity>(`${type}s`).pipe(
          map((entitities) => entitities.filter((entitity) => entitity['id'])),
          map((entries) => EventActions.loadEventsSuccess({ entries }))
        )
      ),
      catchError((error) => of(EventActions.loadEventsFailure({ error })))
    )
  );

  addEvents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EventActions.addEvents),
      withLatestFrom(this.form$.data$, this.type$),
      switchMap(([action, form, type]) =>
        from(
          this.firestore
            .create(type, form)
            .then((ref) =>
              ref
                .get()
                .then((doc) =>
                  ref
                    .update({ ...doc.data, id: doc.id })
                    .then(
                      () => (
                        this.router.navigateByUrl(`/${type}s`),
                        EventActions.addEventsSuccess()
                      )
                    )
                )
            )
            .catch((error) => EventActions.loadEventsFailure({ error }))
        )
      ),
      catchError((error) => of(EventActions.loadEventsFailure({ error })))
    )
  );

  selectApps$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EventActions.selectApps),
      switchMap((payload) => {
        return of(EventActions.selectAppsSuccess({ id: payload.id }));
      }),
      catchError((error) => of(EventActions.selectAppsFailure({ error })))
    )
  );

  constructor(
    private readonly actions$: Actions,
    private form$: NgrxFormsFacade,
    private firestore: FirestoreService,
    private router: Router
  ) {}
}
