import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FeatureAnimationsApiModule } from '@the/feature/animations/api';
import { AnimationGuard } from './guards/animations.guard';
import { AnimationResolver } from './resolvers/animations.resolver';

@NgModule({
  imports: [
    CommonModule,
    FeatureAnimationsApiModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () =>
          import('@the/feature/entity/shell').then(
            (module) => module.FeatureEntityShellModule
          ),
        canActivate: [AnimationGuard],
        resolve: { entity: AnimationResolver },
      },
    ]),
  ],
  providers: [AnimationResolver, AnimationGuard],
})
export class FeatureAnimationsShellModule {}
