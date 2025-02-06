import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appColor]',
  standalone: true
})
export class ColorDirective {
 constructor(private el: ElementRef) {
    this.el.nativeElement.style.setProperty('background-color', 'var(--clr-orange)');
  }

 

}
