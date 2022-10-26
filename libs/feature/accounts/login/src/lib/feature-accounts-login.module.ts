import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LoginComponent } from './component/login.component';
import { FeatureAccountsApiModule } from '@the/feature/accounts/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './component/form/form.component';
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
      { path: '', pathMatch: 'full', component: LoginComponent },
    ]),
  ],
  declarations: [LoginComponent, FormComponent],
  exports: [LoginComponent, FormComponent],
})
export class FeatureAccountsLoginModule {}
