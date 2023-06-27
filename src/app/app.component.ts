import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MathfieldElement } from 'mathlive';

MathfieldElement.fontsDirectory = '../assets/mathlive/fonts';
MathfieldElement.soundsDirectory = '../assets/mathlive/sounds';

@Component({
  selector: 'app-root',
  template: `
    <math-field #mathField />
  `
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('mathField', { static: true }) mathFieldElement: ElementRef<MathfieldElement>;

  ngOnInit() {
    this.mathFieldElement.nativeElement = new MathfieldElement();
  }

  ngAfterViewInit() {

  }

}
