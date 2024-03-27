import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { Server } from './server.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  server!: Server; // tell typescript that this variable will have a value at runtime

  constructor(private serversService: ServersService) {}

  ngOnInit() {
    this.server = this.serversService.getServer(1);
  }
}
