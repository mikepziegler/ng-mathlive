import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MathfieldElement } from 'mathlive';

MathfieldElement.fontsDirectory = '../assets/mathlive/fonts';

@Component({
  selector: 'app-root',
  template: `
    <math-field #mathField />
  `
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('mathField', { static: true }) mathFieldElement: ElementRef<MathfieldElement>;

  ngOnInit() {
    const mfe = new MathfieldElement();


    this.mathFieldElement.nativeElement = mfe;


  }

  ngAfterViewInit() {

  }

}
