import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'the-account-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class AccountLayoutComponent implements OnInit {
  constructor(public router: Router, public route: ActivatedRoute) {}

  ngOnInit(): void {
    let accounts: Store<any>;
    this.route.data.subscribe((data) => {
      accounts = data['accounts'];
      console.log(accounts);
    });
  }
}
