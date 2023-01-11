import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appGrade]'
})
export class GradeDirective {

  @Input() mark = 0;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.mark >= 90) {
      this.el.nativeElement.style.color = 'green';
    } else if (this.mark < 90 && this.mark >= 35) {
      this.el.nativeElement.style.color = 'blue';
    } else {
      this.el.nativeElement.style.color = 'red';
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color = 'black';
  }

}
