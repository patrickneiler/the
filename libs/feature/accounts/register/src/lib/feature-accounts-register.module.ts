import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RegisterComponent } from './component/register.component';
import { FeatureAccountsApiModule } from '@the/feature/accounts/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './component/register/form/form.component';
import { FeatureFormsModule } from '@the/feature/forms';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    FeatureAccountsApiModule,
    FeatureFormsModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: RegisterComponent },
    ]),
  ],
  declarations: [RegisterComponent, FormComponent],
  exports: [RegisterComponent, FormComponent],
})
export class FeatureAccountsRegisterModule {}
