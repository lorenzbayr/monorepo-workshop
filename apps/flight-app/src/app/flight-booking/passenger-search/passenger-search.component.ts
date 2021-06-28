import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import {
  PassengerModel,
  PassengerService,
  PassengerUpdateModel,
} from '@flight-workspace/passenger-api';
import { Observable, Subject } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-passenger-search',
  templateUrl: './passenger-search.component.html',
  styleUrls: ['./passenger-search.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PassengerSearchComponent implements OnDestroy {
  passengers$: Observable<PassengerModel[]> = this.passengerService.findAll();
  selectedPassenger: PassengerUpdateModel = null;
  passengerForm: FormGroup;

  ngUnsubscribe = new Subject();

  constructor(
    private passengerService: PassengerService,
    private fb: FormBuilder
  ) {
    this.passengerForm = fb.group({
      bonusMiles: [{ value: 0, disabled: true }],
      name: '',
      firstName: '',
      passengerStatus: [{ value: 'C' }],
    });
  }

  selectPassenger(passenger: PassengerModel): void {
    this.selectedPassenger = passenger;
    this.passengerForm.reset();
    this.passengerForm.patchValue(passenger);
  }

  submit(): void {
    if (this.passengerForm.dirty && this.passengerForm.touched) {
      let data: PassengerUpdateModel = { ...this.passengerForm.value };
      if (this.selectedPassenger && this.selectedPassenger.id) {
        data = { id: this.selectedPassenger.id, ...data };
      }
      this.passengerService
        .save(data)
        .pipe(takeUntil(this.ngUnsubscribe))
        .subscribe((person) => {
          // Update State
          console.log(person);
        });
    }
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  create() {
    const newPassenger: PassengerUpdateModel = {
      bonusMiles: 0,
      name: '',
      firstName: '',
      passengerStatus: 'A',
    };
    this.selectedPassenger = newPassenger;
    this.passengerForm.patchValue(newPassenger);
  }
}
