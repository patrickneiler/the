import { Injectable } from '@angular/core';
import { catchError, map, switchMap, take } from 'rxjs/operators';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { EventFacade } from '@the/feature/events/api';

@Injectable({
  providedIn: 'root',
})
export class EventGuard implements CanActivate {
  constructor(private readonly events: EventFacade) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.events.init();
    return this.events.loaded$;
  }
}
