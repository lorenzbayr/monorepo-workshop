import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoggerModule } from '@flight-workspace/logger-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    // Service is root provided
    LoggerModule.forRoot({ enableDebug: false }),
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'check-in',
      },
      {
        path: 'check-in',
        loadChildren: () =>
          import('@flight-workspace/luggage/feature-checkin').then(
            (m) => m.LuggageFeatureCheckinModule
          ),
      },
      {
        path: 'report-loss',
        loadChildren: () =>
          import('@flight-workspace/luggage/feature-report-loss').then(
            (m) => m.LuggageFeatureReportLossModule
          ),
      },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
