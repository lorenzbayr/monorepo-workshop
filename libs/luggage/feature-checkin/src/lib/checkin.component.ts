import { Component, OnInit } from '@angular/core';
import { CheckinFacade } from '@flight-workspace/luggage/domain';
import { LoggerService } from '@flight-workspace/logger-lib';

@Component({
  selector: 'luggage-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss'],
})
export class CheckinComponent implements OnInit {
  luggageList$ = this.checkinFacade.luggageList$;

  constructor(
    private checkinFacade: CheckinFacade,
    private loggerService: LoggerService
  ) {}

  ngOnInit() {
    this.load();
    this.loggerService.log('Coming from CheckIn Component');
  }

  load(): void {
    this.checkinFacade.load();
  }
}
