import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FeatureEventsApiModule } from '@the/feature/events/api';
import { EventGuard } from './guards/events.guard';
import { EventResolver } from './resolvers/events.resolver';

@NgModule({
  imports: [
    CommonModule,
    FeatureEventsApiModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () =>
          import('@the/feature/entity/shell').then(
            (module) => module.FeatureEntityShellModule
          ),
        canActivate: [EventGuard],
        resolve: { entity: EventResolver },
      },
    ]),
  ],
  providers: [EventResolver, EventGuard],
})
export class FeatureEventsShellModule {}
