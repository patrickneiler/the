import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Animation } from './animation.model';

export const loadAnimations = createAction(
  '[Animation/API] Load Animations', 
  props<{ animations: Animation[] }>()
);

export const addAnimation = createAction(
  '[Animation/API] Add Animation',
  props<{ animation: Animation }>()
);

export const upsertAnimation = createAction(
  '[Animation/API] Upsert Animation',
  props<{ animation: Animation }>()
);

export const addAnimations = createAction(
  '[Animation/API] Add Animations',
  props<{ animations: Animation[] }>()
);

export const upsertAnimations = createAction(
  '[Animation/API] Upsert Animations',
  props<{ animations: Animation[] }>()
);

export const updateAnimation = createAction(
  '[Animation/API] Update Animation',
  props<{ animation: Update<Animation> }>()
);

export const updateAnimations = createAction(
  '[Animation/API] Update Animations',
  props<{ animations: Update<Animation>[] }>()
);

export const deleteAnimation = createAction(
  '[Animation/API] Delete Animation',
  props<{ id: string }>()
);

export const deleteAnimations = createAction(
  '[Animation/API] Delete Animations',
  props<{ ids: string[] }>()
);

export const clearAnimations = createAction(
  '[Animation/API] Clear Animations'
);
