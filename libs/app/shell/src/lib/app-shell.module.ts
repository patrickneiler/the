import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiModule } from '@the/ui';
import { UtilityFirebaseModule } from '@the/utility/firebase';
import { AppLayoutComponent } from './app/layout.component';
import { AppApiModule } from '@the/app/api';
import { IonicModule } from '@ionic/angular';
@NgModule({
  declarations: [AppLayoutComponent],
  imports: [
    CommonModule,
    IonicModule,
    UiModule,
    UtilityFirebaseModule,
    AppApiModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppLayoutComponent,
        // children: [
        //   {
        //     path: 'events',
        //     loadChildren: () =>
        //       import('@the/feature/events/shell').then(
        //         (module) => module.FeatureEventsShellModule
        //       ),
        //   },
        // ],
      },
    ]),
  ],
  exports: [AppLayoutComponent],
})
export class AppShellModule {}
