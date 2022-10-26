import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Artist } from './artist.model';
import * as ArtistActions from './artist.actions';

export const artistsFeatureKey = 'artists';

export interface State extends EntityState<Artist> {
  list: Artist[]; // list of Accounts; analogous to a sql normalized table
  selectedId?: string; // which Accounts record has been selected
  loaded: boolean; // has the Accounts list been loaded
  error?: any; // last none error (if any)
}

export class State implements State {}

export const adapter: EntityAdapter<Artist> = createEntityAdapter<Artist>();

export const initialState: State = adapter.getInitialState({
  loaded: true,
  list: [],
});

export const reducer = createReducer(
  initialState,
  on(ArtistActions.init, (state, action) => {
    return {
      ...state,
      loaded: true,
    };
  }),
  on(ArtistActions.addArtist, (state, action) =>
    adapter.addOne(action.artist, state)
  ),
  on(ArtistActions.upsertArtist, (state, action) =>
    adapter.upsertOne(action.artist, state)
  ),
  on(ArtistActions.addArtists, (state, action) =>
    adapter.addMany(action.artists, state)
  ),
  on(ArtistActions.upsertArtists, (state, action) =>
    adapter.upsertMany(action.artists, state)
  ),
  on(ArtistActions.updateArtist, (state, action) =>
    adapter.updateOne(action.artist, state)
  ),
  on(ArtistActions.updateArtists, (state, action) =>
    adapter.updateMany(action.artists, state)
  ),
  on(ArtistActions.deleteArtist, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(ArtistActions.deleteArtists, (state, action) =>
    adapter.removeMany(action.ids, state)
  ),
  on(ArtistActions.loadArtists, (state, action) =>
    adapter.setAll(action.artists, state)
  ),
  on(ArtistActions.clearArtists, (state) => adapter.removeAll(state))
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
