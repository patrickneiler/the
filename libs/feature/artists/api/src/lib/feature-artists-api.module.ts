import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromArtist from './+state/artist.reducer';
import { ArtistFacade } from './+state/artist.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromArtist.artistsFeatureKey, fromArtist.reducer),
  ],
  providers: [ArtistFacade],
})
export class FeatureArtistsApiModule {}
