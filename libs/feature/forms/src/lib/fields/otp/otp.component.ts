import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Field } from '../../+state/ngrx-forms.interfaces';
import { Form, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'the-form-field-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtpComponent {
  @Input() field!: Field;
  @Input() group!: FormGroup;
  public control!: FormControl;
  ngOnInit() {
    this.control = <FormControl>this.group.controls[this.field.name];
  }
}
