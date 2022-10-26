import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './component/shell/shell.component';
import { UiModule } from '@the/ui';
import { FeatureAccountsApiModule } from '@the/feature/accounts/api';
import { ArtistResolver } from './resolvers/artist.resolver';
import { ArtistGuard } from './guards/artist.guard';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    FeatureAccountsApiModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: () =>
          import('@the/feature/entity/shell').then(
            (module) => module.FeatureEntityShellModule
          ),
        canActivate: [ArtistGuard],
        resolve: { entity: ArtistResolver },
      },
    ]),
  ],
  declarations: [ShellComponent],
  exports: [ShellComponent],
  providers: [ArtistResolver, ArtistGuard],
})
export class FeatureArtistsShellModule {}
