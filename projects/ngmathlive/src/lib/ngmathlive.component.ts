import { Component, ElementRef, ViewChild } from '@angular/core';
import { MathfieldElement } from 'mathlive';

MathfieldElement.fontsDirectory = 'node_modules/mathlive/dist/fonts';
MathfieldElement.soundsDirectory = 'node_modules/mathlive/dist/sounds';

@Component({
  selector: 'lib-ngmathlive',
  template: `
    <math-field #mathField />
  `,
  styles: [
    `:host {
      flex: 1 1 auto;
    }`
  ]
})
export class NgmathliveComponent {
  @ViewChild('mathField', { static: true }) mathFieldElement: ElementRef<MathfieldElement>;

  ngOnInit() {
    this.mathFieldElement.nativeElement = new MathfieldElement();
  }
}
