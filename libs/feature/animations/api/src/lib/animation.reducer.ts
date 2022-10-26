import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Animation } from './animation.model';
import * as AnimationActions from './animation.actions';

export const animationsFeatureKey = 'animations';

export interface State extends EntityState<Animation> {
  loading?: boolean;
  selectedId?: string;
}

export const adapter: EntityAdapter<Animation> =
  createEntityAdapter<Animation>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,
  on(AnimationActions.addAnimation, (state, action) =>
    adapter.addOne(action.animation, state)
  ),
  on(AnimationActions.upsertAnimation, (state, action) =>
    adapter.upsertOne(action.animation, state)
  ),
  on(AnimationActions.addAnimations, (state, action) =>
    adapter.addMany(action.animations, state)
  ),
  on(AnimationActions.upsertAnimations, (state, action) =>
    adapter.upsertMany(action.animations, state)
  ),
  on(AnimationActions.updateAnimation, (state, action) =>
    adapter.updateOne(action.animation, state)
  ),
  on(AnimationActions.updateAnimations, (state, action) =>
    adapter.updateMany(action.animations, state)
  ),
  on(AnimationActions.deleteAnimation, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(AnimationActions.deleteAnimations, (state, action) =>
    adapter.removeMany(action.ids, state)
  ),
  on(AnimationActions.loadAnimations, (state, action) =>
    adapter.setAll(action.animations, state)
  ),
  on(AnimationActions.clearAnimations, (state) => adapter.removeAll(state))
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
