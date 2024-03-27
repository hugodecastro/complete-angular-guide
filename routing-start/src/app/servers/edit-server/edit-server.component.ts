import { Component, OnInit } from '@angular/core';

import { Server } from '../server/server.model';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent implements OnInit {
  server!: Server;
  serverName: string = '';
  serverStatus: string = '';

  constructor(private serversService: ServersService) {}

  ngOnInit(): void {
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer(): void {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
  }
}
