import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]', // selecting by attribute
  // selector: '.app-servers', // selecting by class
  templateUrl: './servers.component.html', // need to have at least one template
  // template: '<app-server></app-server><app-server></app-server>' // same result as above, used for shorts inline html
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = 'TestServer';
  serverCreated: boolean = false;
  servers: string[] = ['TestServer', 'TestServer 2'];

  constructor() {
    setTimeout((): void => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer(): void {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;
  }

  onUpdateServerName(event: Event): void {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
