import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Server } from '../shared/server.model';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  // EventEmitter turns properties into events that can be emitted, allowing us to emit our own events
  @Output() serverCreated: EventEmitter<Server> = new EventEmitter<Server>();
  // @Output() makes the property listenable to parent component
  // @Output allows an input to work as alias to the property
  @Output('bpCreated') blueprintCreated: EventEmitter<Server> =
    new EventEmitter<Server>();
  newServerName: string = '';
  newServerContent: string = '';

  constructor() {}

  ngOnInit(): void {}

  onAddServer(): void {
    this.serverCreated.emit(
      new Server(this.newServerName, this.newServerContent)
    ); // emits the event
  }

  onAddBlueprint(): void {
    this.blueprintCreated.emit(
      new Server(this.newServerName, this.newServerContent)
    );
  }
}
