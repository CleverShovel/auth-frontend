import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appPhoneMask]',
})
export class PhoneMaskDirective {

  constructor(public ngControl: NgControl) { }

  @HostListener('ngModelChange', ['$event'])
  onModelChange(event) {
    this.onInputChange(event, false);
  }
  
  @HostListener('keydown.backspace', ['$event'])
  keydownBackspace(event) {
    this.onInputChange(event.target.value, true);
  }
  

  onInputChange(event, backspace: boolean) {
    let newVal: string = event.replace(/\D/g, '');
    if (newVal.startsWith('7')) {
      newVal = newVal.slice(1);
    }
    if (backspace && newVal.length <= 6) {
      newVal = newVal.substring(0, newVal.length - 1);
    }
    if (newVal.length === 0) {
      newVal = '+7';
    } else if (newVal.length <= 3) {
      newVal = newVal.replace(/^(\d{0,3})/, '+7 ($1)');
    } else if (newVal.length <= 6) {
      newVal = newVal.replace(/^(\d{0,3})(\d{0,3})/, '+7 ($1) $2');
    } else if (newVal.length <= 10) {
      newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '+7 ($1) $2-$3');
    } else {
      newVal = newVal.substring(0, 10);
      newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '+7 ($1) $2-$3');
    }
    this.ngControl.valueAccessor.writeValue(newVal);
  }
}