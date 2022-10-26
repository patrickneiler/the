import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromEvent from './+state/event.reducer';
import { EventEffects } from './+state/event.effects';
import { EventFacade } from './+state/event.facade';
import { FeatureFormsModule } from '@the/feature/forms';

@NgModule({
  imports: [
    CommonModule,
    FeatureFormsModule,
    StoreModule.forFeature(fromEvent.EVENT_FEATURE_KEY, fromEvent.reducer),
    EffectsModule.forFeature([EventEffects]),
  ],
  providers: [EventFacade],
})
export class FeatureEventsApiModule {}
