import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusComponent } from './component/feature/accounts/status/status.component';
import { IonicModule } from '@ionic/angular';
import { FeatureAccountsApiModule } from '@the/feature/accounts/api';

@NgModule({
  imports: [CommonModule, IonicModule, FeatureAccountsApiModule],
  declarations: [StatusComponent],
  exports: [StatusComponent],
})
export class FeatureAccountsStatusModule {}
