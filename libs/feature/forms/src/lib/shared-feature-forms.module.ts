import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { NgrxFormsEffects } from './+state/ngrx-forms.effects';
import { NgrxFormsFacade } from './+state/ngrx-forms.facade';
import {
  ngrxFormsInitialState,
  ngrxFormsReducer,
  ngrxFormsFeatureKey,
} from './+state/ngrx-forms.reducer';
import { DynamicFieldDirective } from './dynamic-form/dynamic-field.directive';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { InputComponent } from './fields/input/input.component';
import { TextareaComponent } from './fields/textarea/textarea.component';
import { ListErrorsComponent } from './list-errors/list-errors.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { InputMaskDirective } from './directives/mask.directive';
import { PhoneNumberComponent } from './fields/phone-number/phone-number.component';
import { OtpComponent } from './fields/otp/otp.component';
import { NgOtpInputModule } from 'ng-otp-input';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    StoreModule.forFeature(ngrxFormsFeatureKey, ngrxFormsReducer, {
      initialState: ngrxFormsInitialState,
    }),
    EffectsModule.forFeature([NgrxFormsEffects]),
    NgxMaskModule.forRoot(),
    NgOtpInputModule,
  ],
  providers: [NgrxFormsEffects, NgrxFormsFacade],
  declarations: [
    DynamicFormComponent,
    DynamicFieldDirective,
    InputComponent,
    PhoneNumberComponent,
    TextareaComponent,
    ListErrorsComponent,
    InputMaskDirective,
    OtpComponent,
  ],
  entryComponents: [
    InputComponent,
    TextareaComponent,
    OtpComponent,
    PhoneNumberComponent,
  ],
  exports: [DynamicFormComponent, ListErrorsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FeatureFormsModule {}
