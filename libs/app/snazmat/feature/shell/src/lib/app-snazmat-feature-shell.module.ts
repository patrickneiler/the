import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ShellComponent } from './component/shell.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShellComponent,
        children: [
          {
            path: '',
            redirectTo: 'game',
            pathMatch: 'full',
          },
          {
            path: 'game',
            loadChildren: () =>
              import('@the/app/snazmat/feature/game').then(
                (module) => module.AppSnazmatFeatureGameModule
              ),
          },
        ],
      },
    ]),
  ],
  declarations: [ShellComponent],
  exports: [ShellComponent],
})
export class AppSnazmatFeatureShellModule {}
