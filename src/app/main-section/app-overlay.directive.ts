import { Directive, ElementRef, Renderer2,HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[appAppOverlay]'
})
export class AppOverlayDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    // this.ChangeBgColor('red');
}
// @HostListener('mouseover') onMouseOver() {
//     this.ChangeBgColor('red');
// }
@HostListener('click') onClick() {
    window.alert('Host Element Clicked');
}
@HostListener('mouseleave') onMouseLeave() {
    this.ChangeBgColor('black');
}
ChangeBgColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
}

@HostBinding('style.border') border: string;
@HostListener('mouseover') onMouseOver() {
this.border = '5px solid green';
}

}
