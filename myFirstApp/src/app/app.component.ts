import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [
    `
      .online {
        color: white;
      }
      .times {
        color: blue;
      }
    `,
  ],
})  
export class AppComponent {
  username = '';
  title = 'appComponent';
  serverCreated = false;

  serverName = '';
  smallTitle = 'I am in AppComponent';

  serverStatus: string = 'offline';

  server = [];

  // for the challenge
  showDetail = false;
  counting = 0;
  log = [];
  //
  constructor() {
    this.smallTitle = this.smallTitle;
    this.username = this.username;
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }
  onServerCreated() {
    this.serverCreated = true;
    this.server.push(this.serverName);
  }
  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
  onCount() {
    this.counting++;
    this.showDetail = !this.showDetail;
    this.log.push(this.log.length + 1);
  }
}
