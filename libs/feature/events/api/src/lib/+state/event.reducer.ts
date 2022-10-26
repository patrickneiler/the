import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import { CONTENT_TYPE, EntityState } from '@the/utility/models';

import * as EventActions from './event.actions';
import { EventEntity } from './event.models';

export const EVENT_FEATURE_KEY: CONTENT_TYPE = 'event';

export interface State extends EntityState<EventEntity> {
  loaded: boolean;
}

export type EventPartialState = {
  readonly [key in CONTENT_TYPE]: State;
};

export const eventAdapter: EntityAdapter<EventEntity> =
  createEntityAdapter<EventEntity>({
    selectId: (event: EventEntity) => event.id,
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
  on(EventActions.loadEventsSuccess, (state, { events }) =>
    eventAdapter.setAll(events, { ...state, loaded: true })
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
  on(EventActions.selectEvent, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(EventActions.selectEventSuccess, (state, { id }) => ({
    ...state,
    ids: [id],
    loaded: true,
  })),
  on(EventActions.selectEventFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State, action: Action) {
  return eventReducer(state, action);
}
