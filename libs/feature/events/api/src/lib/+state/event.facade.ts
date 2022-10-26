import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IEventFields, IFacade } from '@the/utility/models';

import * as EventActions from './event.actions';
import * as EventSelectors from './event.selectors';
import { State } from '@the/feature/artists/api';
import { FeatureEntityShellModule } from '@the/feature/entity/shell';

@Injectable({
  providedIn: FeatureEntityShellModule,
})
export class EventFacade implements IFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(EventSelectors.getLoaded));
  all$ = this.store.pipe(select(EventSelectors.getAll));
  // selected$ = this.store.pipe(select(EventSelectors.getSelected));

  constructor(private readonly store: Store<State>) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(EventActions.init());
    console.log('EVent');
  }

  load() {
    this.store.dispatch(EventActions.loadEvents());
  }

  add() {
    this.store.dispatch(EventActions.addEvents());
  }

  select(id: string) {
    this.store.dispatch(EventActions.selectEvent({ id }));
  }
}
