import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountsFacade } from '@the/feature/accounts/api';

@Component({
  selector: 'the-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public email!: string;
  public password!: string;
  constructor(public accounts: AccountsFacade, public route: ActivatedRoute) {}
}
