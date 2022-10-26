import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { State, selectAll } from './artist.reducer';
import { loadArtists } from './artist.actions';
import { Firestore } from '@angular/fire/firestore';

@Injectable()
export class ArtistFacade {
  artists$ = this.store.pipe(select(selectAll));

  constructor(
    private readonly store: Store<State>,
    private firestore: Firestore
  ) {
    this.init();
  }

  init() {
    this.store.dispatch(loadArtists({ artists: [] }));
  }
}
