import { Component, Output, EventEmitter, Input } from '@angular/core';
import { AccountsFacade } from '@the/feature/accounts/api';

@Component({
  selector: 'the-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss'],
})
export class StatusComponent {
  @Input() disabled: boolean | null = false;
  @Output() checked: EventEmitter<boolean> = new EventEmitter();
  constructor(public accounts: AccountsFacade) {}

  public toggle(e: any): void {
    this.checked.emit(e);
  }
}
