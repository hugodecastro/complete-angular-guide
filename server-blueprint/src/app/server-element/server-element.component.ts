import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit {
  //by default all properties can be only accessed by its own class
  //@Input() exposes a property to its parent component
  @Input() element: { type: string; name: string; content: string };

  ngOnInit(): void {}
}
