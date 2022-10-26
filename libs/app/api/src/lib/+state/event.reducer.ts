import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import { EntityState, IEntity } from '@the/utility/models';

import * as EventActions from './event.actions';

export const EVENT_FEATURE_KEY = 'apps';

export interface State extends EntityState<IEntity> {
  loaded: boolean;
}

export interface EventPartialState {
  readonly [EVENT_FEATURE_KEY]: State;
}

export const eventAdapter: EntityAdapter<IEntity> =
  createEntityAdapter<IEntity>({
    selectId: (event: IEntity) => event.id,
  });

export const initialState: State = eventAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  ids: [],
});

const eventReducer = createReducer(
  initialState,
  on(EventActions.init, (state) => ({
    ...state,
    ...initialState,
    loaded: true,
  })),
  on(EventActions.loadEvents, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(EventActions.loadEventsSuccess, (state, { entries }) =>
    eventAdapter.setAll(entries, { ...state, loaded: true })
  ),
  on(EventActions.loadEventsFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(EventActions.addEvents, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(EventActions.addEventsSuccess, (state) => ({
    ...state,
    loaded: true,
    error: null,
  })),
  on(EventActions.addEventsFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(EventActions.selectApps, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(EventActions.selectAppsSuccess, (state, { id }) => ({
    ...state,
    ids: [id],
    loaded: true,
  })),
  on(EventActions.selectAppsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State, action: Action) {
  return eventReducer(state, action);
}
