import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  Input,
  OnChanges,
  OnInit,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../+state/ngrx-forms.interfaces';
import { InputComponent } from '../fields/input/input.component';
import { OtpComponent } from '../fields/otp/otp.component';
import { PhoneNumberComponent } from '../fields/phone-number/phone-number.component';
import { TextareaComponent } from '../fields/textarea/textarea.component';

const componentsMapper: { [key: string]: Type<any> } = {
  INPUT: InputComponent,
  TEXTAREA: TextareaComponent,
  PHONE_NUMBER: PhoneNumberComponent,
  OTP: OtpComponent,
  HIDDEN: InputComponent,
};

@Directive({
  selector: '[theFormField]',
})
export class DynamicFieldDirective implements OnInit, OnChanges {
  @Input() field: Field | undefined;
  @Input() group: FormGroup | undefined;
  component: ComponentRef<any> | undefined;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) {}

  ngOnChanges() {
    if (this.component) {
      this.component.instance.field = this.field;
      this.component.instance.group = this.group;
    }
  }

  ngOnInit() {
    let component;
    if (this.field) {
      component = this.resolver.resolveComponentFactory<any>(
        componentsMapper[this.field.type]
      );
      this.component = this.container.createComponent(component);
      this.component.instance.field = this.field;
      this.component.instance.group = this.group;
    }
  }
}
