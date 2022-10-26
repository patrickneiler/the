import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { IFacade, EntityState, IEventFields, State } from '@the/utility/models';
import { EventEntity, EventFacade } from '@the/feature/events/api';
import { EventFeature } from '@the/feature/events/api';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';

@Injectable()
export class EventResolver
  implements
    Resolve<{
      name: string;
      facade: EventFacade;
    }>
{
  constructor(
    private facade: EventFacade,
    private store: Store<EventFeature.State>
  ) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<{
    name: string;
    facade: EventFacade;
  }> {
    return of({
      name: EventFeature.EVENT_FEATURE_KEY,
      facade: this.facade,
    });
  }
}
