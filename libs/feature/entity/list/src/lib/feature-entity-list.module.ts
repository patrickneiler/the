import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EntityListComponent } from './components/list/entity-list.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: EntityListComponent },
    ]),
  ],
  declarations: [EntityListComponent],
  exports: [EntityListComponent],
})
export class FeatureEntityListModule {}
