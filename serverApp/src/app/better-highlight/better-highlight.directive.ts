import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
  }
  @Input() defaultColor: string = 'red';
  @Input() highlightColor: string = 'green';

  @HostBinding('style.backgroundColor')
  backgroundColor: string = this.defaultColor;
  @HostBinding('style.color') color: string = 'white';

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   'background-color',
    //   'green'
    // );
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');

    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');

    this.backgroundColor = 'red';
  }
}
