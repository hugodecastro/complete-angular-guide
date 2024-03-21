import { Server } from './server.model';

export class ServerElement {
  public type: string;
  public server: Server;

  constructor(type: string, name: string, content: string) {
    this.type = type;
    this.server = new Server(name, content);
  }
}
