import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  // EventEmitter turns properties into events that can be emitted, allowing us to emit our own events
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  // @Output() makes the property listenable to parent component
  @Output() blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  newServerName: string = '';
  newServerContent: string = '';

  constructor() {}

  ngOnInit(): void {}

  onAddServer(): void {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    }); // emits the event
  }

  onAddBlueprint(): void {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent,
    });
  }
}
