import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]',
})
export class UnlessDirective {
  // set allows to executes a method every time the property changes
  // appUnless is still a property
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef); // creates a view
    } else {
      this.viewContainerRef.clear(); // remove the view from the DOM
    }
  }

  constructor(
    private templateRef: TemplateRef<any>, // template ref gives access to the template
    private viewContainerRef: ViewContainerRef
  ) {}
}
