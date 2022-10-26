import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Dictionary } from '@ngrx/entity';
import { EventFacade } from '@the/app/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'the-app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class AppLayoutComponent implements OnInit {
  public navigation$!: Observable<string[]>;

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public app: EventFacade
  ) {}

  ngOnInit(): void {
    this.app.init();
    this.app.load();
    this.app.select();
  }

  getRoutes(app: any): string[] {
    return app.routes;
  }
}
