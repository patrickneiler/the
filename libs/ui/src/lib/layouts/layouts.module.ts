import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AccountLayoutComponent } from './account/layout.component';

@NgModule({
  declarations: [AccountLayoutComponent],
  imports: [CommonModule, RouterModule, IonicModule],
  exports: [AccountLayoutComponent],
})
export class LayoutsModule {}
