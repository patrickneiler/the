import { Component } from '@angular/core';
import { FormControl, NgModel, Validators } from '@angular/forms';
import { AccountsFacade } from '@the/feature/accounts/api';

@Component({
  selector: 'the-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public email!: string;
  public password!: string;
  constructor(public accounts: AccountsFacade) {}
}
