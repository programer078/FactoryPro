import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appArrowIcon]',
  standalone: true
})
export class ArrowIconDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.classList.add(
      'ml-[6px]',
      'text-[1.2rem]',
      '-rotate-[28deg]',
      'transition-transform',
      'duration-300'
    );
    
    const iconElement = document.createElement('ion-icon');
    iconElement.setAttribute('name', 'arrow-forward-outline');
    iconElement.classList.add('text-xs', 'h-5', 'w-5');
    
    this.el.nativeElement.appendChild(iconElement);
  }
}