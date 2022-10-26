import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GameComponent } from './component/game.component';
import { FeatureAnimationsModule } from '@the/feature/animations';

@NgModule({
  imports: [
    CommonModule,
    FeatureAnimationsModule,
    RouterModule.forChild([{ path: '', component: GameComponent }]),
  ],
  declarations: [GameComponent],
  exports: [GameComponent],
})
export class AppSnazmatFeatureGameModule {}
