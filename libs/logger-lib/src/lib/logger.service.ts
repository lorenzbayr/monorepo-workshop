/* eslint-disable no-restricted-syntax */
import { Injectable, Optional } from '@angular/core';
import { LoggerConfig } from './logger.config';
import { LogFormatterService } from './log-formatter.service';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor(
    @Optional() private config: LoggerConfig,
    private formatter: LogFormatterService
  ) {}

  debug(message: string): void {
    if (!this.config.enableDebug) return;
    console.debug(this.formatter.format(message));
  }

  log(message: string): void {
    console.log(this.formatter.format(message));
  }
}
