import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]', // this will now be recognize whenever added the property to an element
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {} // object injection

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'green'; // get access to the element and change its background color
  }
}
