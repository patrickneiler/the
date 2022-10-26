import { ValidatorFn } from '@angular/forms';

export interface NgrxForms {
  data: any;
  structure: Field[];
  valid: boolean;
  errors: Errors;
  touched: boolean;
}

export interface Field {
  type: FieldType;
  name: string;
  label?: string;
  placeholder?: string;
  validator?: ValidatorFn[];
  attrs?: any;
  value?: string;
}

export type FieldType =
  | 'INPUT'
  | 'TEXTAREA'
  | 'HIDDEN'
  | 'PHONE_NUMBER'
  | 'OTP';

export interface Errors {
  [key: string]: string;
}
