import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[fchost]',
})
export class fcDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}