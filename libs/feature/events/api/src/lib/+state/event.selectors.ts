import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EVENT_FEATURE_KEY, eventAdapter, State } from './event.reducer';

// Lookup the 'Event' feature state managed by NgRx
export const getState = createFeatureSelector<State>(EVENT_FEATURE_KEY);

const { selectAll, selectEntities } = eventAdapter.getSelectors();

export const getLoaded = createSelector(
  getState,
  (state: State) => state.loaded
);

export const getError = createSelector(getState, (state: State) => state.error);

export const getAll = createSelector(getState, (state: State) =>
  selectAll(state)
);

export const getSelected = createSelector(getState, (state: State) =>
  selectEntities(state)
);

export const getSelectedId = createSelector(
  getState,
  (state: State) => state.ids
);
