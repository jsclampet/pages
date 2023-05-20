import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  // setting "ElementRef" data type , to enable attaching directive to element in HTML document
  constructor(private element: ElementRef) {}

  // "input" decorator for class field as an input property
  // "set" in order to detect changes to "backgroundColor, via "color" parameter, with input argument
  @Input() set backgroundColor(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  } 
}
