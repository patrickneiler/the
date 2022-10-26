import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {
  AccountsFacade,
  FeatureAccountsApiModule,
} from '@the/feature/accounts/api';
import { AccountLayoutComponent, UiModule } from '@the/ui';
import { AccountsGuard } from './guards/accounts.guard';
import { AccountResolver } from './resolvers/accounts.resolver';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    UiModule,
    FeatureAccountsApiModule,
    RouterModule.forChild([
      {
        path: '',
        component: AccountLayoutComponent,
        children: [
          {
            path: '',
            redirectTo: 'register',
            pathMatch: 'full',
          },
          {
            path: 'login',
            loadChildren: () =>
              import('@the/feature/accounts/login').then(
                (module) => module.FeatureAccountsLoginModule
              ),
          },
          {
            path: 'register',
            loadChildren: () =>
              import('@the/feature/accounts/register').then(
                (module) => module.FeatureAccountsRegisterModule
              ),
          },
        ],
        canActivate: [AccountsGuard],
        resolve: { accounts: AccountResolver },
      },
    ]),
  ],
  providers: [AccountsFacade, AccountsGuard, AccountResolver],
})
export class FeatureAccountshellModule {}
