import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { FeatureFormsModule } from '@the/feature/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FeatureFormsModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: AddComponent },
    ]),
  ],
  declarations: [AddComponent],
  exports: [AddComponent],
})
export class FeatureEntityAddModule {}
