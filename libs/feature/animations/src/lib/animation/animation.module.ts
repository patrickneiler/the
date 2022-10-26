import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationComponent } from './component/animation.component';
import { AnimationDirective } from './directives/animation.directive';

@NgModule({
  declarations: [AnimationComponent, AnimationDirective],
  imports: [CommonModule],
  exports: [AnimationComponent, AnimationDirective],
})
export class AnimationModule {}
