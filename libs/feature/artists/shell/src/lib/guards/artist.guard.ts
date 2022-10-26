import { Injectable } from '@angular/core';
import { catchError, map, switchMap, take } from 'rxjs/operators';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { init, initialState, selectAll, State } from '@the/feature/artists/api';
import { loadArtists } from '@the/feature/artists/api';

@Injectable({
  providedIn: 'root',
})
export class ArtistGuard implements CanActivate {
  constructor(private readonly store: Store<State>) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.store.dispatch(init());
    return this.store.pipe(
      take(1),
      switchMap((artists) => (console.log(artists), of(true))),
      catchError(() => of(false))
    );
  }
}
