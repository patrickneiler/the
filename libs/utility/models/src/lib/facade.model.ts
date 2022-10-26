import { Dictionary } from '@ngrx/entity';
import { Observable } from 'rxjs';
import { IEntity } from './entity.class';

export interface IFacade {
  loaded$?: Observable<boolean>;
  all$: Observable<IEntity[]>;
  selected$?: Observable<IEntity | undefined>;
  selectedId$?: Observable<string | number>;
  init(): void;
  load(): void;
  add(): void;
  select(id: string | undefined): void;
}
