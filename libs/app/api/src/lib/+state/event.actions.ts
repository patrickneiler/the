import { createAction, props } from '@ngrx/store';
import { IEntity, IEventFields } from '@the/utility/models';
import { EventEntity } from './event.models';

export const init = createAction('[Event/API] Initialize Events');

export const loadEvents = createAction('[Event/API] Load Events');

export const loadEventsSuccess = createAction(
  '[Event/API] Load Events Success',
  props<{ entries: IEntity[] | [] }>()
);

export const loadEventsFailure = createAction(
  '[Event/API] Load Events Failure',
  props<{ error: any }>()
);

export const addEvents = createAction('[Event/API] Add Events');

export const addEventsSuccess = createAction('[Event/API] Add Events Success');

export const addEventsFailure = createAction(
  '[Event/API] Load Events Failure',
  props<{ error: any }>()
);

export const selectApps = createAction(
  '[App/API] Select Apps',
  props<{ id: string }>()
);

export const selectAppsSuccess = createAction(
  '[App/API] Select Apps Success',
  props<{ id: string }>()
);

export const selectAppsFailure = createAction(
  '[App/API] Select Apps Failure',
  props<{ error: any }>()
);
