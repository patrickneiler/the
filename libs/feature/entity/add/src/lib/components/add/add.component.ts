import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Field, FieldType, NgrxFormsFacade } from '@the/feature/forms';
import { IFacade } from '@the/utility/models';
import {
  concatMap,
  map,
  mergeMap,
  Observable,
  switchMap,
  take,
  takeWhile,
  tap,
} from 'rxjs';

@Component({
  selector: 'the-entity-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  public entities!: IFacade;
  public name!: string;

  public fields$!: Observable<Field[]>;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public form: NgrxFormsFacade
  ) {}

  ngOnInit(): void {
    const entity = this.route.snapshot.parent?.parent?.data['entity'];
    this.name = this.route.snapshot.parent?.parent?.data['name'];
    this.entities = <IFacade>entity['facade'];
    this.fields$ = this.entities.all$.pipe(
      take(1),
      mergeMap((entities) =>
        entities.map((entity) =>
          Object.keys(entity).map((key) => {
            const field: Field = {
              name: key,
              type: <FieldType>entity.type || 'INPUT',
            };
            return field;
          })
        )
      )
    );
    this.fields$.pipe(
      take(1),
      tap((fields) => this.form.setStructure(fields))
    );
  }

  updateForm(changes: any) {
    this.form.updateData(changes);
  }

  added() {
    this.entities.loaded$?.pipe(
      takeWhile((loaded) => loaded === false),
      map((loaded) => this.router.navigateByUrl('/events'))
    );
  }
}
