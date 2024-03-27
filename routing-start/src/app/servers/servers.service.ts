import { Injectable } from '@angular/core';
import { Server } from './server/server.model';

@Injectable({
  providedIn: 'root',
})
export class ServersService {
  constructor() {}

  private servers: Server[] = [
    new Server(1, 'Production Server', 'online'),
    new Server(2, 'Test Server', 'offline'),
    new Server(3, 'Dev Server', 'offline'),
  ];

  getServers(): Server[] {
    return this.servers;
  }

  getServer(id: number): Server {
    const server = this.servers.find((s: Server): boolean => {
      return s.id === id;
    });
    if (server == undefined) throw new TypeError();
    return server;
  }

  updateServer(id: number, serverInfo: { name: string; status: string }) {
    const server = this.servers.find((s) => {
      return s.id === id;
    });
    if (server == undefined) throw new TypeError();
    if (server) {
      server.name = serverInfo.name;
      server.status = serverInfo.status;
    }
  }
}
