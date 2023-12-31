import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MathfieldElement } from 'mathlive';

MathfieldElement.fontsDirectory = 'node_modules/mathlive/dist/fonts';
MathfieldElement.soundsDirectory = 'node_modules/mathlive/dist/sounds';

@Component({
  selector: 'app-root',
  template: `
    <math-field #mathField />
  `
})
export class AppComponent implements OnInit {
  @ViewChild('mathField', { static: true }) mathFieldElement: ElementRef<MathfieldElement>;

  ngOnInit() {
    this.mathFieldElement.nativeElement = new MathfieldElement();
  }


}
