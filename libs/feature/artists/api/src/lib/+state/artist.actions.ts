import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Artist } from './artist.model';

export const init = createAction('[Artist/API] Init Artists');

export const loadArtists = createAction(
  '[Artist/API] Load Artists',
  props<{ artists: Artist[] }>()
);

export const addArtist = createAction(
  '[Artist/API] Add Artist',
  props<{ artist: Artist }>()
);

export const upsertArtist = createAction(
  '[Artist/API] Upsert Artist',
  props<{ artist: Artist }>()
);

export const addArtists = createAction(
  '[Artist/API] Add Artists',
  props<{ artists: Artist[] }>()
);

export const upsertArtists = createAction(
  '[Artist/API] Upsert Artists',
  props<{ artists: Artist[] }>()
);

export const updateArtist = createAction(
  '[Artist/API] Update Artist',
  props<{ artist: Update<Artist> }>()
);

export const updateArtists = createAction(
  '[Artist/API] Update Artists',
  props<{ artists: Update<Artist>[] }>()
);

export const deleteArtist = createAction(
  '[Artist/API] Delete Artist',
  props<{ id: string }>()
);

export const deleteArtists = createAction(
  '[Artist/API] Delete Artists',
  props<{ ids: string[] }>()
);

export const clearArtists = createAction('[Artist/API] Clear Artists');
