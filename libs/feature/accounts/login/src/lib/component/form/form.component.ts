import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { AccountsFacade } from '@the/feature/accounts/api';
import { Field, NgrxFormsFacade } from '@the/feature/forms';

@Component({
  selector: 'the-login-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  public fields: Field[] = [
    {
      type: 'INPUT',
      name: 'email',
      placeholder: 'your@email.com',
      validator: [Validators.required],
      attrs: {
        type: 'email',
        label: 'Email Address',
      },
    },
    {
      type: 'INPUT',
      name: 'password',
      placeholder: 'Password',
      validator: [Validators.required],
      attrs: {
        type: 'password',
        label: 'Password',
      },
    },
  ];
  public password!: string;
  constructor(
    public accounts: AccountsFacade,
    public ngrxFormsFacade: NgrxFormsFacade
  ) {}

  ngOnInit(): void {
    this.ngrxFormsFacade.setStructure(this.fields);
  }

  updateForm(changes: any) {
    this.ngrxFormsFacade.updateData(changes);
  }
}
