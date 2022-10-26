import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Field } from '../../+state/ngrx-forms.interfaces';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'the-form-field-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PhoneNumberComponent {
  @Input() field!: Field;
  @Input() group!: FormGroup;
}
