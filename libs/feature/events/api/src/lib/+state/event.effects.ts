import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { NgrxFormsFacade } from '@the/feature/forms';
import { IEventFields } from '@the/utility/models';
import { FirestoreService } from '@the/utility/firebase';
import { catchError, from, map, of, switchMap, withLatestFrom } from 'rxjs';

import * as EventActions from './event.actions';
import * as EventFeature from './event.reducer';
import { Router } from '@angular/router';

@Injectable()
export class EventEffects {
  loadEvents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EventActions.loadEvents),
      switchMap(() =>
        this.firestore.getAll<IEventFields>('events').pipe(
          map((events) => events.filter((event) => event['id'])),
          map((events) => EventActions.loadEventsSuccess({ events: events }))
        )
      ),
      catchError((error) => of(EventActions.loadEventsFailure({ error })))
    )
  );

  addEvents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EventActions.addEvents),
      withLatestFrom(this.form$.data$),
      switchMap(([events, form]) =>
        from(
          this.firestore
            .create('events', { name: form['name'] })
            .then((ref) =>
              ref
                .get()
                .then((doc) =>
                  ref
                    .update({ ...doc.data, id: doc.id })
                    .then(
                      () => (
                        this.router.navigateByUrl('/events'),
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

  selectEvents$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EventActions.selectEvent),
      switchMap((payload) => {
        return of(EventActions.selectEventSuccess({ id: payload.id }));
      }),
      catchError((error) => of(EventActions.selectEventFailure({ error })))
    )
  );

  constructor(
    private readonly actions$: Actions,
    private form$: NgrxFormsFacade,
    private firestore: FirestoreService,
    private router: Router
  ) {}
}
