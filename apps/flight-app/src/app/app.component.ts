import { Component, OnInit } from '@angular/core';
import { LoggerService } from '@flight-workspace/logger-lib';
import { AuthLibService } from '@flight-workspace/shared/auth-lib';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private loggerService: LoggerService,
    private authService: AuthLibService
  ) {
    this.authService.login('Max', null);
    console.log(this.authService.user);
  }

  ngOnInit(): void {
    this.loggerService.log('Application is running');
    this.loggerService.debug('This only runs in debug mode');
  }
}
