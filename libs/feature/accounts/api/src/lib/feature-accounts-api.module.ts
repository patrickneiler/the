import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromAccounts from './+state/accounts.reducer';
import { AccountsEffects } from './+state/accounts.effects';
import { AccountsFacade } from './+state/accounts.facade';
import { FeatureFormsModule } from '@the/feature/forms';

@NgModule({
  imports: [
    CommonModule,
    FeatureFormsModule,
    StoreModule.forFeature(
      fromAccounts.ACCOUNTS_FEATURE_KEY,
      fromAccounts.reducer
    ),
    EffectsModule.forFeature([AccountsEffects]),
  ],
  providers: [AccountsFacade],
})
export class FeatureAccountsApiModule {}
