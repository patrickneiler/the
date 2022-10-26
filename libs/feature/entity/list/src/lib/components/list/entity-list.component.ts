import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dictionary } from '@ngrx/entity';
import { IEntity, IFacade } from '@the/utility/models';
import { Field } from 'contentful';
import { map, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'the-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.scss'],
})
export class EntityListComponent implements OnInit {
  public entities!: IFacade;
  constructor(public router: Router, public route: ActivatedRoute) {}

  ngOnInit(): void {
    const entity = this.route.snapshot.data['entity'];
    this.entities = entity['facade'];
  }
}
