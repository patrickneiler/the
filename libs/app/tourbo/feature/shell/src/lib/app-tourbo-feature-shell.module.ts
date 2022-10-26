import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { UiModule } from '@the/ui';
import { UtilityFirebaseModule } from '@the/utility/firebase';
import { ShellComponent } from './shell.component';
import { APP_CONFIG } from '@the/app/api';
import { IAppFields } from '@the/utility/models';

export const TOURBO_DI_CONFIG: IAppFields = {
  id: 'ENmG7JM8g6iFiotLaqQS',
  name: 'Tourbo',
};

@NgModule({
  declarations: [ShellComponent],
  imports: [
    CommonModule,
    UiModule,
    UtilityFirebaseModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),

    EffectsModule.forRoot([]),

    StoreDevtoolsModule.instrument(),

    StoreRouterConnectingModule.forRoot(),
    RouterModule.forChild([
      {
        path: '',
        component: ShellComponent,
        loadChildren: () =>
          import('@the/app/shell').then((module) => module.AppShellModule),
      },
    ]),
  ],
  providers: [{ provide: APP_CONFIG, useValue: TOURBO_DI_CONFIG }],
})
export class AppTourboFeatureShellModule {}
