import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { EntityAdapter } from '@ngrx/entity';
import {
  createFeatureSelector,
  DefaultProjectorFn,
  MemoizedSelector,
  Store,
} from '@ngrx/store';
import {
  adapter,
  State,
  Artist,
  artistsFeatureKey,
} from '@the/feature/artists/api';
import { Observable, of } from 'rxjs';

@Injectable()
export class ArtistResolver
  implements
    Resolve<{
      store: Store<State>;
      state: typeof State;
      adapter: EntityAdapter<Artist>;
      featureSelector: MemoizedSelector<
        object,
        State,
        DefaultProjectorFn<State>
      >;
    }>
{
  state = State;
  constructor(private readonly store: Store<State>) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<{
    store: Store<State>;
    state: typeof State;
    adapter: EntityAdapter<Artist>;
    featureSelector: MemoizedSelector<object, State, DefaultProjectorFn<State>>;
  }> {
    const featureSelector = createFeatureSelector<State>(artistsFeatureKey);
    return of({
      store: this.store,
      state: this.state,
      adapter: adapter,
      featureSelector,
    });
  }
}
