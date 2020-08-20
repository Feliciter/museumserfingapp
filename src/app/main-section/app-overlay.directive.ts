import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appAppOverlay]',
})
export class AppOverlayDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    // this.ChangeBgColor('red');
  }

  @HostListener('click') onClick() {
    window.alert('Host Element Clicked');
  }

  @HostBinding('style.border') border: string;

  @HostBinding('class.card-outline-primary') private ishovering: boolean;

  @HostListener('mouseover') onMouseOver() {
    // this.border = '5px solid green';
    let part = this.el.nativeElement.querySelector('.card-body');
    this.renderer.setStyle(part, 'opacity', '1');
    this.ishovering = true;
  }

  @HostListener('mouseleave') onMouseLeave() {
    let part = this.el.nativeElement.querySelector('.card-body');
    this.renderer.setStyle(part, 'opacity', '0');
    this.ishovering = true;
  }
}
