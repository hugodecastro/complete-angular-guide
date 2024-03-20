import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';

@NgModule({
  declarations: [
    AppComponent,
    // custom components inside AppComponent
    ServerComponent,
    ServersComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent], // initialize application
})
// all begins here
// the bootstrap flow is: app.modules.ts -> app.component.ts -> app.component.html -> index.html
export class AppModule {}
