import { Inject, Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { APP_CONFIG } from '../app-config';
import { IAppFields, IEventFields, IFacade } from '@the/utility/models';

import * as EventActions from './event.actions';
import { State } from './event.reducer';
import * as EventSelectors from './event.selectors';

@Injectable()
export class EventFacade implements IFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(EventSelectors.getLoaded));
  all$ = this.store.pipe(select(EventSelectors.getAll));
  selected$ = this.store.pipe(select(EventSelectors.getSelected));
  selectedId$ = this.store.pipe(select(EventSelectors.getSelectedId));

  constructor(
    private readonly store: Store<State>,
    @Inject(APP_CONFIG) public config: IAppFields
  ) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(EventActions.init());
  }

  load() {
    this.store.dispatch(EventActions.loadEvents());
  }

  add() {
    this.store.dispatch(EventActions.addEvents());
  }

  select(id?: string) {
    const _id = this.config.id;
    this.store.dispatch(EventActions.selectApps({ id: _id }));
  }
}
