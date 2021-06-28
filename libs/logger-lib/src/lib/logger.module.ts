/* eslint-disable @typescript-eslint/no-unused-vars */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogMonitorComponent } from './log-monitor.component';
import { LoggerConfig } from './logger.config';
import { LoggerService } from './logger.service';
import { LogFormatterService } from './log-formatter.service';
import { DefaulLogFormatterService } from './defaul-log-formatter.service';

// imports: [ LoggerModule.forRoot({ ... }) ]

@NgModule({
  imports: [CommonModule],
  declarations: [LogMonitorComponent],
  // providers: [
  //   LoggerService
  // ],
  exports: [LogMonitorComponent],
})
export class LoggerModule {
  // Setup
  static forRoot(config: LoggerConfig): ModuleWithProviders<LoggerModule> {
    return {
      ngModule: LoggerModule,
      providers: [
        { provide: LoggerConfig, useValue: config },
        config.formatter
          ? [{ provide: LogFormatterService, useValue: new config.formatter() }]
          : [
              {
                provide: LogFormatterService,
                useValue: new DefaulLogFormatterService(),
              },
            ],
      ],
    };
  }
}
