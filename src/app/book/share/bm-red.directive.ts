import {Directive, HostBinding} from '@angular/core';

@Directive({
  selector: '[sseWzeBmRed]'
})
export class BmRedDirective {
  @HostBinding('style.backgroundColor')
  public backgroundColor = 'red';

  constructor() {
  }
}
