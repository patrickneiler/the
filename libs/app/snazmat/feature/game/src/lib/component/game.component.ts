import { Component, OnInit } from '@angular/core';

export type JeffStateType = 'idle' | 'waving' | 'jumping';

@Component({
  selector: 'the-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  public state: JeffStateType = 'idle';
  constructor() {}

  ngOnInit(): void {}

  handle(e: Event) {
    e.stopPropagation();
    this.state = 'jumping';
  }
  hover(e: Event) {
    if (this.state === 'waving') {
      this.state = 'idle';
    }
  }
}
