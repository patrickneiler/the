import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationModule } from './animation/animation.module';
import { FeatureAnimationsApiModule } from '@the/feature/animations/api';

@NgModule({
  imports: [CommonModule, AnimationModule, FeatureAnimationsApiModule],
  exports: [AnimationModule],
})
export class FeatureAnimationsModule {}
