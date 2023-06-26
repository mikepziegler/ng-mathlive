import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { renderMathInElement } from 'mathlive';

@Component({
  selector: 'app-root',
  template: `
    <div id='mathfield'></div>

  `
})
export class AppComponent implements AfterViewInit {
  @ViewChild('mathField', { static: true })
  mathFieldElement: ElementRef<HTMLDivElement>;

  mathfield: any;
  latex: string;
  mathML: string;
  asciiMath: string;
  svg: string;

  ngAfterViewInit() {
    renderMathInElement('mathfield', {});
  }

  onCmd(latex: string) {
    this.mathfield.$perform([
      'insert',
      latex,
      { focus: true, feedback: true, mode: 'math', format: 'auto', resetStyle: true }
    ]);
    this.convert();
  }

  convert() {
    this.latex = this.mathfield.$text('latex');
    this.mathML = this.mathfield.$text('mathML');
  }
}
