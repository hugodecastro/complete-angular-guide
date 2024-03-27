import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterHighlight') highlightColor: string = 'blue';
  // @HostBinding is a easier approach to Render
  // HostBinding will access the style property and change background color on the element this directive is (in the example will be on p)
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) {} // render is not limited to the browser and should be used for any DOM manipulations

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
  }

  // @HostListener decorator reacts to any user event and creates an event binding to the DOM event
  @HostListener('mouseenter') mouseOver(eventData: Event): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
