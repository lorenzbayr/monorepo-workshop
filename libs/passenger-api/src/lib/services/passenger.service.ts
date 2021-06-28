import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PassengerModel, PassengerUpdateModel } from '../model/passenger.model';

const URL = 'http://www.angular.at/api/passenger';

@Injectable({
  providedIn: 'root',
})
export class PassengerService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<PassengerModel[]> {
    return this.http.get<PassengerModel[]>(URL);
  }

  save(passenger: PassengerUpdateModel): Observable<PassengerModel> {
    return this.http.post<PassengerModel>(`${URL}`, passenger);
  }
}
