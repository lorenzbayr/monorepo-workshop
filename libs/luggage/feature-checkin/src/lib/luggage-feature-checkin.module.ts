import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LuggageDomainModule } from '@flight-workspace/luggage/domain';
import { CheckinComponent } from './checkin.component';
import { RouterModule } from '@angular/router';
import { LuggageUiCardModule } from '@flight-workspace/luggage/ui-card';

@NgModule({
  imports: [
    CommonModule,
    LuggageDomainModule,
    LuggageUiCardModule,
    RouterModule.forChild([{ path: '', component: CheckinComponent }]),
  ],
  declarations: [CheckinComponent],
  exports: [CheckinComponent],
})
export class LuggageFeatureCheckinModule {}
