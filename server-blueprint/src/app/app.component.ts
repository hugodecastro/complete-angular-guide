import { Component } from '@angular/core';
import { Server } from './shared/server.model';
import { ServerElement } from './shared/serverElement.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements: ServerElement[] = [];

  onServerAdded(serverData: Server): void {
    this.serverElements.push(
      new ServerElement('server', serverData.name, serverData.content)
    );
  }

  onBlueprintAdded(blueprintData: Server): void {
    this.serverElements.push(
      new ServerElement('blueprint', blueprintData.name, blueprintData.content)
    );
  }
}
