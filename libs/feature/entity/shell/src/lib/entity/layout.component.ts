import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dictionary } from '@ngrx/entity';
import { IFacade } from '@the/utility/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'the-entity-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class EntityLayoutComponent implements OnInit {
  public entity$!: Observable<Dictionary<any>>;
  public facade!: IFacade;
  public name!: string;
  constructor(public router: Router, public route: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.route.snapshot);
    const entity = this.route.snapshot.data['entity'];
    this.name = this.route.snapshot.data['name'];
    this.facade = <IFacade>entity['facade'];
    this.facade.load();
  }

  add() {
    this.router.navigate(['add'], {
      relativeTo: this.route,
      state: {
        entity: this.facade,
        name: this.name,
      },
    });
  }
}
