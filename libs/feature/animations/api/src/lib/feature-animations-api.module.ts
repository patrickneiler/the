import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromAnimation from './animation.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AnimationEffects } from './animation.effects';

@NgModule({
  imports: [CommonModule, StoreModule.forFeature(fromAnimation.animationsFeatureKey, fromAnimation.reducer), EffectsModule.forFeature([AnimationEffects])],
})
export class FeatureAnimationsApiModule {}
