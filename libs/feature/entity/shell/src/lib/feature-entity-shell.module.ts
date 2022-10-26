import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiModule } from '@the/ui';
import { EntityLayoutComponent } from './entity/layout.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [EntityLayoutComponent],
  imports: [
    CommonModule,
    UiModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: EntityLayoutComponent,
        children: [
          {
            path: '',
            loadChildren: () =>
              import('@the/feature/entity/list').then(
                (module) => module.FeatureEntityListModule
              ),
          },
          {
            path: 'add',
            loadChildren: () =>
              import('@the/feature/entity/add').then(
                (module) => module.FeatureEntityAddModule
              ),
          },
          {
            path: ':id',
            loadChildren: () =>
              import('@the/feature/entity/view').then(
                (module) => module.FeatureEntityViewModule
              ),
          },
        ],
      },
    ]),
  ],
  exports: [EntityLayoutComponent],
})
export class FeatureEntityShellModule {}
