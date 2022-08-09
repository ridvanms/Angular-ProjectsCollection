import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { LoggingService } from './Logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private autService: AuthService,
    private loggingService: LoggingService
  ) {}
  ngOnInit(): void {
    this.autService.autoLogin();
    this.loggingService.printLog('Hello from AppComponent');
  }
}
