/* eslint-disable prefer-const */
import {
  Directive,
  Attribute,
  Host,
  Self,
  Optional,
  ElementRef,
} from '@angular/core';
import { IonInput } from '@ionic/angular';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[mask]',
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '(ionChange)': 'ionChange($event)',
  },
})
export class InputMaskDirective {
  pattern: string;
  reg: RegExp;
  nativeElement!: HTMLInputElement;

  constructor(
    @Attribute('mask') pattern: string,
    @Attribute('reg') reg: string,
    @Host() @Self() @Optional() public hostInput: IonInput
  ) {
    this.reg = new RegExp(reg);
    this.pattern = pattern;
  }

  ngAfterViewInit() {
    // TODO: Sanity-check that the directive was actually added to an input element.
    // It is not valid for anything else.
    this.hostInput.getInputElement().then((el) => (this.nativeElement = el));
    this.updateMask({ target: this.nativeElement });
  }

  ionChange(e: Event) {
    setTimeout(() => {
      this.updateMask(e);
    }, 100);
  }

  updateMask(e: any) {
    try {
      let value = e.target?.value,
        caret = e.target.selectionStart,
        pattern = this.pattern,
        reserve = pattern.replace(/\*/, 'g'),
        applied = '',
        ordinal = 0;

      if (
        e.keyCode === 8 ||
        e.key === 'Backspace' ||
        e.keyCode === 46 ||
        e.key === 'Delete'
      ) {
        if (value.length) {
          // remove all trailing formatting
          while (
            value.length &&
            pattern[value.length] &&
            pattern[value.length] !== '*'
          ) {
            value = value.substring(0, value.length - 1);
          }
          // remove all leading formatting to restore placeholder
          if (pattern.substring(0, value.length).indexOf('*') < 0) {
            value = value.substring(0, value.length - 1);
          }
        }
      }

      // apply mask characters
      for (let i = 0; i < value.length; i++) {
        // enforce pattern limit
        if (i < pattern.length) {
          // match mask
          if (value[i] === pattern[ordinal]) {
            applied += value[i];
            ordinal++;
          } else if (reserve.indexOf(value[i]) > -1) {
            // skip other reserved characters
          } else {
            // apply leading formatting
            while (ordinal < pattern.length && pattern[ordinal] !== '*') {
              applied += pattern[ordinal];
              ordinal++;
            }
            if (this.reg.test(value[i])) {
              applied += value[i];
              ordinal++;
            }
            // apply trailing formatting
            while (ordinal < pattern.length && pattern[ordinal] !== '*') {
              applied += pattern[ordinal];
              ordinal++;
            }
          }
        }
      }
      // e.target.value = applied;
      e.target.value = applied;
      if (caret < value.length) {
        e.target.setSelectionRange(caret, caret);
      }
    } catch (ex) {
      // console.error(ex.message);
    }
  }
}
