import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // need to have at least one style
  // styles: ['h3 { color: dodgerblue;}'], // same as above, user for shorts inline styling
})
// the selector is created to be used as custom html tag inside index.html
// a component is a directive which is a instruction in the DOM (app-root)
export class AppComponent {}
