import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMagnifier]'
})
export class MagnifierDirective {

  constructor() { }


  @HostBinding("align") size = "left";

  @HostListener("mouseenter", ['$event'])
  onHover(e) {
    this.size = "right";
  }

}
