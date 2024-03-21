import { Component, Input, OnInit } from '@angular/core';
import { ServerElement } from '../shared/serverElement.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit {
  //by default all properties can be only accessed by its own class
  //@Input() exposes a property to its parent component
  // @Input allows an input to work as alias to the property
  @Input('srvElement') element: ServerElement;

  ngOnInit(): void {}
}
