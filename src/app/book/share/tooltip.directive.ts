import { Directive, Input, HostListener, ElementRef } from '@angular/core';

/*
  Directive cannot be shared by more than one module.
  To Share: Make shared module, export it and import shared module
  in all other modules 
*/
@Directive({
  selector: '[tooltip]'
})
export class TooltipDirective {

  @Input()
  tooltip: string;

  tooltipElement = document.createElement('div');

  constructor(_elementRef: ElementRef) {
    _elementRef.nativeElement.appendChild(this.tooltipElement);
   }

  @HostListener('mouseenter')
  onmouseenter() {
    this.tooltipElement.innerText = this.tooltip ;
    this.tooltipElement.hidden = null;
  }

  @HostListener('mouseleave')
  onmouseleave() {
    this.tooltipElement.hidden = true;
  }
}
