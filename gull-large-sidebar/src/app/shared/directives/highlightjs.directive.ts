import { Directive, Input, ElementRef } from '@angular/core';
import hljs from 'highlight.js';
// import hljs from 'highlight.js/lib/highlight';
// import javascript from 'highlight.js/lib/languages/javascript';
// import typescript from 'highlight.js/lib/languages/typescript';

@Directive({
  selector: '[highlight]'
})
export class HighlightjsDirective {
  @Input('highlight') highlight;
  nativeEl;
  constructor(
    public el: ElementRef
  ) {
    // this.registerLanguages();
    this.nativeEl = this.el.nativeElement;

    setTimeout(() => {
      hljs.highlightBlock(this.nativeEl);
    });
  }

  // registerLanguages() {
  //   if(!hljs.listLanguages().length) {
  //     hljs.registerLanguage('javascript', javascript);
  //     hljs.registerLanguage('typescript', typescript);
  //   }
  // }

}
